import image1 from '../../assets/Custom/Image1.png'
import image2 from '../../assets/Custom/Image2.png'
import image3 from '../../assets/Custom/Image3.png'

const customCards = [
  {
    image: image1,
    title: 'AI Platform Spectrum',
    copy: 'Our platforms cover a broad spectrum, from natural language processing to advanced predictive analytics, allowing for comprehensive data insights.',
  },
  {
    image: image2,
    title: 'Scalability and Flexibility',
    copy: 'Our platforms cover a broad spectrum, from natural language processing to advanced predictive analytics, allowing for comprehensive data insights.',
  },
  {
    image: image3,
    title: 'Secure and Robust Solutions',
    copy: 'Security and data integrity are at the core of our platform offerings, ensuring robust solutions that clients can trust.',
  },
]

const Custom = () => {
  return (
    <section className="custom-section">
      <div className="custom-section__inner">
        <div className="custom-section__header">
          <h2>
            Range of Custom AI Data
            <br />
            Platforms
          </h2>
          <p>
            From data infrastructure to custom AI systems, Orion empowers organizations with
            <br />
            secure, intelligent, and future-ready solutions.
          </p>
        </div>

        <div className="custom-section__cards">
          {customCards.map((card) => (
            <article className="custom-card" key={card.title}>
              <img src={card.image} alt="" className="custom-card__image" />
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Custom
