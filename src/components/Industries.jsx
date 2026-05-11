import Banner from "./Home/Banner";
import Serve from "./Industries/Serve";
import Transform from "./Industries/Transform";
import industriesImage from "../assets/Banner/Industries.png";

const Industries = () => {
  return (
    <main>
      <Banner
        title={
          <>
            Industries<span>We Serve</span>
          </>
        }
        subtitle="Empowering healthcare, finance, manufacturing, and more with AI-driven solutions."
        image={industriesImage}
      />
      <Serve />
      <Transform />
    </main>
  );
};

export default Industries;
