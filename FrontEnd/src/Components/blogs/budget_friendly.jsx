import React from "react";
import BlogCard from "../ui/BlogCard";
import Pin from "../ui/PinCard";
import Masonry from "react-masonry-css";

const budget_friendly = () => {
  const allSeason = [
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

export default budget_friendly;
