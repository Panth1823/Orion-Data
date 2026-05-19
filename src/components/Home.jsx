import bannerImage from "../assets/Banner/Home_banner.png";
import Banner from "./Home/Banner";
import Custom from "./Home/Custom";
import Intro from "./Home/Intro";
import Partner from "./Home/Partner";
import Roadmap from "./Home/Roadmap";

import Success from "./Home/Success";
import Unique from "./Home/Unique";
import Vision from "./Home/Vision";

const Home = () => {
  return (
    <main>
      <Banner
        title={
          <>
            Building the Future of<span>AI Data Platforms.</span>
          </>
        }
        subtitle="From data infrastructure to custom AI systems, Orion empowers organizations with secure, intelligent, and future-ready solutions."
        image={bannerImage}
        buttonHref="#intro"
      />
      <Intro />
      <Vision />
      <Unique />
      <Custom />
      <Success />
      <Partner />
      <Roadmap />
    </main>
  );
};

export default Home;
