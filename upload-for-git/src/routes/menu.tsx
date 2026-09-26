import { pageHead } from "../lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "../components/site/SiteLayout";
import { PageIntro, EventCTA } from "../components/sections/Shared";
import { MenuExplorer } from "../components/sections/MenuExplorer";
export const Route = createFileRoute("/menu")({
  component: Menu,
  head: () => pageHead("/menu"),
});
function Menu() {
  return (
    <SiteLayout>
      <PageIntro
        eyebrow="OUR MENU · PURE VEGETARIAN"
        title={
          <>
            A menu as grand
            <br />
            as <em>your celebration.</em>
          </>
        }
      >
        From traditional favourites and wedding feasts to tiffin, sweets, live counters and
        refreshing beverages — every menu can be thoughtfully customised around your celebration.
      </PageIntro>
      <MenuExplorer full />
      <section className="container menu-next" data-reveal>
        <span>01 · EXPLORE THE MENU</span>
        <span>02 · SHARE YOUR REQUIREMENTS</span>
        <span>03 · LET’S TALK ON WHATSAPP</span>
      </section>
      <EventCTA />
    </SiteLayout>
  );
}
