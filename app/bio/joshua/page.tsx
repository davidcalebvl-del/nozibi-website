import Link from "next/link";
import Header from "../../components/Header";

export const metadata = {
  title: "Joshua Caleb — Co-Founder & CTO, Nozibi",
  description:
    "Full bio of Joshua Caleb, Co-Founder & CTO of Nozibi, building Davora AI.",
};

export default function JoshuaBio() {
  return (
    <div className="site-wrapper">
      {/* Sticky Header */}
      <Header />

      <main>
        <section className="section bio-section">
          <div className="container">
            <Link href="/#about" className="bio-back">
              &larr; Back to Nozibi
            </Link>

            <div className="bio-hero">
              <img
                src="/joshua-caleb.jpg"
                alt="Joshua Caleb"
                className="founder-avatar bio-avatar founder-photo"
              />
              <div>
                <span className="section-label">CO-FOUNDER &amp; CTO</span>
                <h1 className="bio-name">Joshua Caleb</h1>
                <p className="bio-tagline">
                  Self-taught engineer architecting the systems behind Nozibi
                  and Davora AI.
                </p>
              </div>
            </div>

            <div className="bio-body">
              <p>
                Joshua Caleb is Co-Founder &amp; CTO of Nozibi. A self-taught
                engineer, he architects core AI integration, systems
                performance, and infrastructure for Davora and future Nozibi
                products.
              </p>
              <p>
                He built Nozibi from scratch with his brother David — writing
                the code and designing the systems that power Davora with no
                outside funding and no large team. He is passionate about
                efficient algorithms, clean code, and zero-compromise speed.
              </p>
              <p>
                His engineering philosophy is simple: great AI products live or
                die by their performance. Every layer of the stack — from
                inference pipelines to the interface — is built to feel instant
                and reliable, even on constrained networks and devices.
              </p>

              <h3>Skills &amp; Focus</h3>
              <ul>
                <li>AI integration &amp; inference optimization</li>
                <li>Backend systems &amp; infrastructure</li>
                <li>Performance engineering &amp; low-latency design</li>
                <li>Clean, maintainable code architecture</li>
                <li>Building for low-bandwidth &amp; emerging markets</li>
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
                <li><a href="/#pricing">Pricing</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">RESEARCH</h4>
              <ul className="footer-links">
                <li><a href="/#about">Our Approach</a></li>
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
