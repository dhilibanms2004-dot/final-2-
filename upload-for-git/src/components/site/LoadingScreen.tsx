import { useEffect, useState } from "react";
import { business } from "../../content/site";
// Decorative, once-per-tab brand entrance. Never blocks navigation or no-JS content.
export function LoadingScreen() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    try {
      if (sessionStorage.getItem("sa-brand-intro")) return;
    } catch {
      /* Storage is optional. */
    }
    setVisible(true);
    document.documentElement.classList.add("brand-intro-playing");
    const timer = window.setTimeout(() => {
      try {
        sessionStorage.setItem("sa-brand-intro", "seen");
      } catch {
        /* Storage is optional. */
      }
      setVisible(false);
      document.documentElement.classList.remove("brand-intro-playing");
    }, 1450);
    return () => {
      clearTimeout(timer);
      document.documentElement.classList.remove("brand-intro-playing");
    };
  }, []);
  return visible ? (
    <div className="brand-loader" aria-hidden="true">
      <div className="brand-loader-content">
        <span>A CELEBRATION BEGINS WITH CARE</span>
        <img src={business.logo} alt="" width={180} height={180} />
        <p>Tradition. Taste. Togetherness.</p>
        <div className="loader-line" />
      </div>
    </div>
  ) : null;
}
