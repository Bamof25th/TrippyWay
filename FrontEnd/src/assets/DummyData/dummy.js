// Destinations

const destinations = [
  {
    location: "Delhi",
    packages: 15,
    imageURL:
      "https://images.pexels.com/photos/4248537/pexels-photo-4248537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    location: "Mumbai",
    packages: 12,
    imageURL:
      "https://images.pexels.com/photos/27073315/pexels-photo-27073315/free-photo-of-fireworks-above-boats-on-the-river.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    location: "Goa",
    packages: 10,
    imageURL:
      "https://images.pexels.com/photos/6943095/pexels-photo-6943095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    location: "Jaipur",
    packages: 8,
    imageURL:
      "https://images.pexels.com/photos/6943095/pexels-photo-6943095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    location: "Agra",
    packages: 6,
    imageURL:
      "https://images.pexels.com/photos/6943095/pexels-photo-6943095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    location: "Kerala ",
    packages: 10,
    imageURL:
      "https://images.pexels.com/photos/6943095/pexels-photo-6943095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    location: "Ladakh ",
    packages: 8,
    imageURL:
      "https://images.pexels.com/photos/6943095/pexels-photo-6943095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    location: "Rajasthan",
    packages: 12,
    imageURL:
      "https://www.holidify.com/images/bg/rajasthan-attractions/thumbnail/Qm0yNDc2NTI5MjY0.jpg",
  },
  {
    location: "HimachalPradesh",
    packages: 10,
    imageURL:
      "https://images.pexels.com/photos/6943095/pexels-photo-6943095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    location: "TamilNadu ",
    packages: 8,
    imageURL:
      "https://images.pexels.com/photos/6943095/pexels-photo-6943095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    location: "Andaman Islands ",
    packages: 6,
    imageURL:
      "https://images.pexels.com/photos/6943095/pexels-photo-6943095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    location: "Kashmir ",
    packages: 8,
    imageURL:
      "https://images.pexels.com/photos/6943095/pexels-photo-6943095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    location: "Darjeeling, Sikkim",
    packages: 6,
    imageURL:
      "https://images.pexels.com/photos/6943095/pexels-photo-6943095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    location: "Varanasi",
    packages: 4,
    imageURL:
      "https://images.pexels.com/photos/6943095/pexels-photo-6943095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    location: "Rishikesh",
    packages: 4,
    imageURL:
      "https://images.pexels.com/photos/6943095/pexels-photo-6943095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const pageData = [
  {
    title: "Trending",
    path: "/logos/btn_group/trending.png",
    funParam: "trending",
  },
  {
    title: "Adventure",
    path: "/logos/btn_group/adventure.png",
    funParam: "famous",
  },
  {
    title: "Couples",
    path: "/logos/btn_group/couple.png",
    funParam: "budget_friendly",
  },
  {
    title: "Seasonal",
    path: "/logos/btn_group/seasonal.png",
    funParam: "allSeason",
  },
];

// carousel images
const slideContent = [
  {
    url: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: 25,
  },
  {
    url: "https://images.unsplash.com/photo-1569949380643-6e746ecaa3bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: 24,
  },
  {
    url: "https://images.unsplash.com/photo-1669111958117-6f3d7c57abc1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: 22,
  },
  {
    url: "https://images.unsplash.com/photo-1527305265013-ddd1054521d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: 23,
  },
  {
    url: "https://images.unsplash.com/photo-1669111960736-697cffeaec08?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: 21,
  },
];

//--------Reviews------
const reviews = [
  // Dummy review data
  {
    id: 1,
    name: "John Doe",
    date: "Oct 22, 2023",
    rating: 5,
    place: "haridwar",
    comment: "Amazing experience, our guide was knowledgeable and friendly!",
    avatar: "https://i.pravatar.cc/300?img=1", // Placeholder avatar image URL
  },
  {
    id: 1,
    name: "John Doe",
    date: "Oct 22, 2023",
    rating: 5,
    place: "haridwar",
    comment: "Amazing experience, our guide was knowledgeable and friendly!",
    avatar: "https://i.pravatar.cc/300?img=1", // Placeholder avatar image URL
  },
  {
    id: 1,
    name: "John Doe",
    date: "Oct 22, 2023",
    rating: 5,
    place: "haridwar",
    comment: "Amazing experience, our guide was knowledgeable and friendly!",
    avatar: "https://i.pravatar.cc/300?img=1", // Placeholder avatar image URL
  },
  {
    id: 1,
    name: "John Doe",
    date: "Oct 22, 2023",
    rating: 5,
    place: "haridwar",
    comment: "Amazing experience, our guide was knowledgeable and friendly!",
    avatar: "https://i.pravatar.cc/300?img=1", // Placeholder avatar image URL
  },
  {
    id: 1,
    name: "John Doe",
    date: "Oct 22, 2023",
    rating: 5,
    place: "haridwar",
    comment: "Amazing experience, our guide was knowledgeable and friendly!",
    avatar: "https://i.pravatar.cc/300?img=1", // Placeholder avatar image URL
  },
  {
    id: 1,
    name: "John Doe",
    date: "Oct 22, 2023",
    rating: 5,
    place: "haridwar",
    comment: "Amazing experience, our guide was knowledgeable and friendly!",
    avatar: "https://i.pravatar.cc/300?img=1", // Placeholder avatar image URL
  },
  // More reviews...
];
// blog content
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
    cover_image:
      "https://i.pinimg.com/564x/dc/71/34/dc7134cb07904cdc754065a4093fb73e.jpg",
    credit: "Photo by Jane Doe",
    description:
      "Escape to the idyllic beaches and crystal-clear waters of the Maldives, where luxury meets natural beauty. Dive into the vibrant coral reefs, unwind in overwater bungalows, and indulge in world-class dining for the ultimate tropical getaway.",
  },
  {
    title: "Rishikesh, ganga, Uttrakhand",
    cover_image:
      "https://i.pinimg.com/564x/36/2e/54/362e5407723ff06cd4f7889d222811f1.jpg",
    credit: "Photo by Zero",
    description:
      "I literally left a part of me there, and now I just wanna visit over n over again..🥺🤌🏼🕉️",
  },
];

export  { destinations, allSeason, reviews };
