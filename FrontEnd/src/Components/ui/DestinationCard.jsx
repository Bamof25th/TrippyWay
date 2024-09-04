import React from "react";

const DestinationCard = ({ data }) => {
  let { location, packages, imageURL } = data;
  return (
    <div>
      <article className="relative -z-10  isolate flex h-[350px]  flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto  hover:scale-95 transition-all duration-700 ease-in-out ">
        <img
          src={imageURL}
          alt="University of Southern California"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
        <h3 className="z-10 mt-3 text-3xl font-bold text-white">{location}</h3>
        <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
          {packages}+ Pakages
        </div>
      </article>
    </div>
  );
};

export default DestinationCard;
