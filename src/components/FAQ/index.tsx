import React from "react";

const FAQ: React.FC<any> = () => {
  return (
    <section id="faq">
      <div className="flex flex-col bg-black p-10 items-center">
        <div className="flex flex-row">
          <p className="text-white font-light text-4xl mr-2">Our</p>
          <p className="text-white font-semibold text-4xl">FAQ</p>
        </div>
        <div className="w-1/2 flex flex-col mt-10 justify-evenly">
          <div className="bg-line h-[1px]"></div>
          <p className="text-white font-semibold text-2xl">How it Works</p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
