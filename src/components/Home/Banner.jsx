const Banner = ({
  title,
  subtitle,
  image,
  buttonText = "Get Started",
  buttonHref = "#get-started",
}) => {
  return (
    <section className="home-banner">
      <div className="home-banner__content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <a className="home-banner__button" href={buttonHref}>
          {buttonText}
        </a>
      </div>

      <img
        className="home-banner__visual"
        src={image}
        alt={title}
        loading="eager"
        width="800"
        height="600"
      />
    </section>
  );
};

export default Banner;
