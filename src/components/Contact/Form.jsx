const Form = () => {
  return (
    <section className="contact-form-section">
      <div className="contact-form-section__inner">
        <header className="contact-form-section__header">
          <h1>
            Let&apos;s Build
            <span>Intelligence Together</span>
          </h1>
          <p>
            From data infrastructure to custom AI systems, Orion empowers organizations with
            secure, intelligent, and future-ready solutions.
          </p>
        </header>

        <form className="contact-form" action="#" method="post">
          <div className="contact-form__row">
            <label>
              <span>First name*</span>
              <input type="text" name="firstName" placeholder="John" autoComplete="given-name" required />
            </label>
            <label>
              <span>Last name*</span>
              <input type="text" name="lastName" placeholder="Doe" autoComplete="family-name" required />
            </label>
          </div>

          <label>
            <span>Email address*</span>
            <input type="email" name="email" placeholder="you@company.com" autoComplete="email" required />
          </label>

          <label>
            <span>Mobile number*</span>
            <input type="tel" name="phone" placeholder="123-456-7890" autoComplete="tel" required />
          </label>

          <label>
            <span>Message</span>
            <textarea name="message" placeholder="Type here" rows="4" />
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Form;
