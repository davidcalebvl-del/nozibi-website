import Link from "next/link";

export const metadata = {
  title: "David Caleb — Co-Founder & CEO, Nozibi",
  description:
    "Full bio of David Caleb, Co-Founder & CEO of Nozibi, building Davora AI.",
};

export default function DavidBio() {
  return (
    <div className="site-wrapper">
      {/* Sticky Header */}
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
            <Link href="/#about" className="bio-back">
              &larr; Back to Nozibi
            </Link>

            <div className="bio-hero">
              <img
                src="/david-caleb.jpg"
                alt="David Caleb"
                className="founder-avatar bio-avatar founder-photo"
              />
              <div>
                <span className="section-label">CO-FOUNDER &amp; CEO</span>
                <h1 className="bio-name">David Caleb</h1>
                <p className="bio-tagline">
                  Self-taught builder, graphic &amp; web designer, and AI
                  startup leader based in Nigeria.
                </p>
              </div>
            </div>

            <div className="bio-body">
              <p>
                David Caleb is Co-Founder &amp; CEO of Nozibi — the company
                building Davora, the AI chat app. A self-taught graphic and web
                designer, he leads product vision, brand identity, and business
                strategy for Davora and future Nozibi AI tools.
              </p>
              <p>
                He began his career as a junior graphic designer, developing
                brand identities, logos, marketing visuals, and social media
                content. He previously worked at FixHub Technology as a Web
                Developer, Graphic Designer, and Social Media Manager, where he
                delivered client projects from first brief to final handoff.
              </p>
              <p>
                David built Nozibi from scratch alongside his brother Joshua —
                with no outside funding and no large technical team — using
                self-taught web design, no-code development, and AI-assisted
                build workflows.
              </p>
              <p>
                Outside work, he creates lifestyle, fitness, and
                confidence-building content for social media. A passionate
                bodybuilder, he sees consistent training as practice for the
                discipline and goal-setting that drive his startup work. He
                values speed, clarity, and accessible design — the same core
                values that guide Nozibi.
              </p>

              <h3>Skills &amp; Focus</h3>
              <ul>
                <li>Brand identity — logos, flyers, banners, brand guidelines</li>
                <li>Responsive website design (Base44 + AI-powered tools)</li>
                <li>No-code &amp; AI-assisted product building</li>
                <li>Product vision &amp; business strategy</li>
                <li>Social media &amp; short-form content strategy</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand-col">
              <span className="brand-logo footer-logo">
                <span className="brand-text">NOZIBI</span>
              </span>
              <p className="footer-tagline">
                Building AI with speed, personality, and access — from Nigeria,
                for the world.
              </p>
              <span className="footer-subtext">Built in Nigeria</span>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">COMPANY</h4>
              <ul className="footer-links">
                <li><a href="/#about">About Us</a></li>
                <li><a href="/#about">Our Story</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">PRODUCTS</h4>
              <ul className="footer-links">
                <li>
                  <a
                    href="https://davora.xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Davora
                  </a>
                </li>
                <li><a href="/#pricing">Pricing</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">RESEARCH</h4>
              <ul className="footer-links">
                <li><a href="/#about">Our Approach</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">CONNECT</h4>
              <ul className="footer-links">
                <li>
                  <a
                    href="https://www.linkedin.com/in/david-caleb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/davidcalebvl-del"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li><a href="#">X / Twitter</a></li>
              </ul>
            </div>
          </div>

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
