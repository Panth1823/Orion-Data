import stackImage from "../../assets/AI/Technology/Image2.png";

const Stack = () => {
  return (
    <section className="platform-stack">
      <div className="platform-stack__inner">
        <header className="platform-stack__header">
          <h2>OpenStack Platform Architecture</h2>
          <p>Scalable, event-driven infrastructure for modern workloads</p>
        </header>

        <img
          className="platform-stack__image"
          src={stackImage}
          alt="OpenStack platform architecture diagram"
          loading="lazy"
          width="1200"
          height="675"
        />
      </div>
    </section>
  );
};

export default Stack;
