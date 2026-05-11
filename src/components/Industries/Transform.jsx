import transformImage from "../../assets/Industries/Image2.png";

const Transform = () => {
  return (
    <section className="industries-transform">
      <div className="industries-transform__inner">
        <header className="industries-transform__header">
          <h2>Sectors We Transform</h2>
          <p>
            We work across the leading cloud and AI ecosystems to build the right solution for
            your environment.
          </p>
        </header>

        <img
          className="industries-transform__image"
          src={transformImage}
          alt="Sectors transformed by Orion including aviation, retail, healthcare, finance, logistics, and enterprise platforms"
        />
      </div>
    </section>
  );
};

export default Transform;
