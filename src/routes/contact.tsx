import { pageHead } from "../lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, Phone, Mail, Instagram } from "lucide-react";
import { SiteLayout } from "../components/site/SiteLayout";
import { PageIntro, FAQ } from "../components/sections/Shared";
import { business, whatsappUrl } from "../content/site";
export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => pageHead("/contact"),
});
function Contact() {
  return (
    <SiteLayout>
      <PageIntro
        eyebrow="LET’S START A CONVERSATION"
        title={
          <>
            Your next celebration
            <br />
            <em>starts here.</em>
          </>
        }
      >
        A date in mind? A menu to discuss? We’d love to hear from you.
      </PageIntro>
      <section className="container contact-grid section">
        <div className="contact-details">
          <a href={business.phoneLink}>
            <Phone />
            <span>
              <small>CALL US</small>
              {business.phone}
            </span>
            <ArrowUpRight />
          </a>
          <a href={`mailto:${business.email}`}>
            <Mail />
            <span>
              <small>WRITE TO US</small>
              {business.email}
            </span>
            <ArrowUpRight />
          </a>
          <a href={business.maps} target="_blank" rel="noreferrer">
            <MapPin />
            <span>
              <small>FIND US</small>
              {business.address}
            </span>
            <ArrowUpRight />
          </a>
          <a href={business.instagram} target="_blank" rel="noreferrer">
            <Instagram />
            <span>
              <small>FOLLOW ALONG</small>@s_a_catering_services
            </span>
            <ArrowUpRight />
          </a>
        </div>
        <div className="contact-panel">
          <p className="eyebrow">CHENNAI & CHENGALPATTU</p>
          <h2>
            A few details.
            <br />
            <em>A delicious beginning.</em>
          </h2>
          <p>Tell us about your event and we’ll take the conversation forward on WhatsApp.</p>
          <Link to="/quote" className="button gold">
            Get a custom quote <ArrowUpRight size={18} />
          </Link>
          <a className="text-link" href={whatsappUrl()} target="_blank" rel="noreferrer">
            Or chat directly on WhatsApp <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
      <FAQ />
    </SiteLayout>
  );
}
