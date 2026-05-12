import { useState } from "react";

const Form = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateField = (name, value) => {
    switch (name) {
      case "firstName":
        return value.trim().length < 2
          ? "First name must be at least 2 characters"
          : "";
      case "lastName":
        return value.trim().length < 2
          ? "Last name must be at least 2 characters"
          : "";
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value)
          ? "Please enter a valid email address"
          : "";
      case "phone":
        const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
        return !phoneRegex.test(value.replace(/\s/g, ""))
          ? "Please enter a valid phone number"
          : "";
      default:
        return "";
    }
  };

  const validateForm = () => {
    const newErrors = {};
    ["firstName", "lastName", "email", "phone"].forEach((field) => {
      const error = validateField(field, values[field]);
      if (error) newErrors[field] = error;
    });
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mark all fields as touched
    const allTouched = Object.keys(values).reduce(
      (acc, key) => ({ ...acc, [key]: true }),
      {},
    );
    setTouched(allTouched);

    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitStatus("success");
    setValues({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
    setTouched({});
    setErrors({});

    // Clear success message after 5 seconds
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  const getFieldClass = (fieldName) => {
    const baseClass =
      touched[fieldName] && errors[fieldName] ? "has-error" : "";
    return baseClass;
  };

  return (
    <section className="contact-form-section">
      <div className="contact-form-section__inner">
        <header className="contact-form-section__header">
          <h1>
            Let&apos;s Build
            <span>Intelligence Together</span>
          </h1>
          <p>
            From data infrastructure to custom AI systems, Orion empowers
            organizations with secure, intelligent, and future-ready solutions.
          </p>
        </header>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          {submitStatus === "success" && (
            <div className="contact-form__success" role="alert">
              Thank you! Your message has been sent successfully.
            </div>
          )}

          <div className="contact-form__row">
            <label className={getFieldClass("firstName")}>
              <span>First name*</span>
              <input
                type="text"
                name="firstName"
                placeholder="John"
                autoComplete="given-name"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={!!errors.firstName}
                aria-describedby={
                  errors.firstName ? "firstName-error" : undefined
                }
              />
              {touched.firstName && errors.firstName && (
                <span className="error-message" id="firstName-error">
                  {errors.firstName}
                </span>
              )}
            </label>
            <label className={getFieldClass("lastName")}>
              <span>Last name*</span>
              <input
                type="text"
                name="lastName"
                placeholder="Doe"
                autoComplete="family-name"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={!!errors.lastName}
                aria-describedby={
                  errors.lastName ? "lastName-error" : undefined
                }
              />
              {touched.lastName && errors.lastName && (
                <span className="error-message" id="lastName-error">
                  {errors.lastName}
                </span>
              )}
            </label>
          </div>

          <label className={getFieldClass("email")}>
            <span>Email address*</span>
            <input
              type="email"
              name="email"
              placeholder="you@company.com"
              autoComplete="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {touched.email && errors.email && (
              <span className="error-message" id="email-error">
                {errors.email}
              </span>
            )}
          </label>

          <label className={getFieldClass("phone")}>
            <span>Mobile number*</span>
            <input
              type="tel"
              name="phone"
              placeholder="123-456-7890"
              autoComplete="tel"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            {touched.phone && errors.phone && (
              <span className="error-message" id="phone-error">
                {errors.phone}
              </span>
            )}
          </label>

          <label>
            <span>Message</span>
            <textarea
              name="message"
              placeholder="Type here"
              rows="4"
              value={values.message}
              onChange={handleChange}
            />
          </label>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
