const journeyStages = [
  {
    title: "Reactive Reporting",
    label: "Human Driven",
    capabilities: [
      "Historical dashboards & reports",
      "KPI tracking and scorecards",
      "Data visualization & BI tools",
      "Manual data aggregation"
    ],
    icon: "chart"
  },
  {
    title: "Diagnostic Analytics",
    label: "Insight Driven",
    capabilities: [
      "Root cause analysis",
      "Anomaly detection",
      "Drill-down exploration",
      "Correlation analysis"
    ],
    icon: "search"
  },
  {
    title: "Predictive Analytics",
    label: "Prediction Driven",
    capabilities: [
      "Forecasting models",
      "Trend prediction",
      "Risk assessment",
      "Scenario planning"
    ],
    icon: "trend"
  },
  {
    title: "Prescriptive Analytics",
    label: "Recommendation Driven",
    capabilities: [
      "Optimization algorithms",
      "Action recommendations",
      "Resource allocation",
      "Decision automation"
    ],
    icon: "target"
  },
  {
    title: "Autonomous Automation",
    label: "Automation Driven",
    capabilities: [
      "Intelligent process automation",
      "Self-learning systems",
      "Workflow orchestration",
      "Event-driven actions"
    ],
    icon: "zap"
  },
  {
    title: "Autonomous Decisioning",
    label: "Autonomous Driven",
    capabilities: [
      "Multi-agent systems",
      "Reinforcement learning",
      "Continuous adaptation",
      "Goal optimization"
    ],
    icon: "brain"
  }
];

const CardIcon = ({ type }) => {
  const icons = {
    chart: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="10" width="4" height="11" rx="1" fill="currentColor"/>
        <rect x="10" y="6" width="4" height="15" rx="1" fill="currentColor"/>
        <rect x="17" y="3" width="4" height="18" rx="1" fill="currentColor"/>
      </svg>
    ),
    search: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 16L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    trend: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 17L9 11L13 15L21 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 7H21V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    target: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="12" r="2" fill="currentColor"/>
      </svg>
    ),
    zap: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 2L4 14H11L10 22L20 10H13L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
    brain: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5 4C6.5 4 4 6.5 4 9.5C4 10.5 4.2 11.5 4.7 12.3C4.2 13 4 14 4 15C4 18 6.5 20.5 9.5 20.5H10.5V4H9.5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M14.5 4C17.5 4 20 6.5 20 9.5C20 10.5 19.8 11.5 19.3 12.3C19.8 13 20 14 20 15C20 18 17.5 20.5 14.5 20.5H13.5V4H14.5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <circle cx="9.5" cy="10" r="1.5" fill="currentColor"/>
        <circle cx="14.5" cy="10" r="1.5" fill="currentColor"/>
        <circle cx="9.5" cy="15" r="1.5" fill="currentColor"/>
        <circle cx="14.5" cy="15" r="1.5" fill="currentColor"/>
      </svg>
    )
  };
  return icons[type] || icons.chart;
};

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="8" fill="#e8f5e9"/>
    <path d="M4 8L7 11L12 5" stroke="#4caf50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Journey = () => {
  return (
    <section className="ai-journey" id="journey">
      <div className="ai-journey__inner">
        <header className="ai-journey__header">
          <h2>Your AI Journey</h2>
          <p>Six progressive stages from descriptive reporting to fully autonomous intelligent systems</p>
        </header>

        <div className="ai-journey__cards" aria-label="Six stages of AI maturity">
          {journeyStages.map((stage, index) => (
            <article className="ai-stage-card-v2" key={index}>
              <div className="ai-stage-card-v2__icon">
                <CardIcon type={stage.icon} />
              </div>
              <span className="ai-stage-card-v2__label">{stage.label}</span>
              <h3 className="ai-stage-card-v2__title">{stage.title}</h3>
              <ul className="ai-stage-card-v2__capabilities">
                {stage.capabilities.map((capability, capIndex) => (
                  <li key={capIndex}>
                    <CheckIcon />
                    <span>{capability}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
