// use server
import { useState } from "react";
import { BiStar } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import Rating from "./Rating";

const Card = () => {
  return (
    <div className="rounded-lg border bg-[#2b3030] shadow-sm w-[350px]">
      <div className="relative">
        <img
          src="https://i.pinimg.com/564x/b0/4f/a6/b04fa69c4bbd724ee79d5c46cb66318e.jpg"
          alt="Rustic country retreat"
          className="w-full h-[200px] object-cover"
          width="350"
          height="200"
          style={{ aspectRatio: `350/200`, objectFit: `cover` }}
        />
        <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm focus-visible:outline-none bg-slate-700 bg-opacity-70  ease-linear duration-300 hover:bg-opacity-50 h-10 w-10 absolute top-1 right-2">
          <FaRegHeart className="w-6 h-6 fill-primary text-white" />
          <span className="sr-only">Like</span>
        </div>
      </div>
      <div className="p-4">
        <div className="text-xs text-emerald-200  uppercase">
          Hampshire • England
        </div>
        <h2 className="text-lg  text-white font-semibold">
          Rustic country retreat
        </h2>
        <div class="text-lg font-semibold text-[#00802b]">
          ₹16,800<sup class="text-xs">PP</sup>
        </div>
        <p className="mt-2 text-sm text-white">
          Step outside and take in the stunning views. Our cabin sits on a quiet
          and secluded property, providing the perfect setting for a peaceful
          retreat.
        </p>
        <div className="flex items-center mt-4">
          <div className="flex items-center">
            <Rating />
          </div>
          <span className="ml-2 text-sm text-emerald-200">82 reviews</span>
        </div>
        <div class="mt-4">
          <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-slate-50  h-10 px-4 py-2 w-full">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

const StaRating = ({ count, values }) => {
  const [rating, setRating] = useState([]);
  return (
    <div className="flex items-center gap-1">
      <BiStar />
      <BiStar />
      <BiStar />
      <BiStar />
      <BiStar />
    </div>
  );
};
