"use client";

import Image from "next/image";
import Link from "next/link";

const pillars = [
  {
    title: "Speed At Scale",
    description:
      "Groq-powered infrastructure keeps Davora fast, responsive, and ready for real-time conversations.",
  },
  {
    title: "Personality And Vibe",
    description:
      "A more expressive AI experience that feels natural, memorable, and genuinely enjoyable to use.",
  },
  {
    title: "Built To Be Affordable",
    description:
      "Flexible pricing keeps advanced AI accessible without compromising performance or product quality.",
  },
];

const pricingTiers = [
  {
    name: "Free",
    price: "$0",
    cadence: "/month",
    features: ["20 messages/day", "Basic AI"],
    featured: false,
  },
  {
    name: "Basic",
    price: "$3.99",
    cadence: "/month",
    features: ["300 messages/month", "Faster responses"],
    featured: false,
  },
  {
    name: "Pro",
    price: "$7.99",
    cadence: "/month",
    features: ["1,500 messages/month", "Advanced features", "Priority"],
    featured: true,
  },
  {
    name: "Premium",
    price: "$15.99",
    cadence: "/month",
    features: ["4,000 messages/month", "All features", "Highest priority", "Early access"],
    featured: false,
  },
];

const founders = [
  {
    name: "David Caleb",
    role: "CEO",
    bio: "Leads product vision, company direction, and the long-term ambition behind NOZIBI.",
  },
  {
    name: "Joshua Caleb",
    role: "CTO",
    bio: "Drives engineering, technical architecture, and the systems powering the next NOZIBI products.",
  },
];

