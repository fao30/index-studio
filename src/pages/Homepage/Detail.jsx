import React, { useState, useEffect, useMemo } from "react";
import ApiCall from "../hh.api";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const id = useParams();

  const getAllCards = async (id) => {
    try {
      setLoading(true);
      const res = await ApiCall.getDetail(id);
      setData(res?.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllCards(id?.id);
  }, [id]);

  if (loading) {
    return <></>;
  }

  return (
    <>
      <div className="flex w-full h-full">
        <div className="py-4 px-4 flex w-full flex-col max-w-[55rem]">
          <div className="flex w-full w-max-[35rem]">
            <div className="flex w-[6rem]">Title</div>
            <div>: {data?.title}</div>
          </div>
          <div className="flex w-full w-max-[35rem]">
            <div className="flex w-[20rem]">about</div>
            <div>: {data?.about}</div>
          </div>
          <div className="flex w-full">
            <div className="flex w-[6rem]">Address</div>
            <div>: {data?.address}</div>
          </div>
          <div className="flex  w-full">
            <div className="flex w-[6rem]">Price</div>
            <div>: {data?.price}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
