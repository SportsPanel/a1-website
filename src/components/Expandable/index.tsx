import React, { useState } from "react";
import { ExpandableProps } from "../../constants";
import CloseIcon from "../../assets/icons/close-icon.png";
import OpenIcon from "../../assets/icons/open-icon.png";

const Expandable: React.FC<ExpandableProps> = ({ title, content, hidden }) => {
  const [showContent, setShowContent] = useState(hidden);
  return (
    <div className="w-1/2 flex flex-col mt-10 justify-evenly">
      <div className="bg-line h-[1px]"></div>
      <div className="flex flex-row w-full justify-between items-center mt-5">
        <p className="text-white font-semibold text-2xl">{title}</p>
        {showContent ? (
          <img
            className="h-3 w-3"
            src={CloseIcon}
            onClick={() => setShowContent(!showContent)}
          />
        ) : (
          <img
            className="h-3 w-3"
            src={OpenIcon}
            onClick={() => setShowContent(!showContent)}
          />
        )}
      </div>
      {showContent ? null : (
        <p className="text-line font-normal text-base mt-2">{content}</p>
      )}
    </div>
  );
};

export default Expandable;
