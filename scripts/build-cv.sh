#!/usr/bin/env bash
# Compiles both CVs from cv/*.tex and publishes them to public/cv/.
# Requirements: a TeX Live installation with latexmk (pdfLaTeX), and
# poppler-utils (pdftoppm) for the preview images.
#
#   bash scripts/build-cv.sh
#
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SRC="$ROOT/cv"
OUT="$ROOT/public/cv"
BUILD="$(mktemp -d)"
trap 'rm -rf "$BUILD"' EXIT

mkdir -p "$OUT"

for name in Sohrab_Rana_CV_English Sohrab_Rana_CV_German; do
  echo "Compiling $name.tex"
  (cd "$SRC" && latexmk -pdf -interaction=nonstopmode -halt-on-error \
      -outdir="$BUILD" "$name.tex" > "$BUILD/$name.stdout" 2>&1) || {
    echo "LaTeX failed for $name. Last lines of the log:"
    tail -n 40 "$BUILD/$name.log"
    exit 1
  }

  pages="$(pdfinfo "$BUILD/$name.pdf" 2>/dev/null | awk '/^Pages:/ {print $2}')"
  if [ -n "${pages:-}" ] && [ "$pages" != "1" ]; then
    echo "Warning: $name.pdf has $pages pages (target: 1)."
  fi

  cp "$BUILD/$name.pdf" "$OUT/$name.pdf"

  if command -v pdftoppm > /dev/null; then
    pdftoppm -png -scale-to-x 1000 -scale-to-y -1 -f 1 -l 1 -singlefile "$BUILD/$name.pdf" "$OUT/$name-preview"
  fi
done

echo "Done. Files in public/cv/:"
ls -1 "$OUT"
