"use client"

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

interface Props {
  col: number;
  data: any;
}

const Carousel = ({ col, data }: Props) => {
  const maxScrollWidth = useRef(0);
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
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="carousel my-12 mx-auto">
      <div className="relative overflow-hidden w-11/12 mx-auto">
        <div className="flex justify-between absolute left top h-full w-full">
          <button
            onClick={movePrev}
            className="text-black w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("prev")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
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
            className="text-black w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("next")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
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
            col === 4 ? "gap-1" : "gap-2"
          } overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0 w-10/12 mx-auto`}
        >
          {data?.map((resource, index) => {
            const thumbnailUrls = resource.imageUrl[0];
            return (
              <div
                key={index}
                className={`cursor-pointer carousel-item text-center relative ${
                  col === 4 ? "w-64" : "lg:w-4/12"
                }  ${col === 4 ? "h-64" : "h-96"} snap-start`}
              >
                <Link href={`/products/${resource.id}`} className="group h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0">
                    {/* <img
                      src={thumbnailUrls || ""}
                      alt={resource.name}
                      className={`w-full aspect-square object-cover `}
                    /> */}
                    <img
                      src={resource.imageUrl[0] || ""}
                      alt={resource.name}
                      className={`w-full aspect-square object-cover ${
                        resource.imageUrl.length > 1
                          ? "block group-hover:hidden"
                          : ""
                      }`}
                    />
                    {resource.imageUrl[1] && (
                      <img
                        src={resource.imageUrl[1] || ""}
                        alt={resource.name}
                        className="w-full aspect-square object-cover hidden group-hover:block"
                      />
                    )}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
