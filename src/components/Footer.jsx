import { NavLink } from "react-router-dom";

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "Platform", to: "/platform" },
  { label: "AI", to: "/ai" },
  { label: "Industries", to: "/industries" },
  { label: "Contact", to: "/contact" },
  { label: "Privacy", to: "/privacy" },
];

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-cta" aria-labelledby="footer-cta-title">
        <h2 id="footer-cta-title">Let’s Build Together</h2>
        <p>
          Partner with our AI specialists to design a solution tailored to your
          <br />
          business goals from proof-of-concept to full-scale deployment.
        </p>
        <NavLink className="footer-cta__button" to="/contact">
          Get Started
        </NavLink>
      </section>

      <section className="footer-panel">
        <img
          className="footer-panel__mark"
          src="/5.png"
          alt=""
          loading="lazy"
          width="120"
          height="120"
        />

        <div className="footer-panel__inner">
          <NavLink
            to="/"
            className="footer-panel__brand"
            aria-label="Orion Data Studio home"
          ></NavLink>

          <nav className="footer-panel__nav" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <NavLink key={link.label} to={link.to}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="footer-panel__meta">
            <p>©2026 All Rights Reserved</p>

            <p>
              Crafted by{" "}
              <a
                className="footer-panel__koios-link"
                href="https://www.koiostudio.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Koiostudio
              </a>
            </p>
          </div>
        </div>

        <div className="footer-panel__shadow-wrap">
          <span className="footer-panel__shadow" aria-hidden="true">
            ORION
          </span>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
