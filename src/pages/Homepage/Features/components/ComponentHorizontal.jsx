import React, { useState } from "react";
import LoveSvg from "../../components/LoveSvg";
import { Swiper, SwiperSlide } from "swiper/react";

const ComponentHorizontal = ({ clicked, onClick }) => {
  // const [clicked, setClicked] = useState(false);
  const [onHover, setOnhover] = useState(false);

  const getColor = () => {
    let basicClassName = "w-7 h-3 rounded-sm border-2 menu-color-default";
    if (onHover) return basicClassName + "menu-color-hover";
    else {
      if (clicked) {
        return basicClassName + "menu-color-clicked";
      } else {
        return basicClassName + "menu-color-default";
      }
    }
  };
  return (
    <div
      className="max-w-24 max-h-24 rounded overflow-hidden cursor-pointer"
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
      <div className="flex flex-col gap-1">
        <div className="flex gap-1">
          <div className={getColor()}></div>
        </div>
        <div className="flex gap-1">
          <div className={getColor()}></div>
        </div>
      </div>
    </div>
  );
};

export default ComponentHorizontal;
