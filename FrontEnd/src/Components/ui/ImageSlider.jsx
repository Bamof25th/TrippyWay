import { useEffect, useRef, useState } from "react";
// import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { BsFillCircleFill } from "react-icons/bs";
import { BiCircle } from "react-icons/bi";
// import "../../styles/image-slider.css"

export function ImageSlider({ images, details, dots }) {
  const [imageIndex, setImageIndex] = useState(0);
  const ref = useRef(null);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  }

  useEffect(() => {
    ref.current = setInterval(showNextImage, 5000);
    return () => {
      clearInterval(ref.current);
    };
  }, []);

  return (
    <section
      aria-label="Image Slider"
      style={{ width: "100%", height: "100%", position: "relative" }}
      onMouseEnter={() => clearInterval(ref.current)}
      onMouseLeave={() => {
        ref.current = setInterval(showNextImage, 5000);
      }}
    >
      <a href="#after-image-slider-controls" className="skip-link">
        Skip Image Slider Controls
      </a>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {images.map(({ url, alt }, index) => (
          <>
            <img
              key={url}
              src={url}
              alt={alt}
              aria-hidden={imageIndex !== index}
              className="img-slider-img"
              style={{ translate: `${-100 * imageIndex}%` }}
            />
            {details && (
              <>
                <div
                  style={{
                    position: "absolute",
                    bottom: "5rem",
                    left: "2%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "13px",
                  }}
                >
                  <div className="bg-white-0 backdrop-filter backdrop-blur-3xl bg-opacity-30 border border-gray-100 text-center w-28 h-6 mb-2 rounded-xl overflow-hidden">
                    <span className="text-white">Destination</span>
                  </div>
                  <div className="text-white text-2xl md:text-4xl font-medium ">
                    Explore The Wonders of Hiking
                  </div>
                  <div className=" text-white text-xl font-extralight text-wrap flex w-2/3">
                    An iconic landmarks, this post unveils the secrets that
                    makes this destination a traveler paradise.
                  </div>
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "5rem",
                    right: "3%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "13px",
                  }}
                >
                  <div className=" hidden md:flex gap-4 justify-center items-center text-white text-2xl font-thin">
                    <span className="text-white text-2xl font-thin">Paris</span>
                    • <span> Location </span>
                  </div>
                  <div className="hidden md:flex flex-wrap justify-center items-center gap-1 text-white text-xs ">
                    <span>24 Jan 2024</span> • <span> 10 mins read</span>
                  </div>
                </div>
              </>
            )}
          </>
        ))}
      </div>

      <button
        onClick={showPrevImage}
        className="img-slider-btn"
        style={{ left: 0 }}
        aria-label="View Previous Image"
      >
        {/* <ArrowBigLeft aria-hidden /> */}
      </button>
      <button
        onClick={showNextImage}
        className="img-slider-btn"
        style={{ right: 0 }}
        aria-label="View Next Image"
      >
        {/* <ArrowBigRight aria-hidden /> */}
      </button>

      <div className="flex absolute md:left-5 left-3 bottom-3 gap-1">
        {images.map((_, index) => (
          <button
            key={index}
            className="img-slider-dot-btn"
            aria-label={`View Image ${index + 1}`}
            onClick={() => {
              setImageIndex(index);
            }}
          >
            {dots &&
              (index === imageIndex ? (
                <BsFillCircleFill aria-hidden />
              ) : (
                <BiCircle aria-hidden />
              ))}
          </button>
        ))}
      </div>
      <div id="after-image-slider-controls" />
    </section>
  );
}
