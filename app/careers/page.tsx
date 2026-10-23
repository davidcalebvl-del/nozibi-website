import Link from "next/link";

export const metadata = {
  title: "Careers — Nozibi",
  description: "Join Nozibi. We're always looking for talented builders.",
};

export default function Careers() {
  return (
    <div className="site-wrapper">
      <header className="header">
        <div className="header-container">
          <Link href="/" className="brand-logo" aria-label="NOZIBI Home">
            <span className="brand-text">NOZIBI</span>
          </Link>
          <a
            href="https://davora.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="pill-btn header-pill"
          >
            DAVORA
          </a>
        </div>
      </header>

      <main>
        <section className="section bio-section">
          <div className="container">
            <Link href="/" className="bio-back">
              &larr; Back to Nozibi
            </Link>
            <span className="section-label">COMPANY</span>
            <h1 className="bio-name">Careers</h1>
            <div className="bio-body">
              <p>
                We're a small, self-funded team of two brothers building AI
                products from Nigeria. We're not actively hiring right now — but
                we're always open to meeting talented designers, engineers, and
                creators who align with our values: speed, personality, and
                access.
              </p>
              <p>
                If you'd like to work with us, send a short intro and your work
                to{" "}
                <a
                  href="mailto:nozibiofficial@gmail.com"
                  style={{ color: "#fff", textDecoration: "underline" }}
                >
                  nozibiofficial@gmail.com
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-bottom">
            <span className="footer-right">
              &copy; 2026 NOZIBI. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
