import Link from "next/link";

export const metadata = {
  title: "Blog — Nozibi",
  description:
    "Thoughts on AI, design, and building products from Nigeria.",
};

export default function Blog() {
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
            <span className="section-label">RESEARCH</span>
            <h1 className="bio-name">Blog</h1>
            <div className="bio-body">
              <p>
                Coming soon. We'll be sharing thoughts on AI product design,
                building with fast inference, and shipping software from
                emerging markets.
              </p>
              <p>
                Check back soon — or follow the journey on our socials linked
                in the footer.
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
