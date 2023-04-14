import React, { useState } from "react";
import LoveSvg from "../../components/LoveSvg";
import { Swiper, SwiperSlide } from "swiper/react";

const ComponentShowall = ({ onClick }) => {
  const [onHover, setOnhover] = useState(false);

  const getColor = () => {
    let basicClassName =
      "w-[10rem] h-[3rem] menu-color-default flex rounded-xl font-medium items-center justify-center";
    if (onHover) return basicClassName + " menu-showmore-hover";
    else {
      return basicClassName + " menu-showmore-default";
    }
  };
  return (
    <div
      className="max-w-[30rem] max-h-[30rem] overflow-hidden cursor-pointer"
      onMouseEnter={() => {
        setOnhover(true);
      }}
      onMouseLeave={() => {
        setOnhover(false);
      }}
      onClick={() => {
        onClick();
      }}
    >
      <div className="">
        <div className="flex">
          <div className={getColor()}>Показать еще</div>
        </div>
      </div>
    </div>
  );
};

export default ComponentShowall;
