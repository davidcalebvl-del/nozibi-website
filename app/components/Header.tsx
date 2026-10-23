"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Product", href: "/#davora" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Company", href: "/#about" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <Link href="/" className="brand-logo" aria-label="NOZIBI Home">
          <span className="brand-text">NOZIBI</span>
        </Link>

        <nav className="header-nav" aria-label="Primary">
          {navLinks.map((l) => (
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
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href="mailto:nozibiofficial@gmail.com"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
