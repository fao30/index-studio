import React, { useState } from "react";
import LoveSvg from "../../components/LoveSvg";
import { Swiper, SwiperSlide } from "swiper/react";

const ComponentScrollUp = ({ img, title, desc }) => {
  const [clicked, setClicked] = useState(false);
  const [onHover, setOnhover] = useState(false);

  return (
    <div
      className="max-w-[30rem] max-h-[30rem] rounded overflow-hidden cursor-pointer"
      onMouseEnter={() => {
        setOnhover(true);
      }}
      onMouseLeave={() => {
        setOnhover(false);
      }}
      onClick={() => {
        setClicked(clicked ? false : true);
      }}
    >
      <div className="flex">
        <div className="flex">
          <div className="w-[2rem] flex items-center justify-center menu-showmore-hover">
            <svg
              width="16"
              height="10"
              viewBox="0 0 16 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5 8.25L8 1.75L1.5 8.25"
                stroke="#8F8F8F"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div className="w-[5rem] h-[2.5rem] flex items-center justify-center menu-showmore-hover rounded-sm scrollUp">
            Вверх
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentScrollUp;
