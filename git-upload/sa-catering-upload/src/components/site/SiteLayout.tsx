import { Breadcrumbs } from "./Breadcrumbs";
import { useCinematicMotion } from "../../hooks/use-cinematic-motion";
import { Link, useLocation } from "@tanstack/react-router";
import { ArrowUpRight, Instagram, Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { business, navigation, whatsappUrl } from "../../content/site";

const headerLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Events", href: "/#events" },
  { label: "Reviews", href: "/#reviews" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
];

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);
  useCinematicMotion(pathname);

  return (
    <>
      <div className="reading-progress" aria-hidden="true" />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className={`topbar ${pathname === "/" ? "home-topbar" : ""}`}>
        <span>PURE VEGETARIAN · MADE WITH CARE</span>
        <span>
          Chennai & Chengalpattu <span className="topbar-dot">✦</span>{" "}
          <a href={business.phoneLink}>{business.phone}</a>
        </span>
      </div>
      <header
        className={`site-header redesigned-header ${pathname === "/" ? "home-header" : ""} ${open ? "navigation-open" : ""}`}
      >
        <div className="container header-inner">
          <Link to="/" className="brand" aria-label="S A Catering home">
            <img src={business.logo} alt="S A Catering logo" width="500" height="500" />
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {headerLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={item.href === pathname ? "active" : undefined}
                aria-current={item.href === pathname ? "page" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            className="header-chat"
            href={whatsappUrl()}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={26} />
          </a>
          <button
            ref={toggle}
            className="menu-toggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
            {headerLinks.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
                <ArrowUpRight size={18} />
              </a>
            ))}
            <Link to="/quote" onClick={() => setOpen(false)}>
              Plan your event <ArrowUpRight size={18} />
            </Link>
          </nav>
        )}
      </header>
      <main id="main" key={pathname}>
        <Breadcrumbs pathname={pathname} />
        {children}
      </main>
      <footer className="site-footer" id="footer">
        <span className="footer-background-type" aria-hidden="true">
          S.A.
        </span>
        <div className="container footer-rule" aria-hidden="true" />
        <div className="container footer-statement" data-reveal>
          <p className="eyebrow">GOOD FOOD · WARM HOSPITALITY</p>
          <h2>
            35+ Years of
            <br />
            <em>Serving Celebrations.</em>
          </h2>
        </div>
        <div className="container footer-grid">
          <div className="footer-brand-column">
            <Link to="/" className="footer-wordmark" aria-label="S A Catering home">
              <img
                src={business.logo}
                alt="S A Catering — Wedding Specialist"
                width={500}
                height={500}
                loading="lazy"
              />
            </Link>
            <p>
              Good food. Warm hospitality.
              <br />
              Celebrations that stay with you.
            </p>
            <a href={business.instagram} target="_blank" rel="noreferrer" className="social-link">
              <Instagram size={18} /> Follow our story <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="footer-links-column">
            <h3>Explore</h3>
            {navigation.map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
          </div>
          <div className="footer-contact-column">
            <h3>Let’s talk</h3>
            <a href={business.phoneLink}>{business.phone}</a>
            <a href={`mailto:${business.email}`}>{business.email}</a>
            <a className="footer-address" href={business.maps} target="_blank" rel="noreferrer">
              <span>{business.address}</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} S A Catering. All rights reserved.</span>
          <span>Pure vegetarian. Wholeheartedly yours.</span>
        </div>
      </footer>
      <a
        className="floating-whatsapp"
        href={whatsappUrl()}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with S A Catering on WhatsApp"
      >
        <MessageCircle size={25} />
      </a>
    </>
  );
}
