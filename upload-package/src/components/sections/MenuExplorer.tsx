import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { menus } from "../../content/site";
export function MenuExplorer({ full = false }: { full?: boolean }) {
  const [active, setActive] = useState(0);
  const displayedMenus = full
    ? menus
    : menus.filter((item) =>
        ["breakfast", "lunch", "dinner", "tiffin", "sweets", "chaat"].includes(item.id),
      );
  const selected = displayedMenus[active]!;
  return (
    <section className="menu-section section" id="menu-selection">
      <div className="container">
        <div className="menu-opening-line" aria-hidden="true" />
        {!full && (
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">OUR MENU</p>
              <h2>
                A menu as grand
                <br />
                as <em>your celebration.</em>
              </h2>
            </div>
            <p>
              From traditional favourites and wedding feasts to tiffin, sweets, live counters and
              refreshing beverages — every menu can be thoughtfully customised around your
              celebration.
            </p>
          </div>
        )}
        <div className="menu-tabs" role="tablist" aria-label="Menu categories">
          {displayedMenus.map((item, index) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={active === index}
              aria-controls={`menu-detail-${item.id}`}
              className={active === index ? "selected" : ""}
              onClick={() => setActive(index)}
            >
              {item.title.replace(" & wedding feast", "")}
            </button>
          ))}
        </div>
        <div className="menu-explorer" data-reveal>
          <div className="menu-photo">
            {displayedMenus.map((item, index) => (
              <img
                key={item.id}
                src={item.image}
                alt={item.subtitle}
                className={active === index ? "selected" : ""}
                aria-hidden={active !== index}
                loading="lazy"
              />
            ))}
            <div className="image-caption">
              <span>{selected.tag}</span>
              <span>
                {String(active + 1).padStart(2, "0")} /{" "}
                {String(displayedMenus.length).padStart(2, "0")}
              </span>
            </div>
          </div>
          <div className="menu-list">
            <p className="eyebrow">PURE VEGETARIAN · FULL OF VARIETY</p>
            {displayedMenus.map((item, index) => (
              <div key={item.id} className={`menu-choice ${active === index ? "selected" : ""}`}>
                <h3>
                  <button
                    onClick={() => setActive(index)}
                    aria-expanded={active === index}
                    aria-controls={`menu-detail-${item.id}`}
                  >
                    <span className="menu-number">0{index + 1}</span>
                    {item.title}
                    <ArrowUpRight size={23} />
                  </button>
                </h3>
                <div
                  id={`menu-detail-${item.id}`}
                  className="menu-description"
                  role="tabpanel"
                  hidden={active !== index}
                >
                  <p>{item.description}</p>
                  <ul className="menu-dishes" aria-label={`${item.title} options`}>
                    {item.items.slice(0, full ? item.items.length : 6).map((dish) => (
                      <li key={dish}>{dish}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            <Link className="text-link" to={full ? "/quote" : "/menu"}>
              {full ? "Create my custom quote" : "Discover our menu"} <ArrowUpRight size={19} />
            </Link>
            {full && (
              <p className="small-note">
                The printed menu contains many possible combinations. Final availability and the
                complete selection are confirmed while planning your event.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
