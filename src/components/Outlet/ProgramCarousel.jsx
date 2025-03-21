import React, { useState, useEffect, useRef } from "react";

const ProgramCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);
  const [userInteracting, setUserInteracting] = useState(false);
  const autoSwipeTimerRef = useRef(null);

  const programs = [
    {
      title: "Senior K.G.",
      age: "4.5 - 5.5 Year",
      image:
        "https://walnut.school/wp-content/uploads/2015/06/Jr-and-Sr-2015-photos-3-e1434040854560-900x546.jpg",
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
        "https://www.kidsplanetdaynurseries.co.uk/wp-content/uploads/2022/06/AdobeStock_96253396-2.jpeg",
      color: "#F5F5FF",
      description:
        "Our Nursery program bridges play and early education, introducing children to foundational concepts through creative play, storytelling, and interactive learning experiences.",
    },
  ];

  // Preload images
  useEffect(() => {
    programs.forEach((program) => {
      const img = new Image();
      img.src = program.image;
    });
  }, []);

  // Function to handle auto swiping
  const startAutoSwipe = () => {
    if (autoSwipeTimerRef.current) {
      clearInterval(autoSwipeTimerRef.current);
    }

    autoSwipeTimerRef.current = setInterval(() => {
      if (!userInteracting && expandedCard === null && !isAnimating) {
        handleNext();
      }
    }, 3000); // Auto swipe every 3 seconds
  };

  // Initialize auto swipe on component mount
  useEffect(() => {
    startAutoSwipe();

    // Cleanup interval on unmount
    return () => {
      if (autoSwipeTimerRef.current) {
        clearInterval(autoSwipeTimerRef.current);
      }
    };
  }, [userInteracting, expandedCard, isAnimating]);

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
    setUserInteracting(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (expandedCard !== null) return;
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }

    // Reset user interaction flag after a short delay
    setTimeout(() => {
      setUserInteracting(false);
    }, 1000);
  };

  const handleMouseEnter = () => {
    setUserInteracting(true);
  };

  const handleMouseLeave = () => {
    setUserInteracting(false);
  };

  const handleCardClick = (index) => {
    if (expandedCard === index) {
      setExpandedCard(null);
    } else {
      setExpandedCard(index);
    }
  };

  // Handle arrow button clicks
  const handleArrowClick = (direction) => {
    setUserInteracting(true);

    if (direction === "next") {
      handleNext();
    } else {
      handlePrev();
    }

    // Reset user interaction flag after a short delay
    setTimeout(() => {
      setUserInteracting(false);
    }, 1000);
  };

  // Close expanded card when Escape key is pressed
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape" && expandedCard !== null) {
        setExpandedCard(null);
      }
    };
    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [expandedCard]);

  return (
    <div className="min-h-screen bg-sky-50 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="text-center mb-8">
        <h2 className="text-red-500 font-bold text-2xl mb-2">OUR PROGRAMS</h2>
        <h1 className="text-4xl font-bold text-purple-900">
          Program Packages For Kids
        </h1>
      </div>

      {/* Expanded Card Modal */}
      {expandedCard !== null && (
        <div
          className="fixed inset-0 backdrop-blur-md bg-sky-50 bg-opacity-70 z-40 flex items-center justify-center p-4"
          onClick={() => setExpandedCard(null)}
        >
          <div
            className="bg-white rounded-lg w-full max-w-lg transform transition-all duration-500 ease-in-out animate-rise shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={programs[expandedCard].image}
                alt={programs[expandedCard].title}
                className="w-full h-64 object-cover rounded-t-lg"
                onError={(e) => {
                  e.target.src = "/api/placeholder/400/300";
                }}
              />
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
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Navigation Arrows */}
        {expandedCard === null && (
          <div className="flex justify-between items-center absolute top-1/2 w-full z-10 px-4 transform -translate-y-1/2">
            <button
              onClick={() => handleArrowClick("prev")}
              className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all"
              aria-label="Previous program"
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
              onClick={() => handleArrowClick("next")}
              className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all"
              aria-label="Next program"
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

        {/* Carousel Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((program, idx) => {
            const position =
              (idx - activeIndex + programs.length) % programs.length;
            return (
              <div
                key={idx}
                className={`transform transition-all duration-500 ease-in-out cursor-pointer ${
                  expandedCard !== null ? "opacity-0 pointer-events-none" : ""
                } ${
                  position === 0
                    ? "scale-100 opacity-100 z-10"
                    : position === 1 || position === programs.length - 1
                    ? "scale-95 opacity-70"
                    : "scale-90 opacity-50"
                }`}
                onClick={() => handleCardClick(idx)}
              >
                <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="relative h-48">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "/api/placeholder/400/300";
                      }}
                    />
                  </div>
                  <div
                    className="p-6 rounded-b-lg"
                    style={{ backgroundColor: program.color }}
                  >
                    <h3 className="text-2xl font-bold text-purple-900 mb-2">
                      {program.title}
                    </h3>
                    <div className="w-16 h-1 bg-red-400 rounded mb-4"></div>
                    <p className="text-gray-700 mb-4">
                      <span className="font-bold">Age:</span> {program.age}
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

        {/* Pagination Dots */}
        <div
          className={`flex justify-center mt-6 ${
            expandedCard !== null ? "opacity-0" : "opacity-100"
          } transition-opacity duration-300`}
        >
          {programs.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setUserInteracting(true);
                setActiveIndex(idx);
                setTimeout(() => {
                  setUserInteracting(false);
                }, 1000);
              }}
              className={`mx-1 w-3 h-3 rounded-full transition-all ${
                idx === activeIndex ? "bg-red-500 w-6" : "bg-gray-300"
              }`}
              aria-label={`Go to program ${idx + 1}`}
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
