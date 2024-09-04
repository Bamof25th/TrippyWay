// components/Dashboard.js

import { useState } from "react";
import { useRouter } from "next/router";
import DynamicPageLoader from "@/Components/blogs/DynamicPageLoader";
import { ImageSlider } from "@/Components/ui/ImageSlider";
import { SlidingTabBar } from "@/Components/ui/Tabs";

const dummyImg = [
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

const pageData = [
  {
    title: "All",
    funParam: "trending",
  },
  {
    title: "Famous",
    funParam: "famous",
  },
  {
    title: "Budget-Frendly",
    funParam: "budget_friendly",
  },
  {
    title: "All Season",
    funParam: "allSeason",
  },
];

const Blogs = () => {
  const [selectedPage, setSelectedPage] = useState("trending");
  const [searchPlace, setSearchPlace] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const router = useRouter();

  const handleFieldClick = (page) => {
    setSelectedPage(page);
    router.push(`/blogs/${page}`);
  };

  const handleSearch = () => {
    // Perform search based on searchPlace and searchDate
    console.log("Searching for:", searchPlace, searchDate);
    // You can implement your search logic here
  };

  return (
    <>
      <div className="flex flex-col ">
        {/* searchbar */}
        <div
          className="max-w-[120vw] h-[60vh] m-2 "
          // style={{
          //   backgroundImage: "url('../../../blogbg.jpg')",
          //   backgroundRepeat: "no-repeat",
          //   backgroundPosition: "center",
          //   backgroundSize: "cover",
          // }}
        >
          <ImageSlider images={dummyImg} details={true} dots={true}/>
        </div>

        {/* filters */}
        <div>
          <div className="flex flex-col p-5 gap-3 ml-4">
            <h1 className="font-medium text-3xl">Blog</h1>
            <span className="font-medium text-sm">
              Here we share travel tips , destinantion guides, and stories that
              inspire your next adventure.
            </span>
          </div>
          <div className="mx-5 ">
            {/* <ul className="flex flex-wrap  flex-row item-center text-lg font-extralight md:gap-14 gap-6  ml-6 -mb-px">
            {pageData.map((data, index) => (
              <>
                <div className=" hover:scale-105 hover:underline ">
                  <li
                    className=" md:m-1 md:p-2 h-7 flex items-center rounded-lg  active:underline cursor-pointer"
                    onClick={() => handleFieldClick(data.funParam)}
                    >
                    {data.title}
                  </li>
                </div>
              </>
            ))}
          </ul> */}
            <SlidingTabBar
              data={pageData}
              handleFieldClick={handleFieldClick}
            />
          </div>
        </div>

        {/* selected page */}
        <div className="w-full min-h-screen p-10 flex justify-center ">
          {/* Dynamically load selected page component */}
          {selectedPage && <DynamicPageLoader page={selectedPage} />}

          {/* cta */}
          {/* <div className="w-60 flex fixed h-96 right-10">
            <CTA />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Blogs;

{
  /* <div className="flex flex-col md:flex-row items-center h-full">
              <input
                type="text"
                placeholder="Search Places"
                value={searchPlace}
                onChange={(e) => setSearchPlace(e.target.value)}
                className="mb-2 md:mb-0 mr-0 md:mr-4 px-4 py-2 border rounded focus:outline-none"
              />
              <input
                type="date"
                value={searchDate}
                onChange={(e) => setSearchDate(e.target.value)}
                className="mb-2 md:mb-0 mr-0 md:mr-4 px-4 py-2 border rounded focus:outline-none"
              />
              <button
                onClick={handleSearch}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
              >
                <FaSearch className="md:text-2xl" />
              </button>
            </div> */
}
