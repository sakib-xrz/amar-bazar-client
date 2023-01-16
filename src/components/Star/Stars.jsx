import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Stars = ({ rating, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (_, i) => {
    let number = i + 0.5;
    return (
      <span key={i}>
        {rating >= i + 1 ? (
          <BsStarFill className="text-primary" />
        ) : rating >= number ? (
          <BsStarHalf className="text-primary" />
        ) : (
          <BsStar className="text-primary" />
        )}
      </span>
    );
  });
  return (
    <div className="flex items-center text-xs">
      {ratingStar} <div className="ml-1">({reviews}<span className="hidden md:inline"> reviews</span>)</div>
    </div>
  );
};

export default Stars;
