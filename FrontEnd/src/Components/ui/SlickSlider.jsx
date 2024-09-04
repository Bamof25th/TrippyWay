import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SlickSlider = ({ children }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container mx-auto p-4 relative z-0">
      {/*  render your components here */}
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default SlickSlider;

// custum arrows

const CustomPrevArrow = ({ onClick }) => {
  return (
    <button
      className="absolute  h-10 w-10 flex items-center justify-center top-1/2 left-2 lg:left-4 transform -translate-y-1/2 z-10 hover:text-white text-black p-2 rounded-full shadow-lg hover:bg-emerald-700 transition-all focus:outline-none"
      onClick={onClick}
    >
      <FaChevronLeft />
    </button>
  );
};

const CustomNextArrow = ({ onClick }) => {
  return (
    <button
      className="absolute h-10 w-10 flex items-center justify-center top-1/2 right-2 lg:right-4 transform -translate-y-1/2 z-10 hover:text-white text-black p-2 rounded-full shadow-lg  hover:bg-emerald-700 transition-all focus:outline-none"
      onClick={onClick}
    >
      <FaChevronRight />
    </button>
  );
};
