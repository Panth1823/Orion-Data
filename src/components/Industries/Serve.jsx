import serveImage from "../../assets/Industries/Image1.png";

const Serve = () => {
  return (
    <section className="industries-serve">
      <div className="industries-serve__inner">
        <header className="industries-serve__header">
          <h2>Industries We Serve</h2>
          <p>Six progressive stages from descriptive reporting to fully autonomous intelligent systems</p>
        </header>

        <img
          className="industries-serve__image"
          src={serveImage}
          alt="Industry transformation examples for retail, healthcare, financial services, and airline operations"
        />
      </div>
    </section>
  );
};

export default Serve;
