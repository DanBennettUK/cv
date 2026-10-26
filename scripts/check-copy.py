"""Fail if CV copy uses wording this site does not publish.

Scans the content sources and the pages that render them. The pattern list
lives in this file, so this file is not part of the scan.
"""

from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parent.parent
SCAN_DIRS = ("lib", "components", "app")
SCAN_SUFFIXES = {".ts", ".tsx", ".css", ".json"}

PATTERNS = (
    ("em dash", re.compile("\u2014|\u2015|&mdash;|&#8212;|&#x2014;", re.I)),
    (
        "percent against target",
        re.compile(r"%\s*(?:of|above|vs\.?|versus)\s+(?:the\s+)?target", re.I),
    ),
    ("sole owner", re.compile(r"sole\s+owner", re.I)),
    ("instagram or twitter", re.compile(r"instagram|twitter", re.I)),
    ("KSSM", re.compile(r"KSSM")),
    ("Streaming Partnership", re.compile(r"Streaming\s+Partnership", re.I)),
)


def scan_text(label, text):
    failures = []
    for lineno, line in enumerate(text.splitlines(), 1):
        for name, pattern in PATTERNS:
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


def main():
    failures = scan_sources()
    if failures:
        sys.exit("CV copy check failed:\n" + "\n".join(failures))
    print("CV copy check passed.")


if __name__ == "__main__":
    main()
