import React from "react";

const Content: React.FC<any> = () => {
  return (
    <section id="content">
      <div className="flex flex-col h-auto bg-white items-center -mt-32 pb-20 bg-[url(./assets/images/content-bg.png)]">
        <div className="flex flex-col items-center">
          <div className="flex flex-row">
            <p className="text-black font-light text-5xl mr-3">Why</p>
            <p className="text-black font-semibold text-5xl">A1 Sports</p>
          </div>
          <p className="w-full text-black font-light text-base text-center mt-5 sm:w-2/3">
            A1 Sports transforms fan engagement, offering a unique trading
            platform for investing in athletes. Empowering informed decisions,
            it supports grassroots talent, shaping the future of sports.
          </p>
        </div>
        <div className="flex flex-col mt-10 md:flex-row">
          <div className="flex flex-col items-center justify-evenly">
            <p className="text-primary font-semibold text-4xl md:text-7xl">
              Investment
            </p>
            <p className="text-black font-light text-base text-center">
              We are offering users to buy and sell shares of listed athletes on
              our platform. Growth of the shares depends on 3Ps -
              Performance,Partnership and Presence.
            </p>
          </div>
          <div className="h-auto border-[1px] border-gray my-5 md:mx-5"></div>
          <div className="flex flex-col">
            <div className="flex flex-col mb-5">
              <p className="text-primary font-semibold text-2xl mb-2 md:text-4xl md:self-start self-center">
                IPO
              </p>
              <p className="text-black font-light text-base text-left">
                Athlete’s shares will be launched as Initial Public Offering on
                specific dates which will be announced prior to the dates.
              </p>
            </div>
            <div className="border-gray border-[1px] mb-5"></div>
            <div className="flex flex-col">
              <p className="text-primary font-semibold text-2xl mb-2 md:text-4xl md:self-start self-center">
                Experts Talk
              </p>
              <p className="text-black font-light text-base text-left">
                Sports experts will share their view on player’s performance and
                help fans to take decision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
