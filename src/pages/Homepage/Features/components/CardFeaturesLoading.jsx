import React, { useState } from "react";
import LoveSvg from "../../components/LoveSvg";

const CardFeatureLoading = ({ img, title, desc }) => {
  const [clicked, setClicked] = useState(false);
  const [onHover, setOnhover] = useState(false);
  return (
    <div className="max-w-[13rem] max-h-15 rounded overflow-hidden shadow-lg">
      <div className="w-full h-[15rem] back-loading">
        <div className="w-full h-full pl-[4.5rem] pt-[14rem]">
          <div className="h-2 w-[4rem] back-loading-white rounded"></div>
        </div>
      </div>
      <div className="px-4 py-2">
        <div className="flex justify-between">
          <div className="h-5 w-[8rem] back-loading rounded"></div>
          <div className="h-5 w-[1.5rem] mb-2 back-loading rounded"></div>
        </div>
        <div className="h-5 w-[11rem] mb-2 back-loading rounded"></div>
        <div className="h-5 w-[11rem] mb-2 back-loading rounded"></div>
      </div>
    </div>
  );
};

export default CardFeatureLoading;
