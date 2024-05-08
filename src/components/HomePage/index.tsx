import Home from "../Home";
import Blog from "../Blog";
import Content from "../Content";
import Explore from "../Explore";
import FAQ from "../FAQ";

const HomePage: React.FC<any> = () => {
  return (
    <div>
      <Home />
      <Explore />
      <Content />
      <FAQ />
      <Blog />
    </div>
  );
};

export default HomePage;
