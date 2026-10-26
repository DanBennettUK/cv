"""Check each CV PDF against the page that produced it.

Run after npm run pdf. Requires pypdf (python3 -m pip install pypdf==6.0.0).
"""

from html.parser import HTMLParser
from pathlib import Path
import json
import re
import sys
import unicodedata

from pypdf import PdfReader

import importlib.util

_copy_path = Path(__file__).with_name("check-copy.py")
_copy_spec = importlib.util.spec_from_file_location("check_copy", _copy_path)
check_copy = importlib.util.module_from_spec(_copy_spec)
_copy_spec.loader.exec_module(check_copy)
scan_text = check_copy.scan_text

REQUIRED_TEXT = (
    "dan@danbennett.me",
    "danbennett.me",
    "linkedin.com/in/danbennettuk",
    "github.com/DanBennettUK",
)

REQUIRED_LINKS = (
    "mailto:dan@danbennett.me",
    "https://danbennett.me",
    "https://www.linkedin.com/in/danbennettuk",
    "https://github.com/DanBennettUK",
)


def normalize(text):
    text = unicodedata.normalize("NFKC", text).replace("\u2212", "-")
    return re.sub(r"\s+", "", text).casefold()


class PrintableContent(HTMLParser):
    void_tags = {"area", "base", "br", "col", "embed", "hr", "img", "input",
                 "link", "meta", "param", "source", "track", "wbr"}
    block_tags = {"h1", "h2", "h3", "h4", "p", "li"}

    def __init__(self):
        super().__init__()
        self.stack = []
        self.blocks = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        hidden = (bool(self.stack and self.stack[-1][1])
                  or tag in {"script", "style", "nav", "footer"}
                  or "no-print" in attrs.get("class", "").split())
        if tag not in self.void_tags:
            text = [] if tag in self.block_tags and not hidden else None
            self.stack.append((tag, hidden, text))

    def handle_data(self, data):
        if self.stack and not self.stack[-1][1]:
            for _, _, text in self.stack:
                if text is not None:
                    text.append(data)

    def handle_endtag(self, tag):
        if self.stack and self.stack[-1][0] == tag:
            _, _, text = self.stack.pop()
            if text is not None and "".join(text).strip():
                self.blocks.append("".join(text).strip())


def printable_blocks(html_path):
    parser = PrintableContent()
    parser.feed(html_path.read_text(encoding="utf-8"))
    return parser.blocks


def missing_file(label, path, root):
    if path.is_file():
        return []
    return [f"{label}: missing {path.relative_to(root)}"]


def content_errors(label, blocks, pdf_text):
    if not blocks:
        return [f"{label}: no CV content found in the static export"]
    missing = [text for text in blocks if normalize(text) not in pdf_text]
    if not missing:
        return []
    detail = "\n".join(f"- {text}" for text in missing)
    return [f"{label}: PDF is missing CV content:\n{detail}"]


def page_errors(label, found, expected):
    if found == expected:
        return []
    return [f"{label}: expected {expected} pages, found {found}"]


def required_errors(label, pdf_text):
    return [
        f"{label}: PDF text does not include {required}"
        for required in REQUIRED_TEXT
        if normalize(required) not in pdf_text
    ]


def annotation_uris(reader):
    found = []
    for page in reader.pages:
        annots = page.get("/Annots") or []
        for annot in annots:
            action = annot.get_object().get("/A")
            if action is None:
                continue
            if hasattr(action, "get_object"):
                action = action.get_object()
            uri = action.get("/URI") if hasattr(action, "get") else None
            if uri is not None:
                found.append(str(uri))
    return found


def link_present(required, found):
    return required in found or f"{required}/" in found


def link_errors(label, reader):
    found = annotation_uris(reader)
    return [
        f"{label}: PDF is missing link {required}"
        for required in REQUIRED_LINKS
        if not link_present(required, found)
    ]


def icon_errors(label, html_path):
    html = html_path.read_text(encoding="utf-8")
    if "contact-mark" in html:
        return [f"{label}: contact icons are still in the PDF page"]
    return []


def alias_errors(root, pdf_path):
    alias = root / "public" / "Dan-Bennett-CV.pdf"
    deployed_alias = root / "dist" / "Dan-Bennett-CV.pdf"
    if not alias.is_file() or alias.read_bytes() != pdf_path.read_bytes():
        return ["creator: Dan-Bennett-CV.pdf is not a copy of the creator PDF"]
    if not deployed_alias.is_file() or deployed_alias.read_bytes() != pdf_path.read_bytes():
        return ["creator: dist/Dan-Bennett-CV.pdf differs from the creator PDF"]
    return []


def deploy_errors(label, pdf_path, deployed_pdf, blocks, pages):
    if not deployed_pdf.is_file() or deployed_pdf.read_bytes() != pdf_path.read_bytes():
        return [f"{label}: the deployed PDF differs from the generated download"]
    print(f"Verified {label}: {len(blocks)} text blocks across {pages} pages.")
    return []


def check_variant(root, variant):
    label = variant["id"]
    html_path = root / "dist" / "pdf" / label / "index.html"
    pdf_path = root / "public" / variant["fileName"]
    deployed_pdf = root / "dist" / variant["fileName"]
    gaps = missing_file(label, html_path, root) + missing_file(label, pdf_path, root)
    if gaps:
        return gaps

    blocks = printable_blocks(html_path)
    reader = PdfReader(pdf_path)
    raw_text = "\n".join(page.extract_text() or "" for page in reader.pages)
    pdf_text = normalize(raw_text)
    errors = []
    errors.extend(content_errors(label, blocks, pdf_text))
    errors.extend(page_errors(label, len(reader.pages), variant["pages"]))
    errors.extend(required_errors(label, pdf_text))
    errors.extend(link_errors(label, reader))
    errors.extend(icon_errors(label, html_path))
    errors.extend(scan_text(f"{label} pdf", raw_text, visible=True))
    if label == "creator":
        errors.extend(alias_errors(root, pdf_path))
    errors.extend(deploy_errors(label, pdf_path, deployed_pdf, blocks, len(reader.pages)))
    return errors


def main():
    root = Path(__file__).resolve().parent.parent
    variant_file = root / "lib" / "pdf-variants.json"
    variants = json.loads(variant_file.read_text(encoding="utf-8"))["variants"]
    errors = []
    for variant in variants:
        errors.extend(check_variant(root, variant))
    if errors:
        sys.exit("PDF check failed:\n" + "\n".join(errors))


if __name__ == "__main__":
    main()
