const visionCards = [
  {
    title: 'Vision Statement',
    copy: 'Orion envisions a future where data-driven insights drive business success, with a mission to provide cutting-edge AI solutions that are flexible, scalable, and impactful.',
  },
  {
    title: 'Industry Transformation',
    copy: 'Our mission includes advancing technology to deliver AI solutions that empower organizations, with a focus on sustainability and ethical practices.',
  },
  {
    title: 'Evolution of Orion',
    copy: 'Aligning business strategies with innovative AI solutions ensures our clients achieve their goals, reflecting Orion’s commitment to excellence and customer success.',
  },
]

const Vision = () => {
  return (
    <section className="vision-section">
      <div className="vision-section__inner">
        <div className="vision-section__header">
          <h2>Vision and Mission</h2>
          <p>
            From data infrastructure to custom AI systems, Orion empowers organizations with
            secure, intelligent, and future-ready solutions.
          </p>
        </div>

        <div className="vision-section__cards">
          {visionCards.map((card) => (
            <article className="vision-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Vision
