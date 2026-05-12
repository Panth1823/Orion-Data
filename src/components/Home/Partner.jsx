import { useState, useEffect, useRef, useCallback } from "react";
import partnerImage1 from "../../assets/Partner/Image1.png";

// Dummy images - replace with actual assets when available
const partnerImages = [
  partnerImage1,
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
];

const partnerItems = [
  {
    title: "Tech Collaborations",
    copy: "Strategic partnerships with tech companies lead to shared innovation and the expansion of AI applications across industries.",
  },
  {
    title: "Research Collaborations",
    copy: "Joint ventures with research institutions allow Orion to remain at the forefront of AI advancements and knowledge.",
  },
  {
    title: "Community Initiatives",
    copy: "Community initiatives ensure that Orion's expertise and technologies benefit societal and economic development.",
  },
];

const Partner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef(null);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleIndexChange = useCallback((newIndex) => {
    setActiveIndex(newIndex);
  }, []);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % partnerItems.length);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered]);

  return (
    <section className="partner-section">
      <div className="partner-section__inner">
        <div className="partner-section__content">
          <header className="partner-section__header">
            <h2>Partnership Opportunities</h2>
            <p>
              From data infrastructure to custom AI systems, Orion empowers
              organizations with secure, intelligent, and future-ready
              solutions.
            </p>
          </header>

          <div
            className="partner-list"
            onMouseEnter={() => !isMobile && setIsHovered(true)}
            onMouseLeave={() => !isMobile && setIsHovered(false)}
            onTouchStart={() => isMobile && setIsHovered(true)}
            onTouchEnd={() => isMobile && setIsHovered(false)}
          >
            {partnerItems.map((item, index) => (
              <article
                className={`partner-item ${index === activeIndex ? "partner-item--active" : ""}`}
                key={item.title}
                role="tab"
                tabIndex={0}
                onMouseEnter={() => handleIndexChange(index)}
              >
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>

          {/* Mobile indicators */}
          <div className="partner-section__indicators">
            {partnerItems.map((_, index) => (
              <button
                key={index}
                className={`partner-indicator ${index === activeIndex ? "partner-indicator--active" : ""}`}
                onClick={() => handleIndexChange(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="partner-section__image-wrapper">
          {partnerImages.map((img, index) => (
            <img
              key={index}
              className={`partner-section__image ${index === activeIndex ? "partner-section__image--visible" : ""}`}
              src={img}
              alt={partnerItems[index]?.title || "Partnership"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partner;
