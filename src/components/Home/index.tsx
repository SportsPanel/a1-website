import React from "react";
import Banner from "../Banner";

const Home: React.FC<any> = () => {
  const scrollToSection = () => {
    const element = document.getElementById("faq");
    if (element)
      element.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  return (
    <section id="home">
      <div className="w-full flex flex-col bg-black h-screen bg-[url(./assets/images/bg-image.png)]">
        <div className="overflow-hidden w-full">
          <div className="whitespace-nowrap animate-slideRight hover:animation-play-state-paused">
            <Banner />
          </div>
        </div>
        <div className="flex flex-col items-center mt-10">
          <p className="text-primary font-light text-4xl flex flex-row text-center mt-4 mb-2">
            From Fan to Investor, Grow With Future Stars
          </p>
          <p className="text-heading font-semibold text-4xl ml-3 mt-4 mb-4">Join Us</p>
          <p className="text-primary font-light text-4xl text-center mt-2 mb-4">
            in revolutionizing sports investment
          </p>
          <div className="flex flex-row mt-6 items-center">
            <div className="flex w-36 h-12 border-[1px] rounded-lg border-white justify-center items-center mr-5 cursor-pointer">
              <p className="text-white font-semibold text-lg ">About Us</p>
            </div>
            <p
              className="text-white font-semibold text-lg cursor-pointer hover:text-gray"
              onClick={scrollToSection}
            >
              How it works
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
