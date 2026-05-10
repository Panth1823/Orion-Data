const Banner = () => {
  return (
    <section className="home-banner">
      <div className="home-banner__content">
        <h1>
          Building the Future of
          <span>AI Data Platforms.</span>
        </h1>
        <p>
          From data infrastructure to custom AI systems, Orion empowers organizations with
          secure, intelligent, and future-ready solutions.
        </p>
        <a className="home-banner__button" href="#get-started">Get Started</a>
      </div>

      <div className="home-banner__visual" role="img" aria-label="AI data platform analytics visualization" />
    </section>
  )
}

export default Banner
