import React from "react";
import Rating from "./Rating";
import commas from "../assets/comma.png";
import Image from "next/image";
// Individual review card
const ReviewCard = ({ review }) => {
  return (
    <div className="rounded-lg border bg-white text-black shadow-sm w-full max-w-md p-6 grid gap-6">
      <div
        className="border p-6 bg-card text-card-foreground rounded-lg shadow-md hover:shadow-lg transition-all"
        data-v0-t="card"
      >
        <div className="flex items-center gap-4">
          <span className="relative flex shrink-0 overflow-hidden rounded-full w-12 h-12 border">
            <img
              src={review.avatar}
              className="flex h-full w-full items-center justify-center rounded-full bg-muted"
            />
          </span>
          <div>
            <h4 className="font-semibold">{review.name}</h4>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Rating stars={review.rating} />
            </div>
          </div>
        </div>
        {/* <h5 className="mt-4 font-medium text-green-500">{review.place.charAt(0).toUpperCase() + review.place.slice(1)}</h5> */}
        <h5 className=" text-xs text-slate-500">{review.date}</h5>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {review.comment}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
