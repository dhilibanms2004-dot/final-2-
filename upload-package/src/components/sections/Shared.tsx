import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Plus } from "lucide-react";
import { useState, type ReactNode } from "react";
import { faqs } from "../../content/site";
export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="page-intro container">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      {children && <p className="intro-copy">{children}</p>}
    </section>
  );
}
export function EventCTA() {
  return (
    <section className="event-cta">
      <div className="container" data-reveal>
        <p className="eyebrow">YOUR PEOPLE. YOUR OCCASION. OUR FOOD.</p>
        <h2>
          Let’s make it
          <br />
          <em>worth remembering.</em>
        </h2>
        <Link className="button cream" to="/quote">
          Plan your celebration <ArrowUpRight size={18} />
        </Link>
        <p className="tamil" lang="ta">
          அன்புடன் சமைத்து, மகிழ்வுடன் பரிமாறுகிறோம்.
        </p>
      </div>
    </section>
  );
}
export { Stats } from "./Stats";

export function FAQ() {
  const [active, setActive] = useState<number | null>(0);
  return (
    <section className="section container faq-layout" id="faq" data-reveal>
      <div>
        <p className="eyebrow">A LITTLE CLARITY</p>
        <h2>
          Before the
          <br />
          <em>celebration.</em>
        </h2>
        <p>Answers to a few things you may be wondering.</p>
      </div>
      <div>
        {faqs.map(([question, answer], i) => (
          <div className={`faq-item ${active === i ? "is-open" : ""}`} key={question}>
            <h3>
              <button
                aria-expanded={active === i}
                aria-controls={`answer-${i}`}
                onClick={() => setActive(active === i ? null : i)}
              >
                {question}
                <Plus size={20} />
              </button>
            </h3>
            <div className="faq-answer" id={`answer-${i}`} inert={active !== i}>
              <div>
                <p>{answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
