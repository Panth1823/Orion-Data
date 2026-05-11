import Banner from "./Home/Banner";
import platformImage from "../assets/Banner/Home_banner.png";

const Platform = () => {
  return (
    <main>
      <Banner
        title={
          <>
            Modern Infrastructure for<span>AI Driven Enterprises</span>
          </>
        }
        subtitle="Scalable, secure data infrastructure powering the next generation of AI applications."
        image={platformImage}
      />
    </main>
  );
};

export default Platform;
