import React from "react";

const Banner: React.FC<any> = () => {
  return (
    <div className="flex w-full flex-right space-x-1 flex-wrap">
      <p className="text-white font-normal text-xs">Virat Kohli</p>
      <p className="text-green font-normal text-xs">(+12.5)</p>
      <div className="bg-gray h-auto w-[1px]"></div>
      <p className="text-white font-normal text-xs">Rohit S</p>
      <p className="text-green font-normal text-xs">(+12.5)</p>
      <div className="bg-gray h-auto w-[1px]"></div>
      <p className="text-white font-normal text-xs">Sam K</p>
      <p className="text-red font-normal text-xs">(-11.8)</p>
    </div>
  );
};

export default Banner;
