import image1 from "../../assets/Session/Image1.png";
import image2 from "../../assets/Session/Image2.png";
import image3 from "../../assets/Session/Image3.png";

const roadmapCards = [
  {
    image: image1,
    title: "Next-Gen Solutions",
    copy: "Orion’s roadmap includes developing next-gen AI solutions, enhancing user interfaces, and expanding into new markets globally.",
  },
  {
    image: image2,
    title: "Sustainable Development",
    copy: "A focus on sustainability drives the development of eco-friendly AI technology as part of Orion’s long-term strategy.",
  },
  {
    image: image3,
    title: "Market Expansion",
    copy: "The exploration of new markets aligns with Orion’s goal to broaden its impact and accessibility globally.",
  },
];

const Roadmap = () => {
  return (
    <section className="roadmap-section">
      <div className="roadmap-section__inner">
        <header className="roadmap-section__header">
          <h2>Future Roadmap</h2>
          <p>
            From data infrastructure to custom AI systems, Orion empowers
            organizations with secure, intelligent, and future-ready solutions.
          </p>
        </header>

        <div className="roadmap-section__cards">
          {roadmapCards.map((card) => (
            <article className="roadmap-card" key={card.title}>
              <img
                className="roadmap-card__image"
                src={card.image}
                alt=""
                loading="lazy"
                width="400"
                height="250"
              />
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
