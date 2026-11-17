#!/usr/bin/env bash
# Builds the static version of the site for GitHub Pages into out/.
#   bash scripts/build-pages.sh
# Then copy the contents of out/ into the Sohrabrana.github.io repository and push.
set -euo pipefail
cd "$(dirname "${BASH_SOURCE[0]}")/.."
rm -rf .next out
STATIC_EXPORT=1 NEXT_PUBLIC_SITE_URL="${NEXT_PUBLIC_SITE_URL:-https://sohrabrana.github.io}" npm run build
touch out/.nojekyll   # GitHub Pages must serve the _next/ folder as is
# Restore the robots/sitemap files for the default (non-export) build.
node scripts/generate-seo-files.mjs > /dev/null
echo "Static site ready in out/ ($(find out -type f | wc -l) files)."
