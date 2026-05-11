const outcomes = [
  {
    title: (
      <>
        Faster Insights
        <br />
        & Better Decisions
      </>
    ),
    icon: "sparkline",
  },
  {
    title: (
      <>
        Increased Efficiency
        <br />
        & Automation
      </>
    ),
    icon: "bulb",
  },
  {
    title: "Cost Optimization",
    icon: "target",
  },
  {
    title: (
      <>
        Improved Customer
        <br />
        Experience
      </>
    ),
    icon: "customer",
  },
  {
    title: (
      <>
        Revenue Growth
        <br />
        & Innovation
      </>
    ),
    icon: "growth",
  },
  {
    title: (
      <>
        Competitive Advantage
        <br />
        & Future Ready
      </>
    ),
    icon: "window",
  },
];

const OutcomeIcon = ({ type }) => {
  const commonProps = {
    width: "42",
    height: "42",
    viewBox: "0 0 42 42",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
  };

  const icons = {
    sparkline: (
      <svg {...commonProps}>
        <path d="m8 28 8-9 6 5 11-13" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="8" cy="28" r="3" fill="currentColor" />
        <circle cx="16" cy="19" r="3" fill="currentColor" />
        <circle cx="22" cy="24" r="3" fill="currentColor" />
        <circle cx="33" cy="11" r="3" fill="currentColor" />
        <path d="M10 10v5M7.5 12.5h5M23 6v6M20 9h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    bulb: (
      <svg {...commonProps}>
        <path d="M14 31h14M16 36h10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M29 17c0-5-3.5-9-8-9s-8 4-8 9c0 3.2 1.7 5.5 4 7v4h8v-4c2.3-1.5 4-3.8 4-7Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        <path d="M31 25h6M35 21v8M29 31h8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
    target: (
      <svg {...commonProps}>
        <circle cx="20" cy="22" r="13" stroke="currentColor" strokeWidth="3" />
        <circle cx="20" cy="22" r="7" stroke="currentColor" strokeWidth="3" />
        <circle cx="20" cy="22" r="2.5" fill="currentColor" />
        <path d="m27 15 7-7M34 8v6M34 8h-6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    customer: (
      <svg {...commonProps}>
        <circle cx="17" cy="14" r="4" stroke="currentColor" strokeWidth="3" />
        <path d="M8 31c1-5 4.5-8 9-8 3 0 5.4 1.2 7 3.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M31 22v10M26 27h10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="m32 12 1.8 3.8 4.2.6-3 2.9.7 4.1-3.7-2-3.7 2 .7-4.1-3-2.9 4.2-.6L32 12Z" fill="currentColor" />
      </svg>
    ),
    growth: (
      <svg {...commonProps}>
        <path d="M8 34V20M18 34V14M28 34V8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="m8 16 8-8 7 7 10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M28 5h5v5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    window: (
      <svg {...commonProps}>
        <path d="M7 9h28v26H7V9Z" stroke="currentColor" strokeWidth="3" />
        <path d="M7 16h28M16 5v8M28 5v8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="m16 24 5 4-5 4M25 24l5 4-5 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  };

  return icons[type];
};

const Outcomes = () => {
  return (
    <section className="ai-outcomes">
      <div className="ai-outcomes__inner">
        <header className="ai-outcomes__header">
          <h2>AI-Driven Business Outcomes</h2>
          <p>
            From data infrastructure to custom AI systems, Orion empowers organizations with secure,
            intelligent, and future-ready solutions.
          </p>
        </header>

        <div className="ai-outcomes__cards">
          {outcomes.map((outcome) => (
            <article className="ai-outcome-card" key={outcome.icon}>
              <OutcomeIcon type={outcome.icon} />
              <h3>{outcome.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Outcomes;
