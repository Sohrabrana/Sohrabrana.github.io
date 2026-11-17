import type { NextConfig } from "next";

// Two build modes:
// - default (Vercel or `npm run start`): server build with Cache Components
// - STATIC_EXPORT=1 (GitHub Pages, any static host): plain HTML/CSS/JS in out/
const staticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  ...(staticExport
    ? { output: "export", trailingSlash: true, images: { unoptimized: true } }
    : { cacheComponents: true, partialPrefetching: true }),
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
