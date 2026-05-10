const sessionCards = [
  {
    title: 'Stakeholder Dialogue',
    copy: 'Open dialogue session where stakeholders can pose questions, reflecting Orion’s commitment to transparency and client engagement.',
  },
  {
    title: 'Common Queries Answered',
    copy: 'Answering common queries about platform capabilities, customization options, and future developments.',
  },
  {
    title: 'Feedback and Insights',
    copy: 'Feedback session to gather insights from clients and partners, fostering continuous improvement and engagement.',
  },
]

const Session = () => {
  return (
    <section className="session-section">
      <div className="session-section__inner">
        <header className="session-section__header">
          <h2>Q&amp;A Session</h2>
          <p>
            From data infrastructure to custom AI systems, Orion empowers organizations with
            secure, intelligent, and future-ready solutions.
          </p>
        </header>

        <div className="session-section__cards">
          {sessionCards.map((card) => (
            <article className="session-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Session
