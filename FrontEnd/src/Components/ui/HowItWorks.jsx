import React from "react";

const HowItWorks = () => {
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#00A68B] to-[#00C389]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-white/20 px-3 py-1 text-sm">
                Powered by AI
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Elevate Your Travel Experience
              </h2>
              <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our AI-driven travel agency offers personalized recommendations,
                seamless booking, and unparalleled service to make your
                adventures unforgettable.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center justify-start space-y-4">
              <div className="bg-white/20 rounded-md p-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-8 h-8 text-white"
                >
                  <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">
                Personalized Recommendations
              </h3>
              <p className="text-white/80">Our AI-powered travel assista</p>
            </div>
            <div className="flex flex-col items-center justify-start space-y-4">
              <div className="bg-white/20 rounded-md p-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-8 h-8 text-white"
                >
                  <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Seamless Booking</h3>
              <p className="text-white/80">
                Effortlessly book flights, hotels, and activities with our
                intuitive platform, saving you time and hassle.
              </p>
            </div>
            <div className="flex flex-col items-center justify-start space-y-4">
              <div className="bg-white/20 rounded-md p-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-8 h-8 text-white"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Unparal</h3>
              <p className="text-white/80">Enjoy</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
