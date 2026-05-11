import Banner from "./Home/Banner";
import Journey from "./AI/Journey";
import Outcomes from "./AI/Outcomes";
import Technology from "./AI/Technology";
import Systems from "./AI/Systems";
import aiImage from "../assets/Banner/AI.png";

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
      <Journey />
      <Outcomes />
      <Technology />
      <Systems />
    </main>
  );
};

export default AI;
