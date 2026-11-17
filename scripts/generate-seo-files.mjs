// Writes public/robots.txt and public/sitemap.xml for the current site URL.
// Static files work on every host (Vercel, GitHub Pages, any static server).
// Runs automatically before `npm run dev` and `npm run build`.
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const profile = readFileSync(join(root, "src/content/profile.ts"), "utf8");
const fromProfile = (profile.match(/siteUrl:\s*"([^"]+)"/) || [])[1];
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || fromProfile).replace(/\/$/, "");
const slash = process.env.STATIC_EXPORT === "1" ? "/" : "";

const pages = [
  ["/", "1.0"],
  [`/cv/en${slash}`, "0.8"],
  [`/cv/de${slash}`, "0.8"],
  [`/cv/en/source${slash}`, "0.3"],
  [`/cv/de/source${slash}`, "0.3"],
];
const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(([path, priority]) => `  <url><loc>${siteUrl}${path}</loc><lastmod>${today}</lastmod><priority>${priority}</priority></url>`)
  .join("\n")}
</urlset>
`;
writeFileSync(join(root, "public/sitemap.xml"), sitemap);
writeFileSync(join(root, "public/robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);
console.log(`SEO files written for ${siteUrl}`);
