import React from "react";
import { BiHeart } from "react-icons/bi";
import Rating from "../Rating";
import Image from "next/image";
import { motion } from "framer-motion";
const PakageCards = () => {
  return (
    <>
      <div className="rounded-lg border bg-white text-black shadow-sm w-full max-w-sm">
        <div className="relative overflow-hidden rounded-t-lg">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md  font-medium text-xl h-8 w-8 absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 hover:text-red-200 text-white">
            <BiHeart />
            <span className="sr-only">Like</span>
          </button>
          <Image
            src="/Paris.jpg"
            alt="Destination Image"
            width={400}
            height={200}
            className="object-contain transition-transform duration-300 ease-in-out hover:scale-105"
            style={{ aspectRatio: "2 / 1", objectFit: "cover" }}
          />
        </div>
        <a className="group" href="#">
          <div className="p-6 space-y-4">
            <div>
              <h3 className="text-lg font-semibold">
                Tropical Getaway in Bali
              </h3>
              <p className="text-gray-500">
                Escape to the serene beaches and lush landscapes of Bali.
              </p>
            </div>
            <div className="flex  flex-wrap items-center justify-between">
              <div className="flex items-center gap-2">
                <Rating stars={4.5} />
                <span className="text-sm font-medium">4.3</span>
              </div>
              <motion.button
                whileTap={{ scale: 0.9 }}
                className=" my-3 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium  transition-colors  bg-gradient-to-r from-[#00A68B] to-[#00C389] text-emerald-50 hover:bg-emerald-700/90 h-9 rounded-md px-3"
              >
                Book Now
              </motion.button>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default PakageCards;
