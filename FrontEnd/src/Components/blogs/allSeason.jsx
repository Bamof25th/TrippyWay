import React from 'react';
import Link from 'next/link';
import BlogCard from '../ui/BlogCard';

const allSeason = () => {

  const allSeason= [
    {
      "title": "A Safari Adventure in the Serengeti",
      "cover_image": "../../../serengeti.jpg",
      "credit": "Photo by Jane Smith",
      "description": "Experience the thrill of the wild as we venture into the heart of the Serengeti National Park in Tanzania. Get up close and personal with majestic lions, graceful giraffes, and towering elephants on this unforgettable safari adventure."
    },
    {
      "title": "Exploring the Wonders of Machu Picchu",
      "cover_image": "../../../Machu_Picchu.jpg",
      "credit": "Photo by John Doe",
      "description": "Join us as we embark on an unforgettable journey to Machu Picchu, the ancient Incan citadel nestled in the Andes Mountains of Peru. Discover the rich history, breathtaking landscapes, and awe-inspiring architecture of this UNESCO World Heritage Site."
    },
    
    {
      "title": "Island Paradise: Exploring the Maldives",
      "cover_image": "../../../maldives.webp",
      "credit": "Photo by Alex Johnson",
      "description": "Escape to the idyllic beaches and crystal-clear waters of the Maldives, where luxury meets natural beauty. Dive into the vibrant coral reefs, unwind in overwater bungalows, and indulge in world-class dining for the ultimate tropical getaway."
    },
    {
      "title": "Exploring the Wonders of Machu Picchu",
      "cover_image": "../../../Machu_Picchu.jpg",
      "credit": "Photo by John Doe",
      "description": "Join us as we embark on an unforgettable journey to Machu Picchu, the ancient Incan citadel nestled in the Andes Mountains of Peru. Discover the rich history, breathtaking landscapes, and awe-inspiring architecture of this UNESCO World Heritage Site."
    },
    {
      "title": "A Safari Adventure in the Serengeti",
      "cover_image": "../../../serengeti.jpg",
      "credit": "Photo by Jane Smith",
      "description": "Experience the thrill of the wild as we venture into the heart of the Serengeti National Park in Tanzania. Get up close and personal with majestic lions, graceful giraffes, and towering elephants on this unforgettable safari adventure."
    },
    {
      "title": "Island Paradise: Exploring the Maldives",
      "cover_image": "../../../maldives.webp",
      "credit": "Photo by Alex Johnson",
      "description": "Escape to the idyllic beaches and crystal-clear waters of the Maldives, where luxury meets natural beauty. Dive into the vibrant coral reefs, unwind in overwater bungalows, and indulge in world-class dining for the ultimate tropical getaway."
    }
  ]
  return (
    <div className="container flex flex-wrap justify-center md:grid md:grid-cols-3 sm:grid-cols-1 gap-4 w-2/3 " >
      {allSeason.map((blog, index) => (
        <BlogCard post={blog} key={index} />
      ))}
    </div>
  )
}

export default allSeason