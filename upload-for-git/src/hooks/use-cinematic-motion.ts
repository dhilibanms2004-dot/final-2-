import { useEffect } from "react";
export function useCinematicMotion(pathname: string) {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const elements = document.querySelectorAll<HTMLElement>(
      "[data-reveal], .page-intro, .contact-details > a, .quote-form fieldset, .footer-grid > div",
    );
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("motion-pending");
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    elements.forEach((element, index) => {
      if (!preference.matches) {
        element.style.setProperty("--reveal-delay", `${(index % 3) * 65}ms`);
        if (element.getBoundingClientRect().top >= innerHeight * 0.92)
          element.classList.add("motion-pending");
        observer.observe(element);
      }
    });
    const hero = document.querySelector<HTMLElement>(".hero");
    let frame = 0;
    const paint = () => {
      frame = 0;
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - innerHeight;
      document.documentElement.style.setProperty("--page-progress", String(max > 0 ? y / max : 0));
      document.querySelector(".site-header")?.classList.toggle("is-scrolled", y > 80);
      if (hero && !preference.matches) {
        const distance = Math.max(0, -hero.getBoundingClientRect().top);
        hero.style.setProperty("--hero-image-y", `${Math.min(distance * 0.15, 100)}px`);
        hero.style.setProperty("--hero-copy-y", `${Math.min(distance * 0.075, 50)}px`);
        hero.style.setProperty(
          "--hero-copy-opacity",
          String(Math.max(0.2, 1 - distance / (hero.offsetHeight * 1.05))),
        );
      }
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(paint);
    };
    const reduce = () => {
      if (preference.matches)
        elements.forEach((element) => element.classList.remove("motion-pending"));
      schedule();
    };
    paint();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    preference.addEventListener("change", reduce);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      preference.removeEventListener("change", reduce);
      elements.forEach((element) => element.classList.remove("motion-pending"));
    };
  }, [pathname]);
}
