# S A Catering — Wedding Specialist

An editable, responsive catering website using React, TypeScript, TanStack Router/Start and Vite. You can edit this folder directly in VS Code. No Lovable account is needed to edit or run it locally.

## Run locally

Install Node.js 22.12+ (Node 24 LTS recommended) and pnpm. In VS Code, open this entire folder, then choose Terminal → New Terminal:

```sh
pnpm install
pnpm dev
```

Open the local URL shown in the terminal. Changes update automatically as you save.

```sh
pnpm build       # Build the production application
pnpm lint        # Check the project
pnpm exec tsc --noEmit  # Check TypeScript
```

The project retains its original TanStack/Lovable Vite configuration. The default production adapter is Cloudflare; choose your hosting target before deploying. This work is a local preview, not a published deployment.

## Where to edit

| What you want to change                                     | File / folder                              |
| ----------------------------------------------------------- | ------------------------------------------ |
| Business name, contact details, logo, menu categories, FAQs | `src/content/site.ts`                      |
| Home page                                                   | `src/routes/index.tsx`                     |
| About / story page                                          | `src/routes/about.tsx`                     |
| Menu page                                                   | `src/routes/menu.tsx`                      |
| Gallery                                                     | `src/routes/gallery.tsx`                   |
| Contact                                                     | `src/routes/contact.tsx`                   |
| Quote form and validation                                   | `src/routes/quote.tsx`                     |
| WhatsApp message template                                   | `src/lib/quote.ts`                         |
| Header, navigation, footer, WhatsApp button                 | `src/components/site/SiteLayout.tsx`       |
| Interactive menu                                            | `src/components/sections/MenuExplorer.tsx` |
| FAQ, stats, final call to action                            | `src/components/sections/Shared.tsx`       |
| Colours, typography, buttons                                | `src/styles/tokens.css`                    |
| Header, footer, shared layout                               | `src/styles/layout.css`                    |
| Page section styling                                        | `src/styles/sections.css`                  |
| Mobile and tablet layouts, reduced motion                   | `src/styles/responsive.css`                |
| Photos                                                      | `src/assets/`                              |
| Fonts, global metadata                                      | `src/routes/__root.tsx`                    |

`src/styles.css` imports the stylesheets. The existing `src/components/ui/` folder contains optional UI primitives from the original project; the new website sections are in `src/components/site/` and `src/components/sections/`.

Do not edit `src/routeTree.gen.ts`: Vite generates this file from `src/routes/`.

## Content still to supply

- Approved menu document: replace the category descriptions in `src/content/site.ts`; no unconfirmed dish lists or prices have been invented.
- The supplied transparent logo is installed in the header, footer and loading entrance.
- Seven Google reviews supplied as screenshots are transcribed in `src/content/reviews.ts`. Edit their display in `src/components/sections/Reviews.tsx`. Individual ratings are shown without claiming an overall business rating.
- Photography: `wedding-feast.jpg` is newly AI-generated. Other images came from the supplied project. Gallery images are labelled illustrative and are not represented as actual S A Catering event photographs.

## How enquiries work

The quote form validates details and navigates to WhatsApp with a prepared message addressed to `+91 9444730391`. The visitor must tap Send in WhatsApp. No backend, email service, database, payment, or booking confirmation is connected. The event date is optional if the visitor has not chosen one yet.

## VS Code

Recommended extensions are listed in `.vscode/extensions.json`. With Prettier installed, files format automatically on save. The site uses readable, formatted source files instead of compressed one-line sections.

The original project brief is preserved in `docs/original-brief.md`. New image provenance is in `docs/image-generation.md`.

## Branding, motion and SEO

- Supplied transparent logo: `public/sa-catering-logo.png`, used in header, footer and intro.
- Cream footer, hover underlines, hero parallax, page/section entrances: `src/styles/motion.css`.
- Scroll observation and progress: `src/hooks/use-cinematic-motion.ts`.
- Brand loading entrance: `src/components/site/LoadingScreen.tsx`. Plays once per browser tab; disabled for reduced-motion preferences.
- Reviews roll continuously at 26 pixels/second while visible. Hover pauses temporarily; touch, keyboard, arrows and expanding a review pause until Play is pressed. Reduced-motion users get manual controls. The second visual copy makes the rolling loop seamless and is excluded from assistive reading.
- Page titles and descriptions: `src/content/seo-pages.json`.
- Metadata and JSON-LD: `src/lib/seo.ts`. Includes business contact/address/service areas; adds website, page and breadcrumb schema when a domain is configured. No aggregate rating or self-serving review rich-result claims are added.

### Before publishing

Copy `.env.example` to `.env` and set `VITE_SITE_URL` to the final HTTPS website origin. Run `pnpm build`; this also generates `public/sitemap.xml` and `public/robots.txt`. Canonical links and social-sharing URLs use the same setting. Without it, builds stay in preview/noindex mode and the sitemap stays empty. Local development pages always remain noindex.

After deployment, verify the domain in Google Search Console, submit `/sitemap.xml`, and inspect the live URLs. This requires your final domain and ownership access; it has not been done during local development. Search visibility and rich results are not guaranteed by structured data.

References: [Google breadcrumb guidance](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb) and [Google LocalBusiness guidance](https://developers.google.com/search/docs/appearance/structured-data/local-business).
