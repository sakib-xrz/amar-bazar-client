import React from "react";

const Heading = ({ name, span }) => {
  return (
    <div className="container mx-auto px-5 pb-5">
      <div className="relative border-b-[1px] border-dark border-opacity-20 pb-4">
        <h2 className="text-primary font-medium text-4xl">
          {name} <span className="text-dark font-thin">{span}</span>
        </h2>
        <div className="w-[100px] h-[2px] absolute bg-primary bottom-[-1px] rounded-full"></div>
      </div>
    </div>
  );
};

export default Heading;
