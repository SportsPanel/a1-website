import React from "react";

const Footer: React.FC<any> = () => {
  return (
    <div className="bg-black flex flex-col py-12 px-20">
      <div className="flex flex-row justify-evenly">
        <div className="flex-1">
          <h1 className="text-primary font-bold text-3xl">A1 Sports</h1>
          <p className="text-white font-light text-xs mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
        </div>
        <div className="flex-1 flex flex-row justify-evenly">
          <div className="flex flex-col sm:justify-evenly">
            <p className="text-white font-semibold text-lg">Know Us</p>
            <p className="text-white font-light text-xs mt-2">
              What is A1 Sports
            </p>
            <p className="text-white font-light text-xs">Investment</p>
            <p className="text-white font-light text-xs">IPO</p>
            <p className="text-white font-light text-xs">Expert Talks</p>
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-break mt-6"></div>
      <div className="mt-4 self-center">
        <p className="text-white font-light text-xs">
          2022 Regnar Events. All rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
