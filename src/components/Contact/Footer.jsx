import { NavLink } from "react-router-dom";

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "Platform", to: "/platform" },
  { label: "AI", to: "/ai" },
  { label: "Industries", to: "/industries" },
  { label: "Contact", to: "/contact" },
  { label: "Privacy", to: "/privacy" },
];

const reachCards = [
  {
    label: "Call us at",
    value: "+91 28938938938",
    icon: "phone",
  },
  {
    label: "Email us",
    value: "info@orion.com",
    icon: "mail",
  },
  {
    label: "Reach us at",
    value: "Bengaluru",
    icon: "pin",
  },
];

const ReachIcon = ({ type }) => {
  const commonProps = {
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
  };

  const icons = {
    phone: (
      <svg {...commonProps}>
        <path
          d="M6.2 4.4 8.5 9l-2 1.3c1 2.2 2.7 3.9 5 5l1.3-2 4.6 2.3-.8 3.1c-.2.7-.8 1.1-1.5 1.1C8.1 19.8 2.2 13.9 2.2 6.9c0-.7.4-1.3 1.1-1.5l2.9-1Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
    mail: (
      <svg {...commonProps}>
        <path d="M3 5.5h16v11H3v-11Z" stroke="currentColor" strokeWidth="2" />
        <path
          d="m4 6.5 7 5 7-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    pin: (
      <svg {...commonProps}>
        <path
          d="M17 9.5c0 4.5-6 9.5-6 9.5s-6-5-6-9.5a6 6 0 1 1 12 0Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="11" cy="9.5" r="2" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  };

  return icons[type];
};

const ContactFooter = () => {
  return (
    <footer className="contact-footer">
      <section className="contact-reach" aria-labelledby="contact-reach-title">
        <div className="contact-reach__inner">
          <header className="contact-reach__header">
            <h2 id="contact-reach-title">How to Reach Us?</h2>
            <p>
              From data infrastructure to custom AI systems, Orion empowers
              organizations with secure, intelligent, and future-ready
              solutions.
            </p>
          </header>

          <div className="contact-reach__cards">
            {reachCards.map((card) => (
              <article className="contact-reach-card" key={card.label}>
                <ReachIcon type={card.icon} />
                <p>{card.label}</p>
                <strong>{card.value}</strong>
              </article>
            ))}

            <article className="contact-reach-card">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="8"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M3 11h16M11 3c2 2.2 3 4.9 3 8s-1 5.8-3 8M11 3c-2 2.2-3 4.9-3 8s1 5.8 3 8"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
              <p>Follow Us</p>
              <div
                className="contact-reach-card__socials"
                aria-label="Social links"
              >
                <a href="https://www.facebook.com" aria-label="Facebook">
                  f
                </a>
                <a href="https://www.instagram.com" aria-label="Instagram">
                  <span />
                </a>
                <a href="https://x.com" aria-label="X">
                  X
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="footer-panel">
        <img
          className="footer-panel__mark"
          src="/Frame.svg"
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
          >
            <img
              src="/Group.svg"
              alt="Orion Data Studio"
              loading="lazy"
              width="200"
              height="40"
            />
          </NavLink>

          <nav
            className="footer-panel__nav"
            aria-label="Contact footer navigation"
          >
            {footerLinks.map((link) => (
              <NavLink key={link.label} to={link.to}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="footer-panel__meta">
            <p>©2026 All Rights Reserved</p>

            <div className="footer-panel__socials" aria-label="Social links">
              <a href="https://www.facebook.com" aria-label="Facebook">
                f
              </a>
              <a href="https://www.instagram.com" aria-label="Instagram">
                <span className="footer-panel__instagram" />
              </a>
              <a href="https://x.com" aria-label="X">
                X
              </a>
            </div>

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

export default ContactFooter;
