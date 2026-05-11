import Banner from "./Home/Banner";
import industriesImage from "../assets/Banner/Home_banner.png";

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
    </main>
  );
};

export default Industries;
