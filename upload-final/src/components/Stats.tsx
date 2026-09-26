import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

const milestones = [
  { value: 35, suffix: "+", label: "Years of experience" },
  { value: 1500, suffix: "+", label: "Events & celebrations" },
  { value: 100, suffix: "%", label: "Pure vegetarian" },
];
const format = new Intl.NumberFormat("en-IN");

export function Stats() {
  const section = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const element = section.current;
    if (!element) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches) return;
    let frame = 0;
    let started = false;
    let start: number | null = null;
    setProgress(0);
    const tick = (time: number) => {
      start ??= time;
      const elapsed = Math.min((time - start) / 1900, 1);
      setProgress(1 - Math.pow(1 - elapsed, 3));
      if (elapsed < 1) frame = requestAnimationFrame(tick);
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !started) {
          started = true;
          observer.disconnect();
          frame = requestAnimationFrame(tick);
        }
      },
      { threshold: 0.25 },
    );
    const onPreferenceChange = () => {
      if (motion.matches) {
        observer.disconnect();
        cancelAnimationFrame(frame);
        setProgress(1);
      }
    };
    observer.observe(element);
    motion.addEventListener("change", onPreferenceChange);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      motion.removeEventListener("change", onPreferenceChange);
    };
  }, []);

  return (
    <div className="container stats" id="milestones" ref={section}>
      {milestones.map(({ value, suffix, label }) => (
        <div key={label}>
          <strong aria-label={`${format.format(value)}${suffix}`}>
            <span className="count-value" aria-hidden="true">
              {format.format(Math.round(value * progress))}
            </span>
            <span aria-hidden="true">{suffix}</span>
          </strong>
          <p>{label}</p>
        </div>
      ))}
      <div className="wedding-signature">
        <svg
          className="wedding-rings"
          width="58"
          height="44"
          viewBox="0 0 58 44"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="21" cy="25" r="15" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="37" cy="25" r="15" stroke="currentColor" strokeWidth="1.5" />
          <path d="m29 3 3 4-3 4-3-4 3-4Z" fill="currentColor" />
        </svg>
        <div>
          <span className="signature-eyebrow">OUR SPECIALITY</span>
          <h3>
            Wedding
            <br />
            <em>Specialists.</em>
          </h3>
          <Link to="/quote">
            Let’s plan your day <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
