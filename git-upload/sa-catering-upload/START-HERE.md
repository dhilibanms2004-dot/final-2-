# Your S A Catering website

This folder is the complete editable website, including the logo, images, reviews, animations and all six pages. You do not need Lovable to edit it.

## Open it in VS Code

1. If you downloaded the ZIP, double-click it to extract it first.
2. Open VS Code.
3. Choose **File → Open Workspace from File…** and select **SA-Catering.code-workspace** inside this folder.
4. The files appear in the left sidebar. Open this **START-HERE.md** file to keep these instructions handy.

## Start the preview on your Mac

1. In VS Code, choose **Terminal → Run Task…**.
2. Select **Start website preview**.
3. Wait for the terminal to show a local address, then Command-click that address. The port may be 5173 or another number if a preview is already running.
4. Keep that terminal running while you edit. Save a file with **Command + S** to update the preview.
5. To stop the preview, click inside the terminal and press **Control + C**.

The launcher can use the Node runtime already available on your current Mac. On another computer, install Node.js 22.12 or newer first. The ZIP excludes downloaded dependencies; the Mac launcher installs them automatically on first use, which needs internet access.

On Windows, install Node.js, then choose **Terminal → New Terminal** and run `npm install` once, followed by `npm run dev` each time you want the preview.

## Where to change things

| Change | Open this file |
| --- | --- |
| Phone, email, address, menu categories and FAQ answers | `src/content/site.ts` |
| Customer review text | `src/content/reviews.ts` |
| Home page text and sections | `src/routes/index.tsx` |
| Header and footer content | `src/components/site/SiteLayout.tsx` |
| Footer spacing and Tamil call-to-action text size | `src/styles/footer.css` |
| Header and hero design | `src/styles/hero-header.css` |
| Colours and fonts | `src/styles/tokens.css` |
| Counting statistics | `src/components/sections/Stats.tsx` |
| Quote form | `src/routes/quote.tsx` |
| Other pages | `src/routes/` |
| Logo | `public/sa-catering-logo.png` |
| Food pictures | `src/assets/` |

For a text edit, change only the words, leaving surrounding quotes, commas and tags in place. Use **Command + Z** if something goes wrong. Make a copy of the folder before major changes. Do not edit `node_modules` or `src/routeTree.gen.ts`.

## Before publishing

This is a local website, not a live public site. Your approved detailed menu and final website domain still need to be supplied. Search indexing stays disabled until the final domain is configured. The quote form opens WhatsApp with a prepared message; the visitor still presses Send.

See **README.md** for more technical details and publishing preparation.
