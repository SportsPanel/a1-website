import AboutUs from "../AboutUs";
import Content from "../Content";
import Explore from "../Explore";
import FAQ from "../FAQ";

const Home: React.FC<any> = () => {
  return (
    <div>
      <AboutUs />
      <Explore />
      <Content />
      <FAQ />
    </div>
  );
};

export default Home;
