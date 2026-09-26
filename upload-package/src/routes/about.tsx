import { pageHead } from "../lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "../components/site/SiteLayout";
import { PageIntro, Stats, EventCTA } from "../components/sections/Shared";
import { images } from "../content/site";
export const Route = createFileRoute("/about")({
  component: About,
  head: () => pageHead("/about"),
});
function About() {
  return (
    <SiteLayout>
      <PageIntro
        eyebrow="OUR STORY"
        title={
          <>
            Rooted in tradition.
            <br />
            <em>Served with love.</em>
          </>
        }
      >
        35 years of bringing people together over a good meal.
      </PageIntro>
      <section className="container story-grid section">
        <div className="story-visual" data-reveal>
          <img src={images.feast} alt="Illustrative vegetarian wedding feast" />
        </div>
        <div data-reveal>
          <p className="eyebrow">S A CATERING · WEDDING SPECIALIST</p>
          <h2>
            Good food is
            <br />
            <em>personal.</em>
          </h2>
          <p>
            It’s the familiar taste that brings you home. The meal your guests remember. The care
            that lets you enjoy your own celebration.
          </p>
          <p>
            We bring 35 years of experience and the lessons of over 1,500 events to vegetarian
            catering across Chennai and Chengalpattu. Weddings hold a special place at our table,
            alongside family functions, traditional occasions and corporate gatherings.
          </p>
          <p lang="ta" className="tamil">
            மனமார்ந்த விருந்து. மறக்க முடியாத நினைவுகள்.
          </p>
        </div>
      </section>
      <Stats />
      <section className="container section values-grid">
        {[
          [
            "Our food",
            "Pure vegetarian. Rooted in South Indian tradition and planned around your preferences.",
          ],
          [
            "Our approach",
            "We listen to your plans, understand your guests and discuss the details together.",
          ],
          [
            "Your celebration",
            "A wedding, a milestone or a simple gathering. Every occasion deserves thoughtful hospitality.",
          ],
        ].map(([title, copy]) => (
          <div key={title} data-reveal>
            <h3>{title}</h3>
            <p>{copy}</p>
          </div>
        ))}
      </section>
      <EventCTA />
    </SiteLayout>
  );
}
