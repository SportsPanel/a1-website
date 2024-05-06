import AboutUs from "../AboutUs";
import Blog from "../Blog";
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
      <Blog />
    </div>
  );
};

export default Home;
