import { readFile, writeFile } from "node:fs/promises";
import { loadEnv } from "vite";
const env = loadEnv("production", process.cwd(), "VITE_");
const raw = process.env.VITE_SITE_URL || env.VITE_SITE_URL;
if (!raw) {
  await writeFile("public/robots.txt", "User-agent: *\nDisallow: /\n");
  await writeFile(
    "public/sitemap.xml",
    '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"/>\n',
  );
  console.log(
    "SEO preview mode: set VITE_SITE_URL to enable canonical URLs, indexing and sitemap entries.",
  );
} else {
  const url = new URL(raw);
  if (url.protocol !== "https:" || ["localhost", "127.0.0.1"].includes(url.hostname))
    throw new Error("VITE_SITE_URL must be your public HTTPS domain.");
  const origin = url.origin;
  const pages = JSON.parse(await readFile("src/content/seo-pages.json", "utf8"));
  const escape = (value) =>
    value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll('"', "&quot;");
  const entries = Object.keys(pages)
    .map((path) => `  <url><loc>${escape(origin + path)}</loc></url>`)
    .join("\n");
  await writeFile(
    "public/sitemap.xml",
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`,
  );
  await writeFile(
    "public/robots.txt",
    `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`,
  );
  console.log(`Generated sitemap and robots.txt for ${origin}`);
}
