import React from "react";
import Masonry from "react-masonry-css";
import Pin from "../ui/PinCard";


const trending = () => {
  const allSeason = [
    {
      title: "A Safari Adventure in the Serengeti",
      cover_image: "../../../serengeti.jpg",
      credit: "Photo by Jane Smith",
      description:
        "Experience the thrill of the wild as we venture into the heart of the Serengeti National Park in Tanzania. Get up close and personal with majestic lions, graceful giraffes, and towering elephants on this unforgettable safari adventure.",
    },
    {
      title: "Exploring the Wonders of Machu Picchu",
      cover_image: "../../../Machu_Picchu.jpg",
      credit: "Photo by John Doe",
      description:
        "Join us as we embark on an unforgettable journey to Machu Picchu, the ancient Incan citadel nestled in the Andes Mountains of Peru. Discover the rich history, breathtaking landscapes, and awe-inspiring architecture of this UNESCO World Heritage Site.",
    },
    {
      title: "A Safari Adventure in the Serengeti",
      cover_image: "../../../serengeti.jpg",
      credit: "Photo by Jane Smith",
      description:
        "Experience the thrill of the wild as we venture into the heart of the Serengeti National Park in Tanzania. Get up close and personal with majestic lions, graceful giraffes, and towering elephants on this unforgettable safari adventure.",
    },
    {
      title: "Island Paradise: Exploring the Maldives",
      cover_image: "../../../maldives.webp",
      credit: "Photo by Alex Johnson",
      description:
        "Escape to the idyllic beaches and crystal-clear waters of the Maldives, where luxury meets natural beauty. Dive into the vibrant coral reefs, unwind in overwater bungalows, and indulge in world-class dining for the ultimate tropical getaway.",
    },
    {
      title: "Exploring the Wonders of Machu Picchu",
      cover_image: "../../../Machu_Picchu.jpg",
      credit: "Photo by John Doe",
      description:
        "Join us as we embark on an unforgettable journey to Machu Picchu, the ancient Incan citadel nestled in the Andes Mountains of Peru. Discover the rich history, breathtaking landscapes, and awe-inspiring architecture of this UNESCO World Heritage Site.",
    },

    {
      title: "Island Paradise: Exploring the Maldives",
      cover_image: "../../../maldives.webp",
      credit: "Photo by Alex Johnson",
      description:
        "Escape to the idyllic beaches and crystal-clear waters of the Maldives, where luxury meets natural beauty. Dive into the vibrant coral reefs, unwind in overwater bungalows, and indulge in world-class dining for the ultimate tropical getaway.",
    },
    {
      title: "Himalays",
      cover_image: "https://i.pinimg.com/564x/dc/71/34/dc7134cb07904cdc754065a4093fb73e.jpg",
      credit: "Photo by Jane Doe",
      description:
        "Escape to the idyllic beaches and crystal-clear waters of the Maldives, where luxury meets natural beauty. Dive into the vibrant coral reefs, unwind in overwater bungalows, and indulge in world-class dining for the ultimate tropical getaway.",
    },
    {
      title: "Rishikesh, ganga, Uttrakhand",
      cover_image: "https://i.pinimg.com/564x/36/2e/54/362e5407723ff06cd4f7889d222811f1.jpg",
      credit: "Photo by Zero",
      description:
        "I literally left a part of me there, and now I just wanna visit over n over again..🥺🤌🏼🕉️",
    },
  ];
  const breakpointColumnsObj = {
    default: 3,
    3000: 4,
    2000: 3,
    1200: 3,
    1000: 2,
    500: 1,
  };
  return (
    <Masonry
      className="flex animate-slide-fwd"
      breakpointCols={breakpointColumnsObj}
    >
      {allSeason.map((blog, index) => (
        <Pin post={blog} key={index} />
      ))}
    </Masonry>
  );
};

export default trending;
