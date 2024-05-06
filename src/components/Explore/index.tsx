import React from "react";
import appImageOne from "../../assets/images/app-image.png";

const Explore: React.FC<any> = () => {
  return (
    <div className="flex flex-col h-1/2 bg-transparent w-full top-1/2 left-0 transform -translate-y-1/2 justify-center items-center">
      <div className="flex  w-1/2 flex-row justify-between">
        <img className="w-1/7 h-96" src={appImageOne} />
        <img className="w-1/7 h-96" src={appImageOne} />
        <img className="w-1/7 h-96" src={appImageOne} />
      </div>
    </div>
  );
};

export default Explore;
