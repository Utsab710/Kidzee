import React, { useState, useEffect } from "react";

function Slider({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-play the slider
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [currentSlide]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full flex flex-row items-center bg-violet-200 relative"
          >
            {/* Left side - Text content */}
            <div className="w-full md:w-1/2 pt-12 pb-16 px-8 md:pl-16">
              <div className="ml-0">
                <p className="text-red-600 font-bold mb-4">{slide.subtitle}</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-purple-900 mb-8">
                  {slide.title}
                </h1>
                <button className="bg-red-500 hover:bg-red-600 text-white py-3 px-10 rounded-md font-medium">
                  {slide.buttonText}
                </button>
              </div>
            </div>

            {/* Right side - Image content */}
            <div className="hidden md:block w-1/2 relative">
              {/* Full width curved background */}
              <div className="absolute inset-0 z-10 overflow-hidden">
                <div className="absolute right-0 top-0 bg-amber-300 w-[95%] h-full rounded-l-full"></div>
              </div>

              {/* Cloud positioned near the top - above the circle */}
              <div className="absolute top-0 left-10 z-30">
                <img
                  src="https://kidzeeboudha.com/assets/site/img/main-banner/image-clound.png"
                  alt="Cloud"
                  className="w-auto floating-cloud"
                />
              </div>

              {/* White cloud near student - above the circle */}
              <div className="absolute top-72 right-64 z-30">
                <img
                  src="https://kidzeeboudha.com/assets/site/img/main-banner/image-clound.png"
                  alt="Cloud"
                  className="w-24 h-auto"
                />
              </div>

              <div className="relative">
                <div className="inset-0 z-10">
                  {/* Student image */}
                  <img
                    src={slide.imageUrl}
                    alt="Student"
                    className="w-full md:w-auto lg:w-auto mx-auto relative z-20"
                  />
                </div>

                {/* Owl positioned at bottom right */}
                <div className="absolute bottom-0 left-0 z-20">
                  <img
                    src="https://kidzeeboudha.com/assets/site/img/main-banner/banner-shape-4.png"
                    alt="Owl"
                    className="w-20 floating-owl"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full shadow-md hover:bg-opacity-75"
        onClick={prevSlide}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full shadow-md hover:bg-opacity-75"
        onClick={nextSlide}
      >
        &gt;
      </button>
    </div>
  );
}

export default Slider;
