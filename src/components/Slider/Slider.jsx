import React, { useState, useEffect } from "react";
import Button from "../Button/Button";

function Slider({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="relative w-full max-w-full overflow-x-hidden overflow-y-hidden h-[600px]">
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full flex flex-row items-center bg-violet-200 relative h-full"
          >
            <div className="w-full md:w-1/2 pt-12 pb-16 px-8 md:pl-16">
              <div className="ml-0">
                <p className="text-red-600 font-bold mb-4">{slide.subtitle}</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-purple-900 mb-8">
                  {slide.title}
                </h1>
                <a href="https://www.facebook.com/Kidzeeboudha" target="_blank">
                  <Button
                    text={slide.buttonText}
                    className="bg-red-500 hover:bg-red-600 py-3 px-10 rounded-md"
                  />
                </a>
              </div>
            </div>
            <div className="hidden md:block w-1/2 relative max-w-full h-full">
              <div className="absolute inset-0 z-10 overflow-hidden">
                <div className="absolute right-0 top-0 bg-amber-300 w-[95%] h-full rounded-l-full"></div>
              </div>
              <div className="absolute top-0 left-10 z-30">
                <img
                  src="https://kidzeeboudha.com/assets/site/img/main-banner/image-clound.png"
                  alt="Cloud"
                  className="w-auto floating-cloud"
                />
              </div>
              <div className="absolute top-72 right-64 z-30">
                <img
                  src="https://kidzeeboudha.com/assets/site/img/main-banner/image-clound.png"
                  alt="Cloud"
                  className="w-24 h-auto"
                />
              </div>
              <div className="relative h-full">
                <div className="inset-0 z-10">
                  <img
                    src={slide.imageUrl}
                    alt="Student"
                    className="w-full md:w-auto lg:w-auto mx-auto relative z-20 max-w-full h-full object-cover"
                  />
                </div>
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
