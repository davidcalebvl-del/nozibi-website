"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="site-wrapper">
      {/* Sticky Header */}
      <header className="header">
        <div className="header-container">
          <Link href="/" className="brand-logo" aria-label="NOZIBI Home">
            <span className="dot" />
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
            <div className="tag-pill">NIGERIA-BASED AI INNOVATION</div>

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
                  <span className="card-number">01</span>
                  <span className="card-cat">PERFORMANCE</span>
                </div>
                <h3 className="card-title">Groq-Powered Speed</h3>
                <p className="card-desc">
                  Ultra-fast response latency engineered for real-time natural conversations.
                </p>
              </article>

              <article className="card feature-card">
                <div className="card-top">
                  <span className="card-number">02</span>
                  <span className="card-cat">EXPERIENCE</span>
                </div>
                <h3 className="card-title">Vibe & Personality</h3>
                <p className="card-desc">
                  Human-like tone and fluid expressiveness built directly into every interaction.
                </p>
              </article>

              <article className="card feature-card">
                <div className="card-top">
                  <span className="card-number">03</span>
                  <span className="card-cat">ACCESSIBILITY</span>
                </div>
                <h3 className="card-title">Practical Access</h3>
                <p className="card-desc">
                  Fair, transparent tiering created to deliver advanced AI to everyone.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="section pillars-section">
          <div className="container">
            <div className="section-label-block">
              <span className="section-label">FOUNDATIONAL VALUES</span>
            </div>
            <div className="pillars-grid">
              <article className="card pillar-card">
                <span className="pillar-label">PILLAR I</span>
                <h3 className="pillar-title">SPEED</h3>
                <p className="pillar-desc">
                  High-velocity inference architecture designed for instant response times.
                </p>
              </article>

              <article className="card pillar-card">
                <span className="pillar-label">PILLAR II</span>
                <h3 className="pillar-title">PERSONALITY</h3>
                <p className="pillar-desc">
                  Engaging, memorable conversational AI shaped with authentic human energy.
                </p>
              </article>

              <article className="card pillar-card">
                <span className="pillar-label">PILLAR III</span>
                <h3 className="pillar-title">ACCESS</h3>
                <p className="pillar-desc">
                  Democratizing advanced technology through scalable, efficient engineering.
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
                &ldquo;We are David Caleb (CEO) and Joshua Caleb (CTO), two self-taught brothers from Nigeria building AI products with no external funding or big team.&rdquo;
              </p>
            </div>

            <div className="founders-grid">
              <article className="card founder-card">
                <div className="founder-header">
                  <div className="founder-avatar">DC</div>
                  <div>
                    <h3 className="founder-name">David Caleb</h3>
                    <span className="role-tag">CEO</span>
                  </div>
                </div>
                <p className="founder-bio">
                  Leads product direction, vision, and operational strategy at NOZIBI, focusing on user experience and accessible AI tools.
                </p>
                <div className="founder-tags">
                  <span className="meta-tag">Self-Taught Creator</span>
                  <span className="meta-tag">Nigeria</span>
                </div>
              </article>

              <article className="card founder-card">
                <div className="founder-header">
                  <div className="founder-avatar">JC</div>
                  <div>
                    <h3 className="founder-name">Joshua Caleb</h3>
                    <span className="role-tag">CTO</span>
                  </div>
                </div>
                <p className="founder-bio">
                  Directs technical architecture and core infrastructure, crafting high-speed, lightweight systems powering NOZIBI&apos;s products.
                </p>
                <div className="founder-tags">
                  <span className="meta-tag">Self-Taught Engineer</span>
                  <span className="meta-tag">Nigeria</span>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      {/* Minimal Footer */}
      <footer className="footer">
        <div className="container footer-container">
          <span className="footer-left">NOZIBI / Built in Nigeria</span>
          <span className="footer-right">&copy; 2026 NOZIBI. All rights reserved.</span>
        </div>
      </footer>

      <style jsx>{`
        .site-wrapper {
          min-height: 100vh;
          background-color: #000000;
          color: #ffffff;
          font-family: var(--font-inter), system-ui, -apple-system, sans-serif;
          display: flex;
          flex-direction: column;
        }

        .container {
          width: min(1080px, calc(100% - 48px));
          margin: 0 auto;
        }

        /* Header */
        .header {
          position: sticky;
          top: 0;
          z-index: 100;
          background-color: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .header-container {
          width: min(1080px, calc(100% - 48px));
          margin: 0 auto;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .dot {
          width: 8px;
          height: 8px;
          background-color: #ffffff;
          border-radius: 50%;
          display: inline-block;
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.6);
        }

        .brand-text {
          font-weight: 800;
          letter-spacing: 0.12em;
          font-size: 0.95rem;
          color: #ffffff;
        }

        .pill-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 18px;
          border-radius: 999px;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          border: 1px solid rgba(255, 255, 255, 0.22);
          background: rgba(255, 255, 255, 0.05);
          color: #ffffff;
        }

        .pill-btn:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.4);
        }

        /* Hero */
        .hero-section {
          padding: 100px 24px 80px;
          text-align: center;
          display: flex;
          justify-content: center;
        }

        .hero-container {
          max-width: 800px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .tag-pill {
          display: inline-flex;
          align-items: center;
          padding: 6px 14px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          background: rgba(255, 255, 255, 0.04);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 28px;
        }

        .hero-title {
          font-size: clamp(4rem, 12vw, 8rem);
          font-weight: 900;
          letter-spacing: -0.04em;
          line-height: 0.95;
          margin: 0 0 28px;
          background: linear-gradient(180deg, #ffffff 0%, #888888 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-mixed-line {
          font-size: clamp(1.2rem, 3.2vw, 1.8rem);
          font-weight: 400;
          line-height: 1.4;
          color: rgba(255, 255, 255, 0.9);
          margin: 0 0 16px;
          max-width: 680px;
        }

        .hero-mixed-line strong {
          font-weight: 700;
          color: #ffffff;
        }

        .hero-mixed-line u {
          text-underline-offset: 4px;
          text-decoration-thickness: 2px;
        }

        .hero-subline {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.6);
          max-width: 540px;
          margin: 0 0 36px;
          line-height: 1.6;
        }

        .hero-cta-wrapper {
          display: flex;
          justify-content: center;
        }

        .white-pill-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 32px;
          border-radius: 999px;
          background-color: #ffffff;
          color: #000000;
          font-size: 0.92rem;
          font-weight: 700;
          letter-spacing: 0.02em;
        }

        .white-pill-btn:hover {
          background-color: #e0e0e0;
          transform: translateY(-1px);
        }

        /* General Section */
        .section {
          padding: 80px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .section-label-block {
          margin-bottom: 32px;
        }

        .section-label {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: rgba(255, 255, 255, 0.5);
          display: block;
          margin-bottom: 8px;
        }

        .huge-heading {
          font-size: clamp(2.2rem, 5vw, 3.8rem);
          font-weight: 900;
          letter-spacing: -0.03em;
          margin: 0;
          color: #ffffff;
        }

        /* Cards Shared */
        .card {
          background: rgba(255, 255, 255, 0.025);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 28px;
        }

        /* Davora Section */
        .davora-header {
          margin-bottom: 40px;
        }

        .davora-title-row {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .davora-name {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 900;
          letter-spacing: -0.03em;
          margin: 0;
          color: #ffffff;
        }

        .flagship-tag {
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          padding: 6px 12px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.06);
          color: #ffffff;
        }

        .by-nozibi {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.5);
          margin: 6px 0 24px;
          font-weight: 500;
        }

        .davora-cta-row {
          margin-top: 8px;
        }

        .dark-pill-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 26px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.06em;
        }

        .dark-pill-btn:hover {
          background: rgba(255, 255, 255, 0.16);
          border-color: rgba(255, 255, 255, 0.4);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .card-number {
          font-size: 0.85rem;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.4);
          letter-spacing: 0.08em;
        }

        .card-cat {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: rgba(255, 255, 255, 0.4);
        }

        .card-title {
          font-size: 1.2rem;
          font-weight: 800;
          margin: 0 0 10px;
          color: #ffffff;
        }

        .card-desc {
          font-size: 0.92rem;
          color: rgba(255, 255, 255, 0.65);
          margin: 0;
          line-height: 1.5;
        }

        /* Pillars Grid */
        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .pillar-label {
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          color: rgba(255, 255, 255, 0.4);
          display: block;
          margin-bottom: 12px;
        }

        .pillar-title {
          font-size: 1.4rem;
          font-weight: 900;
          letter-spacing: 0.04em;
          margin: 0 0 12px;
          color: #ffffff;
        }

        .pillar-desc {
          font-size: 0.92rem;
          color: rgba(255, 255, 255, 0.65);
          margin: 0;
          line-height: 1.5;
        }

        /* About Us */
        .about-header {
          margin-bottom: 32px;
        }

        .quote-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 20px;
          padding: 36px 40px;
          margin-bottom: 32px;
        }

        .quote-text {
          font-size: clamp(1.1rem, 2.5vw, 1.4rem);
          font-weight: 500;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.92);
          margin: 0;
          font-style: italic;
        }

        .founders-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .founder-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }

        .founder-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 0.95rem;
          color: #ffffff;
        }

        .founder-name {
          font-size: 1.25rem;
          font-weight: 800;
          margin: 0 0 4px;
          color: #ffffff;
        }

        .role-tag {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: rgba(255, 255, 255, 0.5);
        }

        .founder-bio {
          font-size: 0.92rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          margin: 0 0 20px;
          min-height: 4.8em;
        }

        .founder-tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .meta-tag {
          font-size: 0.72rem;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.03);
          color: rgba(255, 255, 255, 0.6);
        }

        /* Footer */
        .footer {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding: 32px 0;
          margin-top: auto;
        }

        .footer-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.5);
          flex-wrap: wrap;
          gap: 16px;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .features-grid,
          .pillars-grid,
          .founders-grid {
            grid-template-columns: 1fr;
          }

          .hero-title {
            font-size: 4rem;
          }

          .quote-card {
            padding: 24px;
          }

          .founder-bio {
            min-height: auto;
          }
        }

        @media (max-width: 600px) {
          .container,
          .header-container {
            width: calc(100% - 32px);
          }

          .hero-section {
            padding: 60px 16px 48px;
          }

          .footer-container {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
}
