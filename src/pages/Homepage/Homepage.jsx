import React, { useState, useEffect, useMemo } from "react";
import { Helmet } from "react-helmet-async";

import CardFeatureStudio from "./Features/components/CardFeaturesStudio";
import CardFeatureLoading from "./Features/components/CardFeaturesLoading";
import CardFeatureStudioHorizontal from "./Features/components/CardFeaturesStudioHorizontal";
import CardFeatureStudioHorizontalLoading from "./Features/components/CardFeaturesStudioHorizontalLoading";
import ComponentSquare from "./Features/components/ComponentSquares";
import ComponentHorizontal from "./Features/components/ComponentHorizontal";
import ComponentShowall from "./Features/components/ComponentShowmore";
import ApiCall from "../hh.api";
import ScrollToTop from "./Features/components/ScrollToTop";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  const [isHorizontal, setIsHorizontal] = useState(false);
  const [onHover, setOnHover] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const getAllCards = async (page) => {
    try {
      setIsLoading(true);
      const res = await ApiCall.getProfile(page);
      if (!data.length) {
        setData(res?.data?.items);
      } else {
        const newArray = [...data, ...res?.data?.items];
        setData(newArray);
      }
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllCards(page);
  }, [page]);

  return (
    <>
      <div className="px-3 pt-3">
        <div className="flex flex-row-reverse">
          <div className="flex gap-2">
            <ComponentSquare
              clicked={!isHorizontal ? true : false}
              onClick={() => {
                setIsHorizontal(false);
              }}
            ></ComponentSquare>
            <div className="pt-0.5">
              <ComponentHorizontal
                clicked={isHorizontal ? true : false}
                onClick={() => {
                  setIsHorizontal(true);
                }}
              ></ComponentHorizontal>
            </div>
          </div>
        </div>
        <div className="py-2 px-4">
          {isHorizontal ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data?.map((e) => {
                if (isLoading)
                  return (
                    <CardFeatureStudioHorizontalLoading></CardFeatureStudioHorizontalLoading>
                  );
                return (
                  <CardFeatureStudioHorizontal
                    data={e}
                    onHoverLike={(e) => {
                      setOnHover(e);
                    }}
                    onClick={(e) => {
                      if (!onHover) navigate("/" + e);
                    }}
                  ></CardFeatureStudioHorizontal>
                );
              })}
            </div>
          ) : (
            <div className="grid gap-4 grid-cols-1 md:grid-cols-4">
              {data?.map((e) => {
                if (isLoading) return <CardFeatureLoading></CardFeatureLoading>;
                return (
                  <CardFeatureStudio
                    onClick={(e) => {
                      if (!onHover) navigate("/" + e);
                    }}
                    onHoverLike={(e) => {
                      setOnHover(e);
                    }}
                    data={e}
                  ></CardFeatureStudio>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="flex w-full justify-center mb-4">
        <ComponentShowall
          onClick={() => {
            setPage(page + 1);
          }}
        ></ComponentShowall>
      </div>
      <ScrollToTop></ScrollToTop>
    </>
  );
};

export default Main;
