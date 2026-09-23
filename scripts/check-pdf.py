"""Check that the download includes every printable CV heading and text block.

Run after npm run pdf. Requires pypdf (python3 -m pip install pypdf==6.0.0).
"""

from html.parser import HTMLParser
from pathlib import Path
import re
import sys
import unicodedata

from pypdf import PdfReader


def normalize(text):
    # Font extraction can insert spaces, preserve ligatures, or map a hyphen
    # glyph to a minus sign (for example, the font's numeric "30-minute").
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


root = Path(__file__).resolve().parent.parent
parser = PrintableContent()
parser.feed((root / "dist/index.html").read_text(encoding="utf-8"))
if not parser.blocks:
    sys.exit("No CV content found in the static export.")

pdf_path = Path(sys.argv[1]) if len(sys.argv) > 1 else root / "public/Dan-Bennett-CV.pdf"
reader = PdfReader(pdf_path)
pdf_text = normalize("\n".join(page.extract_text() or "" for page in reader.pages))
missing = [text for text in parser.blocks if normalize(text) not in pdf_text]
if missing:
    sys.exit("PDF is missing CV content:\n" + "\n".join(f"- {text}" for text in missing))

if len(sys.argv) == 1:
    deployed_pdf = root / "dist/Dan-Bennett-CV.pdf"
    if deployed_pdf.read_bytes() != pdf_path.read_bytes():
        sys.exit("The deployed PDF differs from the generated download.")

print(f"Verified {len(parser.blocks)} CV text blocks across {len(reader.pages)} PDF pages.")
