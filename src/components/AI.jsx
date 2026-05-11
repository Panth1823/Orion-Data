import Banner from "./Home/Banner";
import aiImage from "../assets/Banner/Home_banner.png";

const AI = () => {
  return (
    <main>
      <Banner
        title={
          <>
            AI Capabilities<span>AI We Deliver</span>
          </>
        }
        subtitle="From custom AI systems to intelligent automation, Orion delivers cutting-edge solutions."
        image={aiImage}
      />
    </main>
  );
};

export default AI;
