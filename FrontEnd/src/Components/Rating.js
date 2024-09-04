import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Rating = ({ stars }) => {

  const ratingStar = Array.from({ length: 5 }, (_, index) => {
    let number = index + 0.5; // to show half star
    return (
   
      <span key={index}>
        {stars >= index + 1
          ? < FaStar className="text-green-700 text-xl"/>
          : stars >= number
          ? <FaStarHalfAlt  className="text-green-700 text-xl"/>
          : <AiOutlineStar className="text-green-700 text-xl" />}
      </span>
      
    );
  });
  return <div className="flex ">
    {ratingStar}
  </div>
}

export default Rating;
