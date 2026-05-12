import fabricImage from "../../assets/AI/Technology/Image3.png";

const Fabric = () => {
  return (
    <section className="platform-fabric">
      <div className="platform-fabric__inner">
        <header className="platform-fabric__header">
          <h2>
            Microsoft Fabric Data Warehouse
            <br />
            Architecture
          </h2>
          <p>Unified SaaS Platform for End-to-End Analytics</p>
        </header>

        <img
          className="platform-fabric__image"
          src={fabricImage}
          alt="Microsoft Fabric data warehouse architecture diagram"
          loading="lazy"
          width="1200"
          height="675"
        />
      </div>
    </section>
  );
};

export default Fabric;
