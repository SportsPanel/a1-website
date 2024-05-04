import React from "react";

const Content: React.FC<any> = () => {
  return (
    <section id="content">
      <div className="flex flex-col bg-white justify-center items-center pb-20 bg-[url(./assets/images/content-bg.png)]">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row">
            <p className="text-black font-light text-5xl mr-3">Why</p>
            <p className="text-black font-semibold text-5xl">A1 Sports</p>
          </div>
          <p className="w-2/3 text-black font-light text-base text-center mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also 
          </p>
        </div>
        <div className="flex flex-col mt-10 md:flex-row">
          <div className="flex flex-col items-center justify-evenly">
            <p className="text-primary font-semibold text-4xl md:text-7xl">
              Investment
            </p>
            <p className="text-black font-light text-base text-center">
              We are offering users to buy and sell shares of listed athletes on
              our platform's. Growth of the shares depends on 3Ps -
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
                Athlete’s shares will be launched as Initial Public Offering on
                specific dates which will be announced prior to the dates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
