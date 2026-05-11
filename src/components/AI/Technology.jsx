import technologyImage from "../../assets/AI/Technology/Image1.png";

const Technology = () => {
  return (
    <section className="ai-technology">
      <div className="ai-technology__inner">
        <header className="ai-technology__header">
          <h2>
            AI Technologies
            <br />
            & Platforms
          </h2>
          <p>
            We work across the leading cloud and AI ecosystems to build the right solution for
            your environment.
          </p>
        </header>

        <img
          className="ai-technology__image"
          src={technologyImage}
          alt="AI technologies and platforms across Microsoft, Google Cloud, AWS, model providers, and AI capability enablers"
        />
      </div>
    </section>
  );
};

export default Technology;
