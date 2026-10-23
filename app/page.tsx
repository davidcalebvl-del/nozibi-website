import Link from "next/link";

export default function Home() {
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
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-container">
            <div className="tag-pill">
              <span>NIGERIA-BASED AI INNOVATION</span>
            </div>
            <h1 className="hero-title">NOZIBI</h1>
            <p className="hero-mixed-line">
              An AI company built for <strong><u>speed</u></strong>,{" "}
              <strong><u>personality</u></strong>, and{" "}
              <strong><u>access</u></strong>.
            </p>
            <p className="hero-subline">
              We build fast, personality-driven AI products that are accessible
              to everyone — starting with Davora, our AI chat app.
            </p>
            <div className="hero-cta-wrapper">
              <a href="#davora" className="white-pill-btn">
                Meet Davora &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* Davora Section */}
        <section id="davora" className="section davora-section">
          <div className="container">
            <div className="davora-header">
              <div className="davora-title-row">
                <h2 className="davora-name">DAVORA</h2>
                <span className="flagship-tag">FLAGSHIP PRODUCT</span>
              </div>
              <p className="by-nozibi">By NOZIBI</p>
              <p className="davora-mission">
                Davora is our flagship AI chat app — built for sub-second
                replies, naturally warm conversation, and reliable access on any
                device, anywhere.
              </p>
              <div className="davora-cta-row">
                <a
                  href="https://davora.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark-pill-btn"
                >
                  LAUNCH DAVORA &rarr;
                </a>
              </div>
            </div>

            <div className="features-grid">
              <article className="card feature-card">
                <div className="card-top">
                  <span className="card-cat-line">
                    01 &nbsp;/&nbsp; PERFORMANCE
                  </span>
                </div>
                <h3 className="card-title">High Speed</h3>
                <p className="card-desc">
                  Engineered for sub-second response latency and real-time
                  execution — so the conversation never waits on the model.
                </p>
              </article>

              <article className="card feature-card">
                <div className="card-top">
                  <span className="card-cat-line">
                    02 &nbsp;/&nbsp; EXPERIENCE
                  </span>
                </div>
                <h3 className="card-title">Real Personality</h3>
                <p className="card-desc">
                  Adaptive context, genuine warmth, and engaging tone built into
                  every interaction — it talks like someone you would actually
                  want to chat with.
                </p>
              </article>

              <article className="card feature-card">
                <div className="card-top">
                  <span className="card-cat-line">
                    03 &nbsp;/&nbsp; DISTRIBUTION
                  </span>
                </div>
                <h3 className="card-title">Universal Access</h3>
                <p className="card-desc">
                  Accessible design optimized for low-bandwidth networks and
                  every kind of device — quality AI, not locked behind high-end
                  hardware.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="section pillars-section">
          <div className="container">
            <div className="pillars-grid">
              <article className="card pillar-card">
                <span className="pillar-label">PILLAR I</span>
                <h3 className="pillar-title">SPEED</h3>
                <p className="pillar-desc">
                  Sub-second responsiveness and optimized AI execution
                  pipelines. Speed is a feature, not an afterthought.
                </p>
              </article>

              <article className="card pillar-card">
                <span className="pillar-label">PILLAR II</span>
                <h3 className="pillar-title">PERSONALITY</h3>
                <p className="pillar-desc">
                  Distinctive, warm, and natural interactions that feel truly
                  engaging — AI with character, not just correctness.
                </p>
              </article>

              <article className="card pillar-card">
                <span className="pillar-label">PILLAR III</span>
                <h3 className="pillar-title">ACCESS</h3>
                <p className="pillar-desc">
                  Democratizing intelligence from Nigeria for users across the
                  globe — built for emerging markets first.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="section pricing-section">
          <div className="container">
            <div className="pricing-header">
              <span className="section-label">PRICING</span>
              <h2 className="huge-heading">Simple, transparent pricing</h2>
            </div>

            <div className="pricing-grid">
              <article className="card pricing-card">
                <span className="pricing-tier-name">STARTER</span>
                <div className="pricing-amount-row">
                  <span className="pricing-price">$0</span>
                  <span className="pricing-period">/ free forever</span>
                </div>
                <p className="pricing-desc">
                  Ideal for individuals exploring conversational AI
                  capabilities.
                </p>
                <ul className="pricing-features">
                  <li>Standard response speed</li>
                  <li>Adaptive personality engine</li>
                  <li>Community access &amp; support</li>
                </ul>
              </article>

              <article className="card pricing-card pricing-card-featured">
                <span className="pricing-tier-name">PRO</span>
                <div className="pricing-amount-row">
                  <span className="pricing-price">$19</span>
                  <span className="pricing-period">/ month</span>
                </div>
                <p className="pricing-desc">
                  For power users and builders needing priority execution.
                </p>
                <ul className="pricing-features">
                  <li>Ultra-fast priority inference</li>
                  <li>Custom personality fine-tuning</li>
                  <li>Expanded context window</li>
                </ul>
              </article>

              <article className="card pricing-card">
                <span className="pricing-tier-name">ENTERPRISE</span>
                <div className="pricing-amount-row">
                  <span className="pricing-price">Custom</span>
                </div>
                <p className="pricing-desc">
                  Tailored infrastructure &amp; dedicated intelligence
                  pipelines.
                </p>
                <ul className="pricing-features">
                  <li>Dedicated API endpoints &amp; SLA</li>
                  <li>Bespoke AI system integration</li>
                  <li>24/7 priority developer support</li>
                </ul>
              </article>
            </div>

            <div className="pricing-cta-row">
              <a
                href="https://davora.xyz/pricing"
                target="_blank"
                rel="noopener noreferrer"
                className="dark-pill-btn"
              >
                See full pricing &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* About / Leadership Section */}
        <section id="about" className="section about-section">
          <div className="container">
            <div className="about-header">
              <span className="section-label">WHO WE ARE</span>
              <h2 className="huge-heading">Leadership at Nozibi</h2>
            </div>

            <p className="our-story">
              Nozibi was founded by two self-taught brothers, David and Joshua
              Caleb, in Nigeria. With no outside funding and no large team, they
              built the company from scratch around a simple belief: world-class
              AI products can be built from anywhere, for everyone. Today they
              lead product, design, and engineering for Davora and the next
              generation of Nozibi AI tools.
            </p>

            <div className="founders-grid">
              <article className="card founder-card">
                <div className="founder-top-row">
                  <img
                    src="/david-caleb.jpg"
                    alt="David Caleb"
                    className="founder-avatar founder-photo"
                  />
                  <span className="founder-role-pill">
                    CHIEF EXECUTIVE OFFICER
                  </span>
                </div>
                <h3 className="founder-name">David Caleb</h3>
                <p className="founder-subrole">CO-FOUNDER &amp; CEO</p>
                <p className="founder-bio">
                  Self-taught graphic and web designer leading product vision,
                  brand identity, and business strategy for Davora and future
                  Nozibi AI tools. Previously built brand assets and client
                  websites at FixHub Technology.
                </p>
                <div className="founder-footer-line" />
                <div className="founder-tags">
                  <span className="meta-tag">Self-Taught Creator</span>
                  <Link href="/bio/david" className="read-bio-link">
                    Read full bio &rarr;
                  </Link>
                </div>
              </article>

              <article className="card founder-card">
                <div className="founder-top-row">
                  <img
                    src="/joshua-caleb.jpg"
                    alt="Joshua Caleb"
                    className="founder-avatar founder-photo"
                  />
                  <span className="founder-role-pill">
                    CHIEF TECHNOLOGY OFFICER
                  </span>
                </div>
                <h3 className="founder-name">Joshua Caleb</h3>
                <p className="founder-subrole">CO-FOUNDER &amp; CTO</p>
                <p className="founder-bio">
                  Self-taught engineer architecting core AI integration, systems
                  performance, and infrastructure at Nozibi. Passionate about
                  efficient algorithms, clean code, and zero-compromise speed.
                </p>
                <div className="founder-footer-line" />
                <div className="founder-tags">
                  <span className="meta-tag">Self-Taught Engineer</span>
                  <Link href="/bio/joshua" className="read-bio-link">
                    Read full bio &rarr;
                  </Link>
                </div>
              </article>
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
                <li><a href="#about">About Us</a></li>
                <li><a href="#about">Our Story</a></li>
                <li><a href="/careers">Careers</a></li>
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
                <li><a href="#pricing">Pricing</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">RESEARCH</h4>
              <ul className="footer-links">
                <li><a href="#about">Our Approach</a></li>
                <li><a href="/blog">Blog</a></li>
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
                <li><a href="mailto:nozibiofficial@gmail.com">Email</a></li>
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
