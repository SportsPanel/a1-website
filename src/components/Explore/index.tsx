import React from "react";
import appImageOne from "../../assets/images/app-image.png";
import appImageTwo from "../../assets/images/app-image-2.png";
import appImageThree from "../../assets/images/app-image-3.png";
import RightImage from "../../assets/icons/right-arrow.png";

const Explore: React.FC<any> = () => {
  return (
    <div className="flex flex-col h-1/2 bg-transparent w-full top-1/2 left-0 transform -translate-y-1/2 justify-center items-center">
      <div className="flex  w-1/2 flex-row justify-between">
        <img className="w-1/7 h-96" src={appImageOne} />
        <img className="w-1/7 h-96" src={appImageTwo} />
        <img className="w-1/7 h-96" src={appImageThree} />
      </div>
      <div className="flex flex-row mt-10 items-center space-x-5">
        <p className="text-black font-medium text-xl ">Explore</p>
        <div className="flex w-14 h-14 rounded-full bg-black justify-center items-center hover:bg-break">
          <img src={RightImage} />
        </div>
      </div>
    </div>
  );
};

export default Explore;
