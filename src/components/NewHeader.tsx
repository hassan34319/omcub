"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decreaseCount,
  increaseCount,
  toggleCart,
} from "../redux/reducers/cartSlice";
import Link from "next/link";

const NewHeader = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart);
  console.log("🚀 ~ file: NewHeader.tsx:11 ~ NewHeader ~ cart:", cart);

  return (
    <header className="py-4 sm:py-6 px-4 lg:px-10 mt-2 flex w-full justify-between shadow-md">
      <Link href="/" className="flex items-center text-gray-900">
        Omcub
      </Link>
      <button
        className="appearance-none px-2 text-gray-800 hover:text-blue-600 rounded-md cursor-pointer focus:outline-none focus:text-blue-600 transition relative"
        onClick={() => dispatch(toggleCart())}
      >
        {cart.items.length && (
          <span className="absolute bg-blue-600 rounded-full w-2 h-2 top-0 right-0 -mt-1 -mr-1" />
        )}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="sm:w-6 h-6 fill-current w-5"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
        </svg>
      </button>
      {cart?.isOpen && (
        <div className="w-96 lg:w-[25%] h-[50vh] lg:h-[30vw] bg-white rounded-2xl border-2 border-gray-300 shadow-xl absolute right-10 top-20 z-10 py-5 px-2 items-center">
          {cart?.items?.length ? (
            cart?.items?.map((item: any) => (
              <div key={item?.uid} className="flex">
                <img src={item?.image} alt="item" className="w-24" />
                <div className="flex flex-col items-start">
                  <span className="w-auto">{item.title}</span>
                  <div className="flex items-center justify-center gap-3 py-2 pl-2">
                    <span
                      onClick={() => dispatch(decreaseCount(item?.uid))}
                      className="cursor-pointer"
                    >
                      -
                    </span>
                    <span className="bg-gray-400 rounded-full px-2 py-1">
                      {item.quantity}
                    </span>
                    <span
                      onClick={() => dispatch(increaseCount(item?.uid))}
                      className="cursor-pointer"
                    >
                      +
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <span>Cart is Empty</span>
          )}
          {cart?.items?.length && (
            <button className="text-center w-[95%]  py-3 bg-cyan-600 text-white rounded-xl absolute bottom-5">
              <Link href='/checkout' className="w-full text-center">
              Checkout
              </Link>
            </button>
          )}
        </div>
      )}
    </header>
  );
};

export default NewHeader;
