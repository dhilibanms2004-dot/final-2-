import { pageHead } from "../lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "../components/site/SiteLayout";
import { EventCTA, PageIntro } from "../components/sections/Shared";
import { galleryImages } from "../content/site";
export const Route = createFileRoute("/gallery")({
  component: Gallery,
  head: () => pageHead("/gallery"),
});
function Gallery() {
  return (
    <SiteLayout>
      <PageIntro
        eyebrow="A FEAST FOR THE EYES"
        title={
          <>
            Good taste.
            <br />
            <em>Beautiful moments.</em>
          </>
        }
      >
        A little inspiration for the celebration you’re imagining.
      </PageIntro>
      <div className="container gallery-grid">
        {galleryImages.map(({ src, alt }) => (
          <figure key={src} data-reveal>
            <img src={src} alt={alt} width={1536} height={1024} loading="lazy" />
            <figcaption>{alt}</figcaption>
          </figure>
        ))}
      </div>
      <p className="container gallery-disclosure">
        Illustrative imagery for inspiration, including AI-generated food photography. These are not
        photographs of S A Catering events.
      </p>
      <EventCTA />
    </SiteLayout>
  );
}
