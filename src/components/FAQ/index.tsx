import React from "react";
import Expandable from "../Expandable";
import { expandableProps } from "../../constants";

const FAQ: React.FC<any> = () => {
  return (
    <section id="faq">
      <div className="flex flex-col bg-black p-10 items-center">
        <div className="flex flex-row">
          <p className="text-white font-light text-4xl mr-2">Our</p>
          <p className="text-white font-semibold text-4xl">FAQ</p>
        </div>
        {expandableProps.map((props, index) => (
          <Expandable
            key={index}
            title={props.title}
            content={props.content}
            hidden={props.hidden}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
