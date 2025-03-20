import React, { useState, useEffect } from "react";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full lg:w-1/2 relative h-96 md:h-[550px]">
      <div className="relative h-full flex items-center justify-center gap-4">
        {/* Left Image */}
        <div className="h-4/5 w-1/3 rounded-2xl overflow-hidden shadow-xl flex justify-end">
          <img
            src={images[currentIndex].left}
            alt="Children playing with blocks"
            className="w-full h-full object-cover object-left-top transition-opacity duration-500"
          />
        </div>

        {/* Middle Image - Taller */}
        <div className="h-full w-1/3 rounded-2xl overflow-hidden shadow-xl mt-12">
          <img
            src={images[currentIndex].middle}
            alt="Teacher with child"
            className="w-full h-full object-cover transition-opacity duration-500"
          />
        </div>

        {/* Right Image */}
        <div className="h-4/5 w-1/3 rounded-2xl overflow-hidden shadow-xl">
          <img
            src={images[currentIndex].right}
            alt="Children at table with blocks"
            className="w-full h-full object-cover object-right-top transition-opacity duration-500"
          />
        </div>
      </div>

      {/* Optional: Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
