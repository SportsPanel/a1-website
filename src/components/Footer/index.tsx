import React from "react";
import CopyRight from "../../assets/icons/copyright.png";

const Footer: React.FC<any> = () => {
  return (
    <div className="bg-black flex flex-col py-12 px-20">
      <div className="flex flex-row justify-evenly">
        <div className="flex-1">
          <h1 className="text-primary font-bold text-2xl">A1 Sports</h1>
          <p className="text-white font-light text-[10px] mt-2">
            Futstart Experience Private Limited
          </p>
          <p className="text-white font-light text-[10px]">
            Regd:, #34/120,kanakpura road, Tataguni, Bengaluru - 560 062
          </p>
          <p className="text-white font-light text-[10px]">
            #U74999KA201 7PTC . GSTIN #29AADCF2554Q122
          </p>
          <p className="text-white font-light text-[10px]">Info@futstart.com</p>
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
      <div className="flex flex-row mt-4 self-center space-x-1 items-center">
        <img src={CopyRight} className="h-4 w-4" />
        <p className="text-white font-light text-xs">
          2022 Regnar Events. All rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
