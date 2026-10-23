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

const searchIndex = [
  { label: "Home", href: "/", tag: "Page" },
  { label: "Product — Davora", href: "/#davora", tag: "Section" },
  { label: "Pricing", href: "/#pricing", tag: "Section" },
  { label: "About / Leadership", href: "/#about", tag: "Section" },
  { label: "Blog", href: "/blog", tag: "Page" },
  { label: "Careers", href: "/careers", tag: "Page" },
  { label: "Contact", href: "mailto:nozibiofficial@gmail.com", tag: "Email" },
  { label: "Launch Davora app", href: "https://davora.xyz", tag: "External" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const closeMenu = () => {
    setMenuOpen(false);
    setExpanded(null);
  };

  const results = query.trim()
    ? searchIndex.filter((s) =>
        s.label.toLowerCase().includes(query.trim().toLowerCase())
      )
    : searchIndex;

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
            <button
              className="icon-btn"
              aria-label="Search"
              onClick={() => {
                setSearchOpen((v) => !v);
                setQuery("");
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.5" y2="16.5" />
              </svg>
            </button>
            <button
              className="hamburger"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="search-panel">
            <input
              className="search-input"
              type="text"
              placeholder="Search Nozibi…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
              aria-label="Search"
            />
            <ul className="search-results">
              {results.length === 0 && (
                <li
                  style={{
                    padding: "10px 8px",
                    color: "rgba(255,255,255,0.4)",
                    fontSize: "0.9rem",
                  }}
                >
                  No results.
                </li>
              )}
              {results.map((r) => (
                <li key={r.label}>
                  <a
                    href={r.href}
                    target={r.tag === "External" ? "_blank" : undefined}
                    rel={
                      r.tag === "External" ? "noopener noreferrer" : undefined
                    }
                    onClick={() => setSearchOpen(false)}
                  >
                    {r.label}
                    <span className="search-tag">{r.tag}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {menuOpen && (
        <div className="mobile-overlay" role="dialog" aria-modal="true">
          <div className="mobile-overlay-top">
            <Link
              href="/"
              className="brand-logo"
              aria-label="NOZIBI Home"
              onClick={closeMenu}
            >
              <span className="brand-text">NOZIBI</span>
            </Link>
            <button
              className="close-btn"
              aria-label="Close menu"
              onClick={closeMenu}
            >
              ×
            </button>
          </div>

          <nav className="mobile-overlay-nav" aria-label="Mobile">
            <Link href="/" className="mobile-link" onClick={closeMenu}>
              Home
            </Link>
            <a href="/#davora" className="mobile-link" onClick={closeMenu}>
              Product
            </a>
            <a href="/#pricing" className="mobile-link" onClick={closeMenu}>
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
                <a href="/#about" onClick={closeMenu}>
                  About us
                </a>
                <a href="/#about" onClick={closeMenu}>
                  Leadership
                </a>
                <a href="/careers" onClick={closeMenu}>
                  Careers
                </a>
              </div>
            )}

            <Link href="/blog" className="mobile-link" onClick={closeMenu}>
              Blog
            </Link>
            <a
              href="mailto:nozibiofficial@gmail.com"
              className="mobile-link"
              onClick={closeMenu}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
