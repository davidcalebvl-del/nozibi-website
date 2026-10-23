"use client";

import Link from "next/link";
import { useState } from "react";

const desktopNav = [
  { label: "Product", href: "/#davora" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Company", href: "/#about" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  const close = () => {
    setOpen(false);
    setExpanded(null);
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          <Link href="/" className="brand-logo" aria-label="NOZIBI Home">
            <span className="brand-text">NOZIBI</span>
          </Link>

          <nav className="header-nav" aria-label="Primary">
            {desktopNav.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a
              href="https://davora.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="pill-btn header-pill"
            >
              DAVORA
            </a>
            <button
              className="hamburger"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="mobile-overlay" role="dialog" aria-modal="true">
          <div className="mobile-overlay-top">
            <Link
              href="/"
              className="brand-logo"
              aria-label="NOZIBI Home"
              onClick={close}
            >
              <span className="brand-text">NOZIBI</span>
            </Link>
            <button
              className="close-btn"
              aria-label="Close menu"
              onClick={close}
            >
              ×
            </button>
          </div>

          <nav className="mobile-overlay-nav" aria-label="Mobile">
            <Link href="/" className="mobile-link" onClick={close}>
              Home
            </Link>
            <a href="/#davora" className="mobile-link" onClick={close}>
              Product
            </a>
            <a href="/#pricing" className="mobile-link" onClick={close}>
              Pricing
            </a>

            <button
              className="mobile-link mobile-link-expand"
              onClick={() =>
                setExpanded(expanded === "company" ? null : "company")
              }
              aria-expanded={expanded === "company"}
            >
              Company
              <span className="chevron">
                {expanded === "company" ? "˄" : "˅"}
              </span>
            </button>
            {expanded === "company" && (
              <div className="mobile-sub">
                <a href="/#about" onClick={close}>
                  About us
                </a>
                <a href="/#about" onClick={close}>
                  Leadership
                </a>
                <a href="/careers" onClick={close}>
                  Careers
                </a>
              </div>
            )}

            <Link href="/blog" className="mobile-link" onClick={close}>
              Blog
            </Link>
            <a
              href="mailto:nozibiofficial@gmail.com"
              className="mobile-link"
              onClick={close}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
