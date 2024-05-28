import React from "react";
import appImageOne from "../../assets/images/app-image.png";
import appImageTwo from "../../assets/images/app-image-2.png";
import appImageThree from "../../assets/images/app-image-3.png";
import RightImage from "../../assets/icons/right-arrow.png";

const Explore: React.FC<any> = () => {
  return (
    <div className="flex flex-col h-auto bg-transparent w-full left-0 transform justify-center items-center sm:-translate-y-1/4 lg:-translate-y-1/3 xl:-translate-y-1/2 ">
      <div className="flex w-auto flex-col justify-between space-y-5 sm:w-1/2 sm:flex-row sm:space-y-0">
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
