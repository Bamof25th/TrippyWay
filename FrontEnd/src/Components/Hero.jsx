import SearchForm from "./SearchForm";
import { ImageSlider } from "./ui/ImageSlider";

const Hero = ({ data }) => {
  return (
    <div>
      <div className="relative w-full h-[550px]">
        <ImageSlider images={data} details={false} dots={false} />
        <div class="absolute inset-0 bg-gray-700/20 opacity-60 rounded-md"></div>
        <div class="absolute inset-0 flex flex-col gap-3 items-center justify-center ">
          <h2 class="text-white text-5xl font-bold cursor-none">
            Lets Explore Incredible
          </h2>
          <h4 class="text-white text-2xl font-bold cursor-none">
            With TRIPPYWAY
          </h4>
        </div>
        <SearchForm />
      </div>
    </div>
  );
};

export default Hero;
