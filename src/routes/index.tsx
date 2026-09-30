import { pageHead } from "../lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { SiteLayout } from "../components/site/SiteLayout";
import { EventCTA, FAQ, Stats } from "../components/sections/Shared";
import { Reviews } from "../components/sections/Reviews";
import { MenuExplorer } from "../components/sections/MenuExplorer";
import { images } from "../content/site";
export const Route = createFileRoute("/")({
  component: Home,
  head: () => pageHead("/"),
});
function Home() {
  return (
    <SiteLayout>
      <section className="hero immersive-hero" aria-labelledby="hero-title">
        <img
          className="hero-backdrop"
          src={images.event}
          alt="Illustrative South Indian wedding dining scene with a vegetarian banana-leaf feast"
          width={1536}
          height={1024}
          fetchPriority="high"
        />
        <div className="hero-shade" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span /> PURE VEGETARIAN CATERING · CHENNAI
            </p>
            <h1 id="hero-title">
              A wedding meal,
              <br />
              <em>just as it should be.</em>
            </h1>
            <p>
              A full banana-leaf lunch. Your family’s favourite dishes. A team to look after the
              serving. Tell us what you have in mind—we’ll help you put the menu together.
            </p>
            <div className="hero-actions">
              <Link to="/quote" className="button gold">
                Talk to Us <ArrowUpRight size={23} />
              </Link>
              <Link to="/menu" className="hero-secondary">
                See the Menu <ArrowUpRight size={23} />
              </Link>
            </div>
          </div>
        </div>
        <div className="container hero-bottom">
          <div>
            <span>Weddings</span>
            <i>·</i>
            <span>Traditional Functions</span>
            <i>·</i>
            <span>Birthdays</span>
            <i>·</i>
            <span>Corporate Events</span>
          </div>
          <a href="#our-story" aria-label="Discover our story">
            <ArrowDown size={22} />
          </a>
        </div>
      </section>
      <Stats />
      <section className="section container story-grid" id="our-story">
        <div className="story-visual" data-reveal>
          <img
            src={images.bananaLeaf}
            alt="Illustrative traditional banana leaf meal"
            loading="lazy"
          />
          <span className="photo-label">THE JOY OF SHARING A MEAL</span>
        </div>
        <div className="story-copy" data-reveal>
          <p className="eyebrow">MORE THAN A MEAL</p>
          <h2>
            Some flavours
            <br />
            feel like <em>home.</em>
          </h2>
          <p className="tamil" lang="ta">
            விருந்தோம்பல் எங்கள் பாரம்பரியம்.
          </p>
          <p>
            At S A Catering, we believe the best celebrations begin with food made with care. For 35
            years, we’ve brought traditional vegetarian flavours and warm hospitality to the moments
            that matter.
          </p>
          <p>
            From a wedding feast to a gathering of your closest people, every occasion deserves our
            full attention.
          </p>
          <Link className="text-link" to="/about">
            The story behind the serving <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
      <MenuExplorer />
      <section className="section container occasions" id="events" data-reveal>
        <div className="section-heading">
          <div>
            <p className="eyebrow">WHATEVER YOU’RE CELEBRATING</p>
            <h2>
              There’s a place
              <br />
              <em>at our table.</em>
            </h2>
          </div>
          <Link to="/quote" className="text-link">
            Tell us your occasion <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="occasion-grid">
          {[
            ["01", "Weddings & receptions", "Your once-in-a-lifetime day. A feast to match."],
            [
              "02",
              "Family & traditional functions",
              "For the rituals, reunions and reasons to come together.",
            ],
            ["03", "Corporate & special events", "Good food that brings your people closer."],
          ].map(([num, title, copy]) => (
            <Link to="/quote" key={num}>
              <span>{num} /</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <ArrowUpRight />
            </Link>
          ))}
        </div>
      </section>
      <Reviews />
      <FAQ />
      <EventCTA />
    </SiteLayout>
  );
}
