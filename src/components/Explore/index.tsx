import React from "react";
import appImageOne from "../../assets/images/app-image.png";
import appImageTwo from "../../assets/images/app-image-2.png";
import appImageThree from "../../assets/images/app-image-3.png";

const Explore: React.FC<any> = () => {
  return (
    <div className="flex flex-col h-auto bg-transparent w-full left-0 transform justify-center items-center sm:-translate-y-1/4 lg:-translate-y-1/4 ">
      <div className="flex w-auto flex-col justify-between space-y-5 sm:w-1/2 sm:flex-row sm:space-y-0">
        <img className="w-1/4 h-96" src={appImageOne} />
        <img className="w-1/4 h-96" src={appImageTwo} />
        <img className="w-1/4 h-96" src={appImageThree} />
      </div>
    </div>
  );
};

export default Explore;
