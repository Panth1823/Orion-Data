const benefits = [
  {
    title: "Scalable",
    copy: "Faster Insights & Better Decisions",
  },
  {
    title: "High Availability",
    copy: "Built-in redundancy & fault tolerance",
  },
  {
    title: "Open & Flexible",
    copy: "Open source, extensible & vendor neutral",
  },
  {
    title: "Cost Efficient",
    copy: "Optimised resource utilization",
  },
  {
    title: "Automated",
    copy: "Infrastructure as code & self service",
  },
  {
    title: "Secure",
    copy: "Enterprise grade security & compliance",
  },
];

const Benefits = () => {
  return (
    <section className="platform-benefits">
      <div className="platform-benefits__inner">
        <header className="platform-benefits__header">
          <h2>Platform Benefits</h2>
          <p>
            From data infrastructure to custom AI systems, Orion empowers organizations with secure,
            intelligent, and future-ready solutions.
          </p>
        </header>

        <div className="platform-benefits__cards">
          {benefits.map((benefit) => (
            <article className="platform-benefit-card" key={benefit.title}>
              <span className="platform-benefit-card__icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="9" cy="9" r="6.5" stroke="currentColor" />
                  <path d="m6 9 2 2 4-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <h3>{benefit.title}</h3>
              <p>{benefit.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
