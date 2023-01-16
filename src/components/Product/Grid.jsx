import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import Stars from "../Star/Stars";

const Grid = ({ img, name, price, rating, reviews }) => {
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-3 mx-auto max-w-xs w-full mb-10 md:mb-0 sm:w-full lg:w-full">
      <div className="relative bg-white shadow-md rounded-md overflow-hidden hover:cursor-pointer">
        <div className="overflow-hidden">
          <img
            className="w-56 h-auto mx-auto scale-105 duration-500 hover:scale-110"
            src={img}
            alt=""
          />
        </div>
        <div className="absolute top-3 right-3">
          <AiOutlineHeart className="text-2xl hover:text-primary" />
        </div>
        <div className="p-4 pt-0 bg-white">
          <p className="uppercase tracking-wide font-semibold text-dark hover:text-primary">
            {name}
          </p>
          <p className="text-3xl text-dark">${price}</p>
          {/* <p className="text-dark">742 Evergreen Terrace</p> */}
          <Stars rating={rating} reviews={reviews} />
        </div>
        <hr className="w-11/12 mx-auto text-gray" />
        <div className="flex justify-between p-4">
          <div>
            <button className="flex items-center text-dark hover:text-primary font-medium">
              {" "}
              <AiOutlineShoppingCart className="mr-2 font-bold" />{" "}
              <small>ADD TO CART</small>
            </button>
          </div>
          <div>
            <button className="flex items-center text-dark hover:text-primary font-medium">
              {" "}
              <AiOutlineEye className="mr-2 font-bold" />{" "}
              <small>SEE DETAILS</small>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
