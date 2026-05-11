const journeyStages = [
  {
    number: "1",
    title: "Reactive Reporting",
    question: "What Happened?",
    copy: "Understand historical data through standard reports and dashboards.",
    capabilities: ["Standard Reports", "Dashboards", "KPI Monitoring", "Data Aggregation"],
    label: "Human Driven",
    accent: "#5b2fc8",
    icon: "report",
  },
  {
    number: "2",
    title: "Diagnostic Analytics",
    question: "Why Did It Happen?",
    copy: "Identify patterns and root causes using advanced analytics.",
    capabilities: ["Drill-Down Analytics", "Ad-hoc Analysis", "Data Visualization", "Correlation Analysis"],
    label: "Insight Driven",
    accent: "#0b6bdc",
    icon: "search",
  },
  {
    number: "3",
    title: "Predictive Analytics",
    question: "What Will Happen?",
    copy: "Forecast future outcomes using machine learning and statistical models.",
    capabilities: ["ML Forecasting", "Predictive Modeling", "Time Series Analysis", "What-if Scenarios"],
    label: "Prediction Driven",
    accent: "#078b88",
    icon: "trend",
  },
  {
    number: "4",
    title: "Prescriptive Analytics",
    question: "What Should We Do?",
    copy: "Recommend optimal actions based on simulations, constraints and objectives.",
    capabilities: ["Optimization Models", "Recommendation Engines", "Simulation & Scenarios", "Decision Support"],
    label: "Recommendation Driven",
    accent: "#278b1f",
    icon: "signpost",
  },
  {
    number: "5",
    title: "Autonomous Automation",
    question: "What Can Be Automated?",
    copy: "Automate processes and decisions using AI agents and workflows.",
    capabilities: ["Intelligent Automation", "AI Agents", "Workflow Orchestration", "Event-Driven Actions"],
    label: "Automation Driven",
    accent: "#ff5b16",
    icon: "gear",
  },
  {
    number: "6",
    title: "Autonomous Decisioning",
    question: "What's the Best Outcome?",
    copy: "AI continuously learns, plans, and makes decisions to achieve the best outcomes.",
    capabilities: ["Multi-Agent Systems", "Reinforcement Learning", "Continuous Learning", "Autonomous Optimization"],
    label: "Autonomous Driven",
    accent: "#4423a8",
    icon: "brain",
  },
];

const StageIcon = ({ type }) => {
  const commonProps = {
    width: "46",
    height: "46",
    viewBox: "0 0 46 46",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
  };

  const icons = {
    report: (
      <svg {...commonProps}>
        <path d="M12 8h16l6 6v24H12V8Z" stroke="currentColor" strokeWidth="2" />
        <path d="M28 8v7h6" stroke="currentColor" strokeWidth="2" />
        <path d="M17 30v-5M22 30v-9M27 30v-13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M17 22l5-3 4 2 4-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="33" cy="34" r="5" fill="currentColor" opacity=".16" />
        <path d="M31 34h4M33 32v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    search: (
      <svg {...commonProps}>
        <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="2" />
        <path d="m29 29 9 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M14 26v-4M20 26v-8M26 26V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="m14 20 5-3 4 2 5-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    trend: (
      <svg {...commonProps}>
        <path d="M10 36h28M13 10v26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="m16 29 8-8 6 5 9-13" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M33 13h6v6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    signpost: (
      <svg {...commonProps}>
        <path d="M23 8v31" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M15 13h18l4 4-4 4H15v-8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M31 25H13l-4 4 4 4h18v-8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
    gear: (
      <svg {...commonProps}>
        <circle cx="23" cy="23" r="6" stroke="currentColor" strokeWidth="2" />
        <path d="M23 8v6M23 32v6M8 23h6M32 23h6M12.4 12.4l4.2 4.2M29.4 29.4l4.2 4.2M33.6 12.4l-4.2 4.2M16.6 29.4l-4.2 4.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="38" cy="17" r="2" fill="currentColor" />
        <circle cx="37" cy="29" r="2" fill="currentColor" />
        <path d="M29 20h7M29 26h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    brain: (
      <svg {...commonProps}>
        <path d="M18 10c-4 0-7 3-7 7 0 1 .2 2 .6 2.8A8 8 0 0 0 10 25c0 4.4 3.6 8 8 8h1V10h-1ZM28 10c4 0 7 3 7 7 0 1-.2 2-.6 2.8A8 8 0 0 1 36 25c0 4.4-3.6 8-8 8h-1V10h1Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M15 18h4M15 26h4M27 18h4M27 26h4M19 22h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="15" cy="18" r="2" fill="currentColor" />
        <circle cx="31" cy="18" r="2" fill="currentColor" />
        <circle cx="15" cy="26" r="2" fill="currentColor" />
        <circle cx="31" cy="26" r="2" fill="currentColor" />
      </svg>
    ),
  };

  return icons[type];
};

const Journey = () => {
  return (
    <section className="ai-journey">
      <div className="ai-journey__inner">
        <header className="ai-journey__header">
          <h2>Your AI Journey</h2>
          <p>Six progressive stages from descriptive reporting to fully autonomous intelligent systems</p>
        </header>

        <div className="ai-journey__cards" aria-label="Six stages of AI maturity">
          {journeyStages.map((stage) => (
            <article className="ai-stage-card" style={{ "--stage-accent": stage.accent }} key={stage.number}>
              <span className="ai-stage-card__number">{stage.number}</span>
              <h3>{stage.title}</h3>
              <p className="ai-stage-card__question">{stage.question}</p>
              <div className="ai-stage-card__icon">
                <StageIcon type={stage.icon} />
              </div>
              <p className="ai-stage-card__copy">{stage.copy}</p>

              <div className="ai-stage-card__capabilities">
                <h4>Capabilities</h4>
                <ul>
                  {stage.capabilities.map((capability) => (
                    <li key={capability}>{capability}</li>
                  ))}
                </ul>
              </div>

              <span className="ai-stage-card__label">{stage.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
