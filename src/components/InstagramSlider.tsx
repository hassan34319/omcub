"use client"

import { useState, useRef, useEffect } from "react";
import { InstagramFooterSlider } from "../types/instagram-footer";
import { urlFor } from "../lib/sanity-client";

// Data
// import data from "../data.json";

const InstagramSlider = ({
  col,
  data,
}: {
  col: number;
  data: InstagramFooterSlider[];
}) => {
  const [maxScrollWidth, setMaxScrollWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return carousel.current.offsetWidth * currentIndex >= maxScrollWidth;
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    setMaxScrollWidth(
      carousel.current
        ? carousel.current.scrollWidth - carousel.current.offsetWidth
        : 0
    );
  }, [maxScrollWidth, carousel.current]);

  return (
    <div className="carousel my-12 mx-auto">
      <div className="relative overflow-hidden w-11/12 mx-auto">
        <div className="flex justify-between absolute left top h-full w-full">
          <button
            onClick={movePrev}
            className="text-black w-10 h-full text-center opacity-100 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 ml-8 transition-all ease-in-out duration-300"
            disabled={isDisabled("prev")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-max bg-white -ml-5 rounded-full"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="text-black w-10 h-full text-center opacity-100 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("next")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-max bg-white -ml-5 rounded-full"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className={`carousel-container relative flex ${
            col === 4 ? "gap" : "gap"
          } overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0 w-full `}
        >
          {data?.map((resource, index) => {
            return (
              <div
                key={index}
                className={`carousel-item text-center relative ${
                  col === 4 ? "w-1/4" : "lg:w-4/12"
                }  ${col === 4 ? "h-64" : "h-96"} snap-start`}
              >
                {/* <div
                key={index}
                className={`carousel-item text-center relative ${
                  col === 4 ? "w-1/4" : "lg:w-4/12"
                }  ${col === 4 ? "h-64" : "h-96"} snap-start`}
              > */}
                <a
                  href={resource.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                  style={{
                    backgroundImage: `url(${
                      urlFor(resource.sliderImage).url() || ""
                    })`,
                  }}
                >
                  <img
                    src={urlFor(resource.sliderImage).url()}
                    alt={resource.altText}
                    title={resource.name}
                    className="w-full aspect-square hidden"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={resource.socialLink}
                  className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 z-10"
                >
                  <h3 className="text-white py-6 px-3 mx-auto text-xl">
                    {/* {resource.title} */}
                  </h3>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InstagramSlider;
