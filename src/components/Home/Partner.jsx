import partnerImage from '../../assets/Partner/Image1.png'

const partnerItems = [
  {
    title: 'Tech Collaborations',
    copy: 'Strategic partnerships with tech companies lead to shared innovation and the expansion of AI applications across industries.',
    active: true,
  },
  {
    title: 'Research Collaborations',
    copy: 'Joint ventures with research institutions allow Orion to remain at the forefront of AI advancements and knowledge.',
  },
  {
    title: 'Community Initiatives',
    copy: 'Community initiatives ensure that Orion’s expertise and technologies benefit societal and economic development.',
  },
]

const Partner = () => {
  return (
    <section className="partner-section">
      <div className="partner-section__inner">
        <div className="partner-section__content">
          <header className="partner-section__header">
            <h2>Partnership Opportunities</h2>
            <p>
              From data infrastructure to custom AI systems, Orion empowers organizations with secure, intelligent, and future-ready solutions.
            </p>
          </header>

          <div className="partner-list">
            {partnerItems.map((item) => (
              <article className={`partner-item ${item.active ? 'partner-item--active' : ''}`} key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>

        <img className="partner-section__image" src={partnerImage} alt="Human and robotic hand partnership" />
      </div>
    </section>
  )
}

export default Partner
