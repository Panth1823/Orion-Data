import image2 from "../../assets/Success/Image2.png";
import image3 from "../../assets/Success/Image3.png";
import image4 from "../../assets/Success/Image4.png";

const successStories = [
  {
    title: "Tech Collaborations",
    copy: "Success story with a major retailer demonstrates how Orion solutions increased efficiency and reduced costs through predictive analytics.",
  },
  {
    title: "Healthcare Impact",
    copy: "Collaboration with a healthcare provider highlights data-driven diagnostics that improved patient outcomes, showcasing Orion’s impact in health sectors.",
  },
  {
    title: "Financial Services Case",
    copy: "A partnership with a financial corporation led to enhanced fraud detection and prevention, illustrating Orion’s prowess in financial services.",
  },
];

const Success = () => {
  return (
    <section className="success-section">
      <div className="success-section__inner">
        <div className="success-collage" aria-label="AI success story visuals">
          <img
            className="success-collage__image success-collage__image--large"
            src={image2}
            alt=""
            loading="lazy"
            width="600"
            height="400"
          />
          <img
            className="success-collage__image"
            src={image3}
            alt=""
            loading="lazy"
            width="400"
            height="300"
          />
          <img
            className="success-collage__image"
            src={image4}
            alt=""
            loading="lazy"
            width="400"
            height="300"
          />
        </div>

        <article className="success-panel">
          <header className="success-panel__header">
            <h2>
              Success Stories and
              <br />
              Case Studies
            </h2>
            <p>
              From data infrastructure to custom AI systems, Orion empowers
              <br />
              organizations with secure, intelligent, and future-ready
              solutions.
            </p>
          </header>

          <div className="success-panel__stories">
            {successStories.map((story) => (
              <section className="success-story" key={story.title}>
                <h3>{story.title}</h3>
                <p>{story.copy}</p>
              </section>
            ))}
          </div>

          <a
            className="success-panel__link"
            href="/industries#serve"
            aria-label="View more success stories"
          >
            View More
            <span aria-hidden="true">→</span>
          </a>
        </article>
      </div>
    </section>
  );
};

export default Success;
