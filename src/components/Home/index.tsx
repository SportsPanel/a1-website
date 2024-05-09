import React from "react";
import Banner from "../Banner";

const Home: React.FC<any> = () => {
  return (
    <section id="home">
      <div className="w-full flex flex-col bg-black h-screen bg-[url(./assets/images/bg-image.png)]">
        <div className="overflow-hidden w-full">
          <div className="whitespace-nowrap animate-slideRight">
            <Banner />
          </div>
        </div>
        <div className="flex flex-col items-center mt-20">
          <p className="text-primary font-light text-5xl flex flex-row text-center">
            We are{" "}
            <p className="text-heading font-semibold text-5xl ml-3">Bharat's</p>
          </p>
          <p className="text-primary font-light text-5xl text-center">
            SPORTS INVESTMENT PLATFORM
          </p>
          <div className="flex flex-row mt-6 items-center">
            <div className="flex w-36 h-12 border-[1px] rounded-lg border-white justify-center items-center mr-5">
              <p className="text-white font-semibold text-lg">About Us</p>
            </div>
            <p className="text-white font-semibold text-lg">How it works</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
