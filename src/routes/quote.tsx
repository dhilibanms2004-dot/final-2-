import { pageHead } from "../lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Check, Phone } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { SiteLayout } from "../components/site/SiteLayout";
import { business } from "../content/site";
import { createQuoteUrl } from "../lib/quote";
export const Route = createFileRoute("/quote")({
  component: Quote,
  head: () => pageHead("/quote"),
});
function Quote() {
  const [today, setToday] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    const now = new Date();
    setToday(
      `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`,
    );
  }, []);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (!String(data.get("name")).trim() || !String(data.get("location")).trim()) {
      setError("Please enter your name and event location.");
      return;
    }
    const digits = String(data.get("phone")).replace(/\D/g, "");
    if (digits.length < 10 || digits.length > 15) {
      setError("Please enter a valid phone number with 10 to 15 digits.");
      return;
    }
    setError("");
    window.location.assign(createQuoteUrl(data));
  }
  return (
    <SiteLayout>
      <section className="container quote-layout section">
        <div className="quote-intro">
          <p className="eyebrow">LET’S PLAN SOMETHING SPECIAL</p>
          <h1>
            You bring
            <br />
            the occasion.
            <br />
            <em>
              We’ll bring
              <br />
              the feast.
            </em>
          </h1>
          <p>
            Tell us a little about your celebration. We’ll help you put together a menu your guests
            will remember.
          </p>
          <ul className="quote-promises">
            <li>
              <Check size={17} /> A menu planned around you
            </li>
            <li>
              <Check size={17} /> 100% vegetarian catering
            </li>
            <li>
              <Check size={17} /> 35 years of experience
            </li>
          </ul>
          <a className="text-link" href={business.phoneLink}>
            <Phone size={16} /> Prefer a call? {business.phone}
          </a>
        </div>
        <form className="quote-form" onSubmit={submit}>
          <div className="form-heading">
            <span>YOUR CELEBRATION, YOUR WAY</span>
            <h2>Let’s get to know your event.</h2>
          </div>
          <fieldset>
            <legend>
              <span>01</span> A little about you
            </legend>
            <div className="form-row">
              <label>
                Your name *
                <input
                  name="name"
                  required
                  maxLength={80}
                  autoComplete="name"
                  placeholder="Your full name"
                />
              </label>
              <label>
                Phone / WhatsApp *
                <input
                  name="phone"
                  type="tel"
                  required
                  maxLength={22}
                  autoComplete="tel"
                  placeholder="Your contact number"
                />
              </label>
            </div>
          </fieldset>
          <fieldset>
            <legend>
              <span>02</span> The celebration
            </legend>
            <div className="form-row">
              <label>
                Event type *
                <select name="event" required defaultValue="">
                  <option value="" disabled>
                    Select your occasion
                  </option>
                  {[
                    "Wedding",
                    "Reception",
                    "Engagement",
                    "Family function",
                    "Religious function",
                    "Birthday",
                    "Corporate event",
                    "Other",
                  ].map((x) => (
                    <option key={x}>{x}</option>
                  ))}
                </select>
              </label>
              <label>
                Event date
                <input name="date" type="date" min={today} />
              </label>
            </div>
            <label>
              Venue / location *
              <input name="location" required maxLength={160} placeholder="Venue name or area" />
            </label>
            <div className="form-row">
              <label>
                Expected guests *
                <input
                  name="guests"
                  type="number"
                  min="1"
                  max="100000"
                  required
                  placeholder="e.g. 300"
                />
              </label>
              <label>
                Meal requirement *
                <select name="meal" required defaultValue="">
                  <option value="" disabled>
                    Select a meal
                  </option>
                  {["Breakfast", "Lunch", "Dinner", "Multiple meals", "Not sure yet"].map((x) => (
                    <option key={x}>{x}</option>
                  ))}
                </select>
              </label>
            </div>
          </fieldset>
          <fieldset>
            <legend>
              <span>03</span> The finishing touches
            </legend>
            <label>
              Budget (optional)
              <input
                name="budget"
                maxLength={100}
                placeholder="Per person or total budget, if you have one"
              />
            </label>
            <label>
              Anything you have in mind?
              <textarea
                name="message"
                rows={3}
                maxLength={1200}
                placeholder="Favourite dishes, dietary preferences, serving requirements…"
              />
            </label>
          </fieldset>
          {error && (
            <p role="alert" className="form-error">
              {error}
            </p>
          )}
          <button className="button" type="submit">
            Continue on WhatsApp <ArrowUpRight size={19} />
          </button>
          <p className="form-note">
            This opens WhatsApp with your details ready to send. Your enquiry is sent only when you
            tap Send in WhatsApp.
          </p>
        </form>
      </section>
    </SiteLayout>
  );
}
