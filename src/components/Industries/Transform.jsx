const sectors = [
  {
    id: "aviation",
    label: "Aviation & Airlines",
    color: "#2563eb",
    bg: "rgba(37,99,235,0.1)",
    description:
      "Crew operations, performance analytics, operational intelligence, compliance reporting, and workforce optimization.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M21 16v-2l-8-5V3.5A1.5 1.5 0 0 0 11.5 2a1.5 1.5 0 0 0-1.5 1.5V9L2 14v2l9-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L14 19v-5.5L21 16Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "retail",
    label: "Retail & E-Commerce",
    color: "#16a34a",
    bg: "rgba(22,163,74,0.1)",
    description:
      "Customer analytics, supply chain intelligence, inventory forecasting, and AI-powered retail insights.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <line
          x1="3"
          y1="6"
          x2="21"
          y2="6"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M16 10a4 4 0 0 1-8 0"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "healthcare",
    label: "Healthcare",
    color: "#0891b2",
    bg: "rgba(8,145,178,0.1)",
    description:
      "Clinical analytics, operational reporting, patient intelligence, and secure healthcare data platforms.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M12 8v8M8 12h8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "financial",
    label: "Financial Services",
    color: "#6d28d9",
    bg: "rgba(109,40,217,0.1)",
    description:
      "Fraud detection, risk analytics, compliance monitoring, and real-time financial intelligence.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "logistics",
    label: "Logistics & Transportation",
    color: "#374151",
    bg: "rgba(55,65,81,0.1)",
    description:
      "Fleet analytics, operational monitoring, route optimization, and predictive maintenance insights.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="1"
          y="10"
          width="15"
          height="10"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M16 13h4l3 4v3h-7V13Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle
          cx="5.5"
          cy="20.5"
          r="1.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle
          cx="18.5"
          cy="20.5"
          r="1.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M1 14h15" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: "enterprise",
    label: "Enterprise & SaaS Platforms",
    color: "#e85e25",
    bg: "rgba(232,94,37,0.1)",
    description:
      "Custom AI data platforms, enterprise data warehouses, automation pipelines, and scalable analytics architectures.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M19.07 4.93l-2.12 2.12M7.05 16.95l-2.12 2.12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const Transform = () => {
  return (
    <section className="industries-transform">
      <div className="industries-transform__inner">
        <header className="industries-transform__header">
          <h2>Sectors We Transform</h2>
          <p>
            We work across the leading cloud and AI ecosystems to build the
            right solution for your environment.
          </p>
        </header>

        <div className="industries-transform__grid">
          {sectors.map((sector) => (
            <article className="industries-transform__card" key={sector.id}>
              <div
                className="industries-transform__icon"
                style={{ background: sector.bg, color: sector.color }}
              >
                {sector.icon}
              </div>
              <h3 style={{ color: sector.color }}>{sector.label}</h3>
              <p>{sector.description}</p>
              <span
                className="industries-transform__bar"
                style={{ background: sector.color }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transform;
