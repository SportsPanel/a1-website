import React from "react";

const AboutUs: React.FC<any> = () => {
  return (
    <section id="home">
      <div className="flex bg-black h-screen bg-[url(./assets/images/bg-image.png)] justify-center">
        <div className="flex flex-col items-center mt-20">
          <p className="text-primary font-light text-5xl flex flex-row">
            We are A1 Sports
          </p>
          <p className="text-primary font-light text-5xl">
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

export default AboutUs;
