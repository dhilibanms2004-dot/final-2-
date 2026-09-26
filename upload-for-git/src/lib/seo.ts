import pages from "../content/seo-pages.json";
import { business } from "../content/site";
export type SitePath = keyof typeof pages;
export { pages };
// Set this public environment variable to the real HTTPS domain before publishing.
const configuredUrl = String(import.meta.env["VITE_SITE_URL"] || "").trim();
export const siteUrl = (() => {
  if (!configuredUrl) return "";
  try {
    const url = new URL(configuredUrl);
    return url.protocol === "https:" && !["localhost", "127.0.0.1"].includes(url.hostname)
      ? url.origin
      : "";
  } catch {
    return "";
  }
})();
export function pageHead(path: SitePath) {
  const page = pages[path];
  const canonical = siteUrl ? `${siteUrl}${path}` : "";
  const graph: Record<string, unknown>[] = [
    {
      "@type": "LocalBusiness",
      ...(siteUrl
        ? {
            "@id": `${siteUrl}/#business`,
            url: siteUrl,
            logo: `${siteUrl}${business.logo}`,
            image: `${siteUrl}/social-cover.jpg`,
          }
        : {}),
      name: business.name,
      description: pages["/"].description,
      telephone: "+919444730391",
      email: business.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "9/405a, Mettu St, K.K. Nagar",
        addressLocality: "Mannivakkam",
        addressRegion: "Tamil Nadu",
        postalCode: "600048",
        addressCountry: "IN",
      },
      areaServed: ["Chennai", "Chengalpattu"],
      hasMap: business.maps,
      sameAs: [business.instagram],
    },
  ];
  if (siteUrl) {
    graph.push({
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: business.name,
      inLanguage: "en-IN",
    });
    graph.push({
      "@type": "WebPage",
      "@id": `${canonical}#webpage`,
      url: canonical,
      name: page.title,
      description: page.description,
      inLanguage: "en-IN",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#business` },
    });
    if (path !== "/")
      graph.push({
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
          { "@type": "ListItem", position: 2, name: page.name, item: canonical },
        ],
      });
  }
  return {
    meta: [
      { title: page.title },
      { name: "description", content: page.description },
      {
        name: "robots",
        content:
          siteUrl && !import.meta.env.DEV
            ? "index, follow, max-image-preview:large"
            : "noindex, follow",
      },
      { property: "og:title", content: page.title },
      { property: "og:description", content: page.description },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:title", content: page.title },
      { name: "twitter:description", content: page.description },
      ...(siteUrl
        ? [
            { property: "og:url", content: canonical },
            { property: "og:image", content: `${siteUrl}/social-cover.jpg` },
            {
              property: "og:image:alt",
              content: "South Indian vegetarian banana leaf feast — S A Catering",
            },
            { name: "twitter:image", content: `${siteUrl}/social-cover.jpg` },
          ]
        : []),
    ],
    links: canonical ? [{ rel: "canonical", href: canonical }] : [],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(
          /</g,
          "\\u003c",
        ),
      },
    ],
  };
}
