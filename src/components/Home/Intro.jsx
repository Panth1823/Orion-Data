import introImage from "../../assets/Intro/Image1.png";

const introCards = [
  {
    className: "intro-card--wide",
    title: "Industry Transformation",
    copy: "Orion Data Studio is transforming industries by offering tailored AI solutions that enhance data-driven decision-making, enabling businesses to thrive in a digital era.",
  },
  {
    title: "Evolution of Orion",
    copy: "The evolution of Orion Data Studio from its inception to a leading AI platform provider signifies its commitment to innovation and excellence in data solutions.",
  },
  {
    title: "Key Achievements",
    copy: "Key achievements include groundbreaking innovations and partnerships that have propelled Orion Data Studio into the forefront of AI and data analytics.",
  },
];

const Intro = () => {
  return (
    <section className="intro-section">
      <div className="intro-section__inner">
        <div className="intro-section__header">
          <h2>Introduction to Orion Data Studio</h2>
          <p>
            From data infrastructure to custom AI systems, Orion empowers
            organizations with secure, intelligent, and future-ready solutions.
          </p>
        </div>

        <div className="intro-section__body">
          <div className="intro-section__cards">
            {introCards.map((card) => (
              <article
                className={`intro-card ${card.className || ""}`}
                key={card.title}
              >
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
              </article>
            ))}
          </div>

          <img
            className="intro-section__image"
            src={introImage}
            alt="AI coding assistant interface"
            loading="lazy"
            width="600"
            height="800"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
