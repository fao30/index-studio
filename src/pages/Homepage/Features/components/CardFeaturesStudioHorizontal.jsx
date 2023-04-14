import React, { useState } from "react";
import LoveSvg from "../../components/LoveSvg";
import { Swiper, SwiperSlide } from "swiper/react";

const CardFeatureStudioHorizontal = ({ data, onClick, onHoverLike }) => {
  const [clicked, setClicked] = useState(false);
  const [onHover, setOnhover] = useState(false);
  const [isSeen, setIsSeen] = useState(true);
  return (
    <div
      onClick={() => {
        onClick(data?.id);
      }}
      className="cursor-pointer max-w-[28rem] max-h-[10rem] rounded overflow-hidden shadow-lg flex"
    >
      <div className="h-[10rem] max-w-[10rem] rounded relative">
        <Swiper
          slidesPerView={1}
          onSlideChange={() => {
            //
          }}
          onSwiper={(swiper) => {
            //
          }}
        >
          <SwiperSlide>
            <img
              className="w-full h-[15rem]"
              src="https://source.unsplash.com/random"
              alt="Card"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-[15rem]"
              src="https://source.unsplash.com/random"
              alt="Card"
            />
          </SwiperSlide>
        </Swiper>
        {data?.seen ? (
          <div className="w-full flex justify-center absolute top-2 z-10 ">
            <div className="px-2 py-1 bg-white rounded">Просмотрено</div>
          </div>
        ) : (
          <></>
        )}
      </div>

      <div className="px-2 py-4">
        <div className="flex justify-between w-[17rem]">
          <div className="font-bold text-m mb-2">{data?.price} ₽</div>
          <div
            className="cursor-pointer "
            onMouseEnter={() => {
              setOnhover(true);
              onHoverLike(true);
            }}
            onMouseLeave={() => {
              setOnhover(false);
              onHoverLike(false);
            }}
            onClick={() => {
              setClicked(clicked ? false : true);
            }}
          >
            <LoveSvg onHover={onHover} clicked={clicked} />
          </div>
        </div>
        <div className="font-bold text-xs mb-[5rem]">{data?.title}</div>
        <div className="flex justify-between">
          <div className="text-gray-700 text-xs mb-2">{data?.address}</div>
          <div className="text-gray-700 text-xs mb-2">{data?.createdAt}</div>
        </div>
      </div>
    </div>
  );
};

export default CardFeatureStudioHorizontal;
