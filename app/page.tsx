import Link from "next/link";

export default function Home() {
  return (
    <div className="site-wrapper">
      {/* Sticky Header */}
      <header className="header">
        <div className="header-container">
          <Link href="/" className="brand-logo" aria-label="NOZIBI Home">
            <span className="logo-dot" />
            <span className="brand-text">NOZIBI</span>
          </Link>

          <a
            href="https://davora.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="pill-btn header-pill"
          >
            DAVORA &rarr;
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-container">
            <div className="tag-pill">
              <span className="hero-badge-dot" />
              <span>NIGERIA-BASED AI INNOVATION</span>
            </div>

            <h1 className="hero-title">NOZIBI</h1>

            <p className="hero-mixed-line">
              An AI company built for <strong><u>speed</u></strong>, <strong><u>personality</u></strong>, and <strong><u>access</u></strong>.
            </p>

            <p className="hero-subline">
              Creating high-performance intelligent products designed with precision, fast inference, and accessible design.
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
                  Engineered for instant response latency and real-time execution.
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
                  Adaptive context, warmth, and engagement built into every interaction.
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
                  Accessible design optimized for global devices and network
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="section about-section">
          <div className="container">
            <div className="about-header">
              <span className="section-label">WHO WE ARE</span>
              <h2 className="huge-heading">ABOUT US</h2>
            </div>

            <div className="quote-card">
              <p className="quote-text">
                &ldquo;We are <strong>David Caleb (CEO)</strong> and <strong>Joshua Caleb (CTO)</strong>, two self-taught brothers from Nigeria building AI products with no external funding or big team.&rdquo;
              </p>
            </div>

            <div className="founders-grid">
              <article className="card founder-card">
                <div className="founder-top-row">
                  <span className="founder-initials">DC</span>
                  <span className="founder-role-pill">CHIEF EXECUTIVE OFFICER</span>
                </div>
                <h3 className="founder-name">David Caleb</h3>
                <p className="founder-subrole">CO-FOUNDER &amp; CEO</p>
                <p className="founder-bio">
                  Leading product vision, strategy, and experience at NOZIBI. Focused on building high-impact AI systems that combine speed with deep human warmth and accessibility.
                </p>
                <div className="founder-footer-line" />
                <div className="founder-tags">
                  <span className="meta-tag">Self-Taught Creator</span>
                  <span className="meta-tag">Nigeria</span>
                </div>
              </article>

              <article className="card founder-card">
                <div className="founder-top-row">
                  <span className="founder-initials">JC</span>
                  <span className="founder-role-pill">CHIEF TECHNOLOGY OFFICER</span>
                </div>
                <h3 className="founder-name">Joshua Caleb</h3>
                <p className="founder-subrole">CO-FOUNDER &amp; CTO</p>
                <p className="founder-bio">
                  Architecting core engineering, AI integration, and systems performance at NOZIBI. Passionate about efficient algorithms, clean code, and zero-compromise speed.
                </p>
                <div className="founder-footer-line" />
                <div className="founder-tags">
                  <span className="meta-tag">Self-Taught Engineer</span>
                  <span className="meta-tag">Nigeria</span>
                </div>
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
                  Sub-second responsiveness and optimized AI execution pipelines.
                </p>
              </article>

              <article className="card pillar-card">
                <span className="pillar-label">PILLAR II</span>
                <h3 className="pillar-title">PERSONALITY</h3>
                <p className="pillar-desc">
                  Distinctive, warm, and natural interactions that feel truly engaging.
                </p>
              </article>

              <article className="card pillar-card">
                <span className="pillar-label">PILLAR III</span>
                <h3 className="pillar-title">ACCESS</h3>
                <p className="pillar-desc">
                  Democratizing intelligence from Nigeria for users across the globe.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>

      {/* Minimal Footer */}
      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-left-group">
            <span className="brand-logo footer-logo">
              <span className="logo-dot" />
              <span className="brand-text">NOZIBI</span>
            </span>
            <span className="footer-sep">/</span>
            <span className="footer-subtext">Built in Nigeria</span>
          </div>
          <span className="footer-right">&copy; 2026 NOZIBI. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
