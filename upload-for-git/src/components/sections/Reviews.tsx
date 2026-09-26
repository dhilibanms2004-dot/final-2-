import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Pause, Play, Star } from "lucide-react";
import { business } from "../../content/site";
import { reviews } from "../../content/reviews";

export function Reviews() {
  const rail = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState<string[]>([]);
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const element = rail.current;
    if (!element || paused || hovered || reducedMotion || expanded.length) return;
    let visible = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = Boolean(entry?.isIntersecting);
      },
      { threshold: 0.25 },
    );
    observer.observe(element);
    let frame = 0;
    let previous = 0;
    let position = element.scrollLeft;
    const roll = (time: number) => {
      const elapsed = previous ? Math.min(time - previous, 50) : 0;
      previous = time;
      if (visible && !document.hidden) {
        const card = element.firstElementChild;
        const width = card?.getBoundingClientRect().width ?? 360;
        const loop = (width + 24) * reviews.length;
        position = (position + elapsed * 0.026) % loop;
        element.scrollLeft = position;
      }
      frame = requestAnimationFrame(roll);
    };
    frame = requestAnimationFrame(roll);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [paused, hovered, reducedMotion, expanded.length]);

  function move(direction: number) {
    setPaused(true);
    const element = rail.current;
    if (!element) return;
    const step = element.firstElementChild?.getBoundingClientRect().width ?? 360;
    element.scrollBy({
      left: direction * (step + 24),
      behavior: reducedMotion ? "instant" : "smooth",
    });
  }

  return (
    <section className="customer-reviews section" id="reviews" aria-labelledby="reviews-title">
      <div className="container">
        <div className="section-heading" data-reveal>
          <div>
            <p className="eyebrow">KIND WORDS. LASTING MEMORIES.</p>
            <h2 id="reviews-title">
              The finest compliment?
              <br />
              <em>Being invited back.</em>
            </h2>
          </div>
          <div className="reviews-intro">
            <p>Real celebrations. In our customers’ own words.</p>
            <a className="text-link" href={business.maps} target="_blank" rel="noreferrer">
              Visit us on Google <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
        <div
          className="review-carousel"
          role="region"
          aria-roledescription="carousel"
          aria-label="Customer reviews"
        >
          <div className="reviews-toolbar">
            <span>7 CUSTOMER STORIES · GOOGLE REVIEWS</span>
            <div className="review-controls">
              {!reducedMotion && (
                <button
                  type="button"
                  aria-label={paused ? "Play review slideshow" : "Pause review slideshow"}
                  onClick={() => {
                    if (paused) setExpanded([]);
                    setPaused(!paused);
                  }}
                >
                  {paused ? <Play size={17} /> : <Pause size={17} />}
                </button>
              )}
              <button type="button" aria-label="Previous reviews" onClick={() => move(-1)}>
                <ArrowLeft size={19} />
              </button>
              <button type="button" aria-label="Next reviews" onClick={() => move(1)}>
                <ArrowRight size={19} />
              </button>
            </div>
          </div>
          <div
            className="review-rail"
            ref={rail}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onWheel={() => setPaused(true)}
            tabIndex={0}
            aria-label="Swipe or use arrow keys to explore all seven reviews"
            onFocus={() => setPaused(true)}
            onTouchStart={() => setPaused(true)}
            onKeyDown={(event) => {
              if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
                event.preventDefault();
                move(event.key === "ArrowRight" ? 1 : -1);
              }
            }}
          >
            {[...reviews, ...reviews].map((review, index) => {
              const duplicate = index >= reviews.length;
              const isExpanded = expanded.includes(review.name);
              return (
                <article
                  className={`customer-review ${isExpanded ? "expanded" : ""}`}
                  key={`${review.name}-${index}`}
                  aria-hidden={duplicate || undefined}
                  aria-label={`Review ${(index % reviews.length) + 1} of ${reviews.length} by ${review.name}`}
                >
                  <div className="review-card-top">
                    <span
                      className="review-stars"
                      role="img"
                      aria-label={`${review.rating} out of 5 stars`}
                    >
                      {Array.from({ length: review.rating }, (_, i) => (
                        <Star key={i} size={15} fill="currentColor" aria-hidden="true" />
                      ))}
                    </span>
                    <span className="review-quote-mark" aria-hidden="true">
                      “
                    </span>
                  </div>
                  <blockquote id={`review-text-${index}`} className="review-text">
                    {review.text}
                  </blockquote>
                  <button
                    className="review-read-more"
                    tabIndex={duplicate ? -1 : 0}
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={`review-text-${index}`}
                    aria-label={`${isExpanded ? "Read less" : "Read more"} of ${review.name}’s review`}
                    onClick={() => {
                      setPaused(true);
                      setExpanded((current) =>
                        isExpanded
                          ? current.filter((name) => name !== review.name)
                          : [...current, review.name],
                      );
                    }}
                  >
                    {isExpanded ? "Read less" : "Read more"}{" "}
                    <span aria-hidden="true">{isExpanded ? "−" : "+"}</span>
                  </button>
                  <div className="review-author">
                    <span className="review-avatar" aria-hidden="true">
                      {review.name
                        .split(" ")
                        .map((part) => part[0])
                        .slice(0, 2)
                        .join("")
                        .toUpperCase()}
                    </span>
                    <div>
                      <h3>{review.name}</h3>
                      <span>Google review</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
