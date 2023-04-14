import React from "react";

const CardFeatures = ({ img, title, desc }) => {
  return (
    <div className="flex items-center p-4 rounded-lg max-md:h-36 md:p-6 customDropShadow bg-customYellow">
      <div className="flex items-center justify-between gap-4">
        <div className="flex w-[30%] lg:w-[20%]">
          <img src={img} className="object-contain aspect-square" />
        </div>
        <div className="flex flex-col gap-1 w-[70%] lg:w-[80%] justify-center lg:justify-start">
          <p className="font-bold text-customBlue pSmaller lg:p">{title}</p>
          <p className="font-medium text-customText2 pSmaller3 lg:p">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default CardFeatures;
