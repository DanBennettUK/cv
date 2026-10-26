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
    "https://www.linkedin.com/in/danbennettuk",
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


def main():
    root = Path(__file__).resolve().parent.parent
    variants = json.loads((root / "lib" / "pdf-variants.json").read_text(encoding="utf-8"))["variants"]
    errors = []

    for variant in variants:
        html_path = root / "dist" / "pdf" / variant["id"] / "index.html"
        pdf_path = root / "public" / variant["fileName"]
        deployed_pdf = root / "dist" / variant["fileName"]
        label = variant["id"]

        if not html_path.is_file():
            errors.append(f"{label}: missing {html_path.relative_to(root)}")
            continue
        if not pdf_path.is_file():
            errors.append(f"{label}: missing {pdf_path.relative_to(root)}")
            continue

        blocks = printable_blocks(html_path)
        if not blocks:
            errors.append(f"{label}: no CV content found in the static export")
            continue

        reader = PdfReader(pdf_path)
        raw_text = "\n".join(page.extract_text() or "" for page in reader.pages)
        pdf_text = normalize(raw_text)
        missing = [text for text in blocks if normalize(text) not in pdf_text]
        if missing:
            errors.append(f"{label}: PDF is missing CV content:\n" + "\n".join(f"- {text}" for text in missing))

        if len(reader.pages) != variant["pages"]:
            errors.append(f"{label}: expected {variant['pages']} pages, found {len(reader.pages)}")

        normalized_required = [normalize(text) for text in REQUIRED_TEXT]
        for required, needle in zip(REQUIRED_TEXT, normalized_required):
            if needle not in pdf_text:
                errors.append(f"{label}: PDF text does not include {required}")

        errors.extend(scan_text(f"{label} pdf", raw_text, visible=True))

        if label == "creator":
            alias = root / "public" / "Dan-Bennett-CV.pdf"
            deployed_alias = root / "dist" / "Dan-Bennett-CV.pdf"
            if not alias.is_file() or alias.read_bytes() != pdf_path.read_bytes():
                errors.append("creator: Dan-Bennett-CV.pdf is not a copy of the creator PDF")
            elif not deployed_alias.is_file() or deployed_alias.read_bytes() != pdf_path.read_bytes():
                errors.append("creator: dist/Dan-Bennett-CV.pdf differs from the creator PDF")

        if not deployed_pdf.is_file() or deployed_pdf.read_bytes() != pdf_path.read_bytes():
            errors.append(f"{label}: the deployed PDF differs from the generated download")
        else:
            print(f"Verified {label}: {len(blocks)} text blocks across {len(reader.pages)} pages.")

    if errors:
        sys.exit("PDF check failed:\n" + "\n".join(errors))


if __name__ == "__main__":
    main()
