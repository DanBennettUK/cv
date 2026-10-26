"""Fail if CV copy uses wording this site does not publish.

Source files are scanned for wording that must not ship. Percent signs and
Twitter or Instagram mentions are checked on visible copy only: the built
page text, and the PDF text when scripts/check-pdf.py calls scan_text.
The pattern list lives in this file, so this file is not part of the scan.
"""

from html.parser import HTMLParser
from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parent.parent
SCAN_DIRS = ("lib", "components", "app")
SCAN_SUFFIXES = {".ts", ".tsx", ".css", ".json"}
BUILT_PAGES = (
    "dist/index.html",
    "dist/resume/index.html",
    "dist/pdf/creator/index.html",
    "dist/pdf/ai/index.html",
    "dist/pdf/us/index.html",
)

SOURCE_PATTERNS = (
    ("em dash", re.compile("\u2014|\u2015|&mdash;|&#8212;|&#x2014;", re.I)),
    ("sole owner", re.compile(r"sole\s+owner", re.I)),
    ("KSSM", re.compile(r"KSSM")),
    ("Streaming Partnership", re.compile(r"Streaming\s+Partnership", re.I)),
    ("budget", re.compile(r"budget", re.I)),
    ("redundancy", re.compile(r"redundan", re.I)),
    ("KCN", re.compile(r"\bKCN\b")),
    ("Partner Hub", re.compile(r"Partner\s+Hub", re.I)),
    ("300+", re.compile(r"300\+")),
)

VISIBLE_PATTERNS = SOURCE_PATTERNS + (
    ("percent sign", re.compile(r"%|&#37;|&percnt;", re.I)),
    ("instagram or twitter", re.compile(r"instagram|twitter", re.I)),
)


class VisibleText(HTMLParser):
    skip_tags = {"head", "script", "style", "noscript", "template"}

    def __init__(self):
        super().__init__()
        self.skip = 0
        self.parts = []

    def handle_starttag(self, tag, attrs):
        if tag in self.skip_tags:
            self.skip += 1

    def handle_endtag(self, tag):
        if tag in self.skip_tags and self.skip:
            self.skip -= 1

    def handle_data(self, data):
        if not self.skip:
            self.parts.append(data)


def visible_html_text(html):
    parser = VisibleText()
    parser.feed(html)
    return "\n".join(part.strip() for part in parser.parts if part.strip())


def scan_text(label, text, visible=False):
    failures = []
    patterns = VISIBLE_PATTERNS if visible else SOURCE_PATTERNS
    for lineno, line in enumerate(text.splitlines(), 1):
        for name, pattern in patterns:
            if pattern.search(line):
                snippet = line.strip()
                if len(snippet) > 180:
                    snippet = snippet[:180] + "..."
                failures.append(f"{label}:{lineno}: {name}: {snippet}")
    return failures


def scan_sources():
    failures = []
    for directory in SCAN_DIRS:
        base = ROOT / directory
        for path in sorted(base.rglob("*")):
            if not path.is_file() or path.suffix not in SCAN_SUFFIXES:
                continue
            failures.extend(scan_text(path.relative_to(ROOT).as_posix(), path.read_text(encoding="utf-8")))
    return failures


def scan_built_pages():
    failures = []
    for relative in BUILT_PAGES:
        path = ROOT / relative
        if not path.is_file():
            failures.append(f"{relative}: missing built page. Run npm run build first.")
            continue
        text = visible_html_text(path.read_text(encoding="utf-8"))
        failures.extend(scan_text(relative, text, visible=True))
    return failures


def main():
    failures = scan_sources() + scan_built_pages()
    if failures:
        sys.exit("CV copy check failed:\n" + "\n".join(failures))
    print("CV copy check passed.")


if __name__ == "__main__":
    main()