export default function Home() {
  return (
    <main className="page-shell">
      <nav className="nav">
        <div className="container nav-inner">
          <Link href="#" className="brand-mark" aria-label="NOZIBI home">
            <span className="brand-logo-tile">
              <Image src="/nozibi-logo.svg" alt="NOZIBI logo" width={34} height={34} priority />
            </span>
            <span className="brand-name">NOZIBI</span>
          </Link>

          <div className="nav-links">
            <Link href="#davora">Our Product</Link>
            <Link href="#about">About Us</Link>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="hero-brand">
              <span className="hero-logo-frame">
                <Image src="/nozibi-logo.svg" alt="NOZIBI mark" width={68} height={68} priority />
              </span>
              <div>
                <p className="eyebrow">NOZIBI</p>
                <span className="status-badge">Nigeria-Based AI Innovation</span>
              </div>
            </div>

            <h1>
              Building the next generation of intelligent applications from Nigeria.
            </h1>
            <p className="hero-text">
              NOZIBI is an AI company creating bold, high-performance products designed
              for modern users who want smarter tools, better experiences, and practical
              access to advanced intelligence.
            </p>

            <div className="hero-actions">
              <Link
                href="https://davora.xyz"
                className="primary-button"
                target="_blank"
                rel="noreferrer"
              >
                Explore Davora
              </Link>
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-panel-card">
              <p className="panel-label">Focused Product</p>
              <h2>Davora</h2>
              <p>
                A fast, vibe-rich AI experience shaped for responsiveness, personality,
                and everyday affordability.
              </p>
            </div>

            <div className="hero-metrics">
              <article>
                <span>Infrastructure</span>
                <strong>Groq-backed speed</strong>
              </article>
              <article>
                <span>Positioning</span>
                <strong>Built in Nigeria</strong>
              </article>
              <article>
                <span>Experience</span>
                <strong>Minimal, human, useful</strong>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="davora" className="section-block">
        <div className="container">
          <div className="section-heading">
            <div className="product-heading">
              <span className="davora-logo-tile">
                <Image src="/davora-logo.svg" alt="Davora logo" width={62} height={62} />
              </span>
              <div>
                <p className="eyebrow">Our Product</p>
                <h2>Davora</h2>
              </div>
            </div>
            <p className="section-copy">
              Davora combines speed, personality, and practical pricing in one product
              built to make AI feel more immediate and more useful.
            </p>
          </div>

          <div className="pillars-grid">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="panel-card">
                <p className="card-index">{pillar.title}</p>
                <p className="card-copy">{pillar.description}</p>
              </article>
            ))}
          </div>

          <div className="pricing-shell">
            <div className="pricing-heading">
              <p className="eyebrow">Pricing</p>
              <h3>Simple access to Davora, from entry-level to power usage.</h3>
            </div>

            <div className="pricing-grid">
              {pricingTiers.map((tier) => (
                <article
                  key={tier.name}
                  className={`pricing-card${tier.featured ? " featured" : ""}`}
                >
                  <div className="pricing-top">
                    <div>
                      <p className="tier-name">{tier.name}</p>
                      <div className="tier-price-row">
                        <span className="tier-price">{tier.price}</span>
                        <span className="tier-cadence">{tier.cadence}</span>
                      </div>
                    </div>
                    {tier.featured ? <span className="popular-pill">Most Popular</span> : null}
                  </div>

                  <ul className="feature-list">
                    {tier.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="pricing-cta">
              <Link
                href="https://davora.xyz"
                className="secondary-button"
                target="_blank"
                rel="noreferrer"
              >
                Start With Davora
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-block">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">About Us</p>
            <h2>Founders building NOZIBI with product ambition and technical depth.</h2>
          </div>

          <div className="founders-grid">
            {founders.map((founder) => (
              <article key={founder.name} className="founder-card">
                <p className="founder-role">{founder.role}</p>
                <h3>{founder.name}</h3>
                <p>{founder.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <span className="brand-logo-tile">
              <Image src="/nozibi-logo.svg" alt="NOZIBI footer logo" width={34} height={34} />
            </span>
            <div>
              <p className="footer-name">NOZIBI</p>
              <p className="footer-copy">
                Nigeria-based AI innovation building next-generation intelligent applications.
              </p>
            </div>
          </div>

          <div className="footer-meta">
            <p>NOZIBI</p>
            <p>David Caleb, CEO</p>
            <p>Joshua Caleb, CTO</p>
            <p>{new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .page-shell {
          position: relative;
          overflow: hidden;
        }

        .container {
          width: min(1120px, calc(100% - 32px));
          margin: 0 auto;
        }

        .nav {
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: blur(16px);
          background: rgba(0, 0, 0, 0.72);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 78px;
          gap: 20px;
        }

        .brand-mark {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-size: 0.92rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .brand-logo-tile,
        .hero-logo-frame,
        .davora-logo-tile {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 20px 60px rgba(255, 255, 255, 0.08);
        }

        .brand-logo-tile {
          width: 48px;
          height: 48px;
          border-radius: 16px;
        }

        .hero-logo-frame {
          width: 96px;
          height: 96px;
          border-radius: 28px;
          flex-shrink: 0;
        }

        .davora-logo-tile {
          width: 92px;
          height: 92px;
          border-radius: 28px;
          flex-shrink: 0;
        }

        .brand-name,
        .footer-name {
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .nav-links {
          display: inline-flex;
          align-items: center;
          gap: 22px;
          color: rgba(255, 255, 255, 0.82);
          font-size: 0.95rem;
        }

        .nav-links a:hover,
        .brand-mark:hover {
          opacity: 0.78;
        }

        .hero {
          padding: 76px 0 48px;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(320px, 0.8fr);
          gap: 32px;
          align-items: stretch;
        }

        .hero-copy,
        .hero-panel,
        .panel-card,
        .pricing-card,
        .founder-card,
        .footer {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .hero-copy,
        .hero-panel {
          border-radius: 32px;
          padding: 36px;
        }

        .hero-brand {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 28px;
        }

        .eyebrow {
          margin: 0 0 10px;
          color: rgba(255, 255, 255, 0.58);
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .status-badge,
        .popular-pill,
        .founder-role {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: fit-content;
          padding: 8px 14px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.06);
          color: #ffffff;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        h1,
        h2,
        h3,
        p {
          margin-top: 0;
        }

        h1 {
          max-width: 11ch;
          margin-bottom: 20px;
          font-size: clamp(3rem, 8vw, 6rem);
          line-height: 0.95;
          font-weight: 900;
          letter-spacing: -0.06em;
        }

        h2 {
          margin-bottom: 14px;
          font-size: clamp(2rem, 4vw, 3.2rem);
          line-height: 1;
          font-weight: 850;
          letter-spacing: -0.05em;
        }

        h3 {
          margin-bottom: 0;
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          line-height: 1.05;
          font-weight: 800;
          letter-spacing: -0.05em;
        }

        .hero-text,
        .section-copy,
        .hero-panel-card p,
        .card-copy,
        .founder-card p,
        .footer-copy,
        .footer-meta {
          color: rgba(255, 255, 255, 0.72);
          font-size: 1rem;
          line-height: 1.7;
        }

        .hero-actions,
        .pricing-cta {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 30px;
        }

        .primary-button,
        .secondary-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 52px;
          padding: 0 22px;
          border-radius: 999px;
          font-size: 0.96rem;
          font-weight: 700;
          letter-spacing: 0.04em;
        }

        .primary-button {
          background: #ffffff;
          color: #000000;
        }

        .secondary-button {
          border: 1px solid rgba(255, 255, 255, 0.16);
          background: rgba(255, 255, 255, 0.06);
          color: #ffffff;
        }

        .primary-button:hover,
        .secondary-button:hover {
          transform: translateY(-2px);
        }

        .hero-panel {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 20px;
        }

        .hero-panel-card {
          padding-bottom: 22px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .panel-label,
        .tier-name,
        .card-index {
          margin-bottom: 14px;
          font-size: 0.86rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.54);
        }

        .hero-panel-card h2 {
          margin-bottom: 14px;
        }

        .hero-metrics {
          display: grid;
          gap: 14px;
        }

        .hero-metrics article,
        .panel-card,
        .pricing-card,
        .founder-card {
          border-radius: 28px;
          padding: 24px;
        }

        .hero-metrics article {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .hero-metrics span {
          display: block;
          margin-bottom: 8px;
          color: rgba(255, 255, 255, 0.52);
          font-size: 0.82rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .hero-metrics strong {
          font-size: 1.1rem;
          line-height: 1.4;
          font-weight: 700;
        }

        .section-block {
          padding: 48px 0;
        }

        .section-heading {
          display: grid;
          gap: 14px;
          margin-bottom: 28px;
        }

        .product-heading {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .section-copy {
          max-width: 720px;
          margin-bottom: 0;
        }

        .pillars-grid,
        .pricing-grid,
        .founders-grid {
          display: grid;
          gap: 18px;
        }

        .pillars-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-bottom: 22px;
        }

        .card-copy {
          margin-bottom: 0;
        }

        .pricing-shell {
          border-radius: 32px;
          padding: 32px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .pricing-heading {
          display: grid;
          gap: 12px;
          margin-bottom: 26px;
        }

        .pricing-grid {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .pricing-card {
          display: flex;
          flex-direction: column;
          gap: 24px;
          min-height: 100%;
        }

        .pricing-card.featured {
          background: #ffffff;
          color: #000000;
          border-color: #ffffff;
          box-shadow: 0 24px 80px rgba(255, 255, 255, 0.12);
        }

        .pricing-card.featured .tier-name,
        .pricing-card.featured .tier-cadence,
        .pricing-card.featured li {
          color: rgba(0, 0, 0, 0.74);
        }

        .pricing-card.featured .popular-pill {
          background: #000000;
          border-color: #000000;
          color: #ffffff;
        }

        .pricing-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 14px;
        }

        .tier-price-row {
          display: flex;
          align-items: baseline;
          gap: 8px;
        }

        .tier-price {
          font-size: 2.4rem;
          line-height: 1;
          font-weight: 800;
          letter-spacing: -0.06em;
        }

        .tier-cadence {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.96rem;
        }

        .feature-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 12px;
        }

        .feature-list li {
          color: rgba(255, 255, 255, 0.76);
          padding-top: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          line-height: 1.5;
        }

        .pricing-card.featured li {
          border-color: rgba(0, 0, 0, 0.08);
        }

        .founders-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .founder-card h3 {
          margin-bottom: 14px;
        }

        .founder-role {
          margin-bottom: 18px;
          background: rgba(255, 255, 255, 0.08);
        }

        .footer {
          margin: 48px auto 24px;
          border-radius: 32px;
        }

        .footer-inner {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 22px;
          padding: 28px;
        }

        .footer-brand {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          max-width: 560px;
        }

        .footer-name {
          margin-bottom: 10px;
          font-size: 0.95rem;
          font-weight: 800;
        }

        .footer-copy {
          margin-bottom: 0;
        }

        .footer-meta {
          display: grid;
          gap: 6px;
          text-align: right;
        }

        .footer-meta p {
          margin-bottom: 0;
        }

        @media (max-width: 1080px) {
          .hero-grid,
          .pillars-grid,
          .pricing-grid,
          .founders-grid {
            grid-template-columns: 1fr;
          }

          .footer-inner {
            flex-direction: column;
          }

          .footer-meta {
            text-align: left;
          }
        }

        @media (max-width: 720px) {
          .container {
            width: min(100% - 20px, 1120px);
          }

          .nav-inner,
          .hero-brand,
          .product-heading {
            flex-direction: column;
            align-items: flex-start;
          }

          .nav-links {
            flex-wrap: wrap;
            gap: 14px;
          }

          .hero {
            padding-top: 42px;
          }

          .hero-copy,
          .hero-panel,
          .pricing-shell,
          .panel-card,
          .pricing-card,
          .founder-card {
            padding: 22px;
            border-radius: 24px;
          }

          .brand-name {
            letter-spacing: 0.14em;
          }

          .hero-logo-frame {
            width: 78px;
            height: 78px;
            border-radius: 22px;
          }

          .davora-logo-tile {
            width: 80px;
            height: 80px;
            border-radius: 24px;
          }

          .pricing-top {
            flex-direction: column;
          }

          .footer {
            margin-top: 32px;
          }
        }
      `}</style>
    </main>
  );
}
