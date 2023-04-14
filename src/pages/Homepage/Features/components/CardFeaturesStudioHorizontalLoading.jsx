import React, { useState } from "react";
import LoveSvg from "../../components/LoveSvg";
import { Swiper, SwiperSlide } from "swiper/react";

const CardFeatureStudioHorizontalLoading = ({ img, title, desc }) => {
  const [clicked, setClicked] = useState(false);
  const [onHover, setOnhover] = useState(false);
  const [isSeen, setIsSeen] = useState(true);
  return (
    <div className="max-w-[30rem] max-h-[10rem] rounded overflow-hidden shadow-lg flex">
      <div className="h-[10rem] w-[10rem] rounded back-loading"></div>

      <div className="px-2 py-2 w-full flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <div className="h-7 w-[14rem] back-loading rounded"></div>
          <div className="h-7 w-[1.5rem] back-loading rounded"></div>
        </div>
        <div className="h-5 w-[22rem] back-loading rounded"></div>
        <div className="h-5 w-[15rem] back-loading rounded"></div>
        <div className="flex justify-between items-center pt-4">
          <div className="h-5 w-[10rem] back-loading rounded"></div>
          <div className="h-5 w-[10rem] back-loading rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default CardFeatureStudioHorizontalLoading;
