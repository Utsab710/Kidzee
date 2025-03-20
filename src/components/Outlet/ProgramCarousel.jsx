import React, { useState, useEffect } from "react";

const ProgramCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);
  const [imageErrors, setImageErrors] = useState({});
  const [imagesLoaded, setImagesLoaded] = useState({});

  // Using your external image URLs
  const programs = [
    {
      title: "Senior K.G.",
      age: "4.5 - 5.5 Year",
      image:
        "https://dreambigchildren.com/wp-content/uploads/2021/11/toddler-playgroups.jpeg",
      color: "#FFF5F5",
      description:
        "Our Senior Kindergarten program focuses on preparing children for primary school through structured learning activities, phonics, early mathematics, and social development.",
    },
    {
      title: "Play Group",
      age: "1.5 - 2.5 Year",
      image:
        "https://dreambigchildren.com/wp-content/uploads/2021/11/toddler-playgroups.jpeg",
      color: "#F5F5F5",
      description:
        "The Play Group program creates a nurturing environment where toddlers develop social skills, emotional intelligence, and curiosity through guided play and age-appropriate activities.",
    },
    {
      title: "Nursery",
      age: "2.5 - 3.5 Year",
      image:
        "https://dreambigchildren.com/wp-content/uploads/2021/11/toddler-playgroups.jpeg",
      color: "#F5F5FF",
      description:
        "Our Nursery program bridges play and early education, introducing children to foundational concepts through creative play, storytelling, and interactive learning experiences.",
    },
  ];

  // Preload images when component mounts
  useEffect(() => {
    programs.forEach((program, index) => {
      const img = new Image();
      img.src = program.image;
      img.onload = () => {
        setImagesLoaded((prev) => ({
          ...prev,
          [index]: true,
        }));
      };
      img.onerror = () => {
        handleImageError(index);
      };
    });
  }, []);

  const handleImageError = (key) => {
    setImageErrors((prev) => ({
      ...prev,
      [key]: true,
    }));
  };

  const handleNext = () => {
    if (isAnimating || expandedCard !== null) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === programs.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating || expandedCard !== null) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? programs.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleTouchStart = (e) => {
    if (expandedCard !== null) return;
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (expandedCard !== null) return;
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (Math.abs(diff) > 50) {
      // Minimum swipe distance
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const handleCardClick = (index) => {
    if (expandedCard === index) {
      setExpandedCard(null);
    } else {
      setExpandedCard(index);
    }
  };

  // Handle escape key to close expanded card
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape" && expandedCard !== null) {
        setExpandedCard(null);
      }
    };

    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [expandedCard]);

  // Auto-rotation effect (only when no card is expanded)
  useEffect(() => {
    if (expandedCard !== null) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex, expandedCard]);

  // Function to render image with fallback
  const renderImage = (src, alt, idx, viewType = "card") => {
    const uniqueKey = `${viewType}-${idx}`;

    if (imageErrors[uniqueKey]) {
      return (
        <div className="w-full h-64 flex items-center justify-center bg-gray-200">
          <div className="text-gray-500 text-center p-4">
            <svg
              className="w-12 h-12 mx-auto mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p>Image could not be loaded</p>
          </div>
        </div>
      );
    }

    // Use a forced fallback approach for card images
    if (viewType === "card" && !imagesLoaded[idx]) {
      // Show a loading state while the image is being loaded
      return (
        <div className="w-full h-64 flex items-center justify-center bg-gray-100">
          <div className="text-gray-400 text-center">
            <svg className="w-8 h-8 mx-auto animate-spin" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <p className="mt-2">Loading image...</p>
          </div>
        </div>
      );
    }

    return (
      <img
        key={uniqueKey}
        src={src}
        alt={alt}
        className="w-full h-64 object-cover"
        onError={() => handleImageError(uniqueKey)}
      />
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 relative">
      <div className="text-center mb-8">
        <h2 className="text-red-500 font-bold text-2xl mb-2">OUR PROGRAMS</h2>
        <h1 className="text-4xl font-bold text-purple-900">
          Program Packages For Kids
        </h1>
      </div>

      {/* Overlay for expanded card */}
      {expandedCard !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center p-4"
          onClick={() => setExpandedCard(null)}
        >
          <div
            className="bg-white rounded-lg shadow-2xl w-full max-w-lg transform transition-all duration-500 ease-in-out animate-rise"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              {renderImage(
                programs[expandedCard].image,
                programs[expandedCard].title,
                expandedCard,
                "expanded"
              )}
              <button
                onClick={() => setExpandedCard(null)}
                className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-lg hover:bg-gray-100 transition-all"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div
              className="p-6 rounded-b-lg"
              style={{ backgroundColor: programs[expandedCard].color }}
            >
              <h3 className="text-2xl font-bold text-purple-900 mb-2">
                {programs[expandedCard].title}
              </h3>
              <div className="w-16 h-1 bg-red-400 rounded mb-4"></div>
              <p className="text-gray-700 mb-4">
                <span className="font-bold">Age:</span>{" "}
                {programs[expandedCard].age}
              </p>
              <p className="text-gray-700">
                {programs[expandedCard].description}
              </p>
              <div className="mt-6 flex justify-center">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full transition-all">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        className="relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {expandedCard === null && (
          <div className="flex justify-between items-center absolute top-1/2 w-full z-10 px-4 transform -translate-y-1/2">
            <button
              onClick={handlePrev}
              className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        )}

        <div
          className={`flex transition-transform duration-500 ease-in-out ${
            expandedCard !== null ? "opacity-0" : "opacity-100"
          }`}
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {programs.map((program, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <div className="grid md:grid-cols-3 gap-6">
                {programs.map((item, idx) => {
                  // Calculate position relative to active item
                  const position =
                    (idx - activeIndex + programs.length) % programs.length;
                  return (
                    <div
                      key={idx}
                      className={`transform transition-all duration-500 ease-in-out cursor-pointer ${
                        position === 0
                          ? "scale-100 opacity-100"
                          : position === 1 || position === programs.length - 1
                          ? "scale-95 opacity-70"
                          : "scale-90 opacity-50"
                      }`}
                      onClick={() => handleCardClick(idx)}
                    >
                      <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                        <div className="relative bg-gray-200">
                          {renderImage(item.image, item.title, idx, "card")}
                          <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-10 transition-all flex items-center justify-center">
                            <div className="bg-white bg-opacity-80 rounded-full p-2 transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                              <svg
                                className="w-6 h-6 text-purple-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 15l7-7 7 7"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div
                          className="p-6 rounded-b-lg"
                          style={{ backgroundColor: item.color }}
                        >
                          <h3 className="text-2xl font-bold text-purple-900 mb-2">
                            {item.title}
                          </h3>
                          <div className="w-16 h-1 bg-red-400 rounded mb-4"></div>
                          <p className="text-gray-700">
                            <span className="font-bold">Age:</span> {item.age}
                          </p>
                          <div className="mt-4 flex justify-center">
                            <div className="text-purple-600 font-medium inline-flex items-center">
                              Click to view details
                              <svg
                                className="w-4 h-4 ml-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div
          className={`flex justify-center mt-6 ${
            expandedCard !== null ? "opacity-0" : "opacity-100"
          } transition-opacity duration-300`}
        >
          {programs.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`mx-1 w-3 h-3 rounded-full transition-all ${
                idx === activeIndex ? "bg-red-500 w-6" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes rise {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-rise {
          animation: rise 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ProgramCarousel;
