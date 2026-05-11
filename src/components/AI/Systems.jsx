const systemCards = [
  {
    title: "Data Engineering",
    copy: "High quality, governed, and AI-ready data pipelines",
  },
  {
    title: "Model Development",
    copy: "Train, evaluate, and fine-tune models for real-world impact",
  },
  {
    title: "Responsible AI",
    copy: "Fairness, explainability, privacy, safety, and governance",
  },
  {
    title: "MLOps",
    copy: "CI/CD for ML, monitoring, drift detection, and model lifecycle",
  },
];

const Systems = () => {
  return (
    <section className="ai-systems">
      <div className="ai-systems__inner">
        <header className="ai-systems__header">
          <h2>
            Building
            <br />
            Responsible
            <br />
            & Scalable AI
            <br />
            Systems
          </h2>
          <p>
            Our AI delivery framework combines engineering excellence, governance, MLOps, and
            responsible AI principles to create secure and scalable enterprise solutions.
          </p>
        </header>

        <div className="ai-systems__grid">
          {systemCards.map((card) => (
            <article className="ai-system-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
            </article>
          ))}

          <article className="ai-system-card ai-system-card--dark">
            <h3>
              Security &
              <br />
              Governance
            </h3>
            <p>End-to-end security, access control, and compliance</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Systems;
