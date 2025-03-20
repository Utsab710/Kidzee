import React, { useState, useEffect } from "react";

const CurriculumShowcase = () => {
  const [rotation, setRotation] = useState(0);
  const [hoveredElement, setHoveredElement] = useState(null);

  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setRotation((prev) => (prev + 0.1) % 360);
    }, 50);

    return () => clearInterval(rotationInterval);
  }, []);

  // Define curriculum elements
  const curriculumElements = [
    {
      name: "Literacy",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-teal-600">
          <path d="M12,5C11.5,5 11,5.2 10.6,5.6C10.2,6 10,6.5 10,7C10,7.5 10.2,8 10.6,8.4C11,8.8 11.5,9 12,9C12.5,9 13,8.8 13.4,8.4C13.8,8 14,7.5 14,7C14,6.5 13.8,6 13.4,5.6C13,5.2 12.5,5 12,5M16,7C16,8.1 15.6,9 14.8,9.8C14,10.6 13.1,11 12,11C10.9,11 10,10.6 9.2,9.8C8.4,9 8,8.1 8,7C8,5.9 8.4,5 9.2,4.2C10,3.4 10.9,3 12,3C13.1,3 14,3.4 14.8,4.2C15.6,5 16,5.9 16,7M5,20V22H19V20H5M11.3,12.9C10.6,12.3 10.2,12 10,12L10,19L17,19V17.7L11.3,12.9M17,12C15.8,12 15,11.6 14.2,10.8C13.4,10 13,8.9 13,7.7C12.7,7.9 12.4,8 12,8C11.6,8 11.3,7.9 11,7.7C11,8.9 10.6,10 9.8,10.8C9,11.6 8.2,12 7,12V19H8V13.6C8.2,13.4 8.6,13 9.2,12.5C9.8,12 10.1,11.7 10.1,11.7L16.4,19H19V12H17Z" />
        </svg>
      ),
      color: "bg-teal-50",
      borderColor: "border-teal-200",
    },
    {
      name: "Math",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-amber-600">
          <path d="M7,2H17A2,2 0 0,1 19,4V20A2,2 0 0,1 17,22H7A2,2 0 0,1 5,20V4A2,2 0 0,1 7,2M7,4V8H17V4H7M7,10V12H9V10H7M11,10V12H13V10H11M15,10V12H17V10H15M7,14V16H9V14H7M11,14V16H13V14H11M15,14V16H17V14H15M7,18V20H9V18H7M11,18V20H13V18H11M15,18V20H17V18H15Z" />
        </svg>
      ),
      color: "bg-amber-50",
      borderColor: "border-amber-200",
    },
    {
      name: "Art",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-rose-600">
          <path d="M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2C17.5,2 22,6 22,11A6,6 0 0,1 16,17H14.2C13.9,17 13.7,17.2 13.7,17.5C13.7,17.6 13.8,17.7 13.8,17.8C14.2,18.3 14.4,18.9 14.4,19.5C14.4,20.9 13.3,22 12,22M5.5,11C6.3,11 7,10.3 7,9.5C7,8.7 6.3,8 5.5,8C4.7,8 4,8.7 4,9.5C4,10.3 4.7,11 5.5,11M9.5,5C10.3,5 11,4.3 11,3.5C11,2.7 10.3,2 9.5,2C8.7,2 8,2.7 8,3.5C8,4.3 8.7,5 9.5,5M14.5,5C15.3,5 16,4.3 16,3.5C16,2.7 15.3,2 14.5,2C13.7,2 13,2.7 13,3.5C13,4.3 13.7,5 14.5,5M18.5,8C19.3,8 20,7.3 20,6.5C20,5.7 19.3,5 18.5,5C17.7,5 17,5.7 17,6.5C17,7.3 17.7,8 18.5,8M18.5,11C19.3,11 20,10.3 20,9.5C20,8.7 19.3,8 18.5,8C17.7,8 17,8.7 17,9.5C17,10.3 17.7,11 18.5,11M4,13.2C4,12.6 4.2,12.1 4.6,11.7L3.2,10.3C2.4,11.1 2,12.1 2,13.2C2,14.9 3,16.3 4.5,16.8L5.2,15C4.5,14.7 4,14 4,13.2M20.5,15C21.9,15 23,13.9 23,12.5C23,11.1 21.9,10 20.5,10C19.1,10 18,11.1 18,12.5C18,13.9 19.1,15 20.5,15Z" />
        </svg>
      ),
      color: "bg-rose-50",
      borderColor: "border-rose-200",
    },
    {
      name: "Sport",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-red-600">
          <path d="M12.5,1L9.66,4.73C9.61,4.78 9.57,4.85 9.54,4.92L7.83,10.28L5,11V13H6.85L6.5,14H4L3,16L4.5,17.5L6,16.5L8,18L9,17L7.5,15.5L7.8,14L9.5,14C10.29,14 10.92,13.43 11,12.66C11,12.47 11,12.33 10.95,12.19L12.2,7.81C12.23,7.74 12.25,7.66 12.25,7.59C12.25,7.41 12.18,7.25 12.08,7.11L14.19,4.44L15.42,5.38C15.55,5.56 15.77,5.66 16.08,5.66C16.19,5.66 16.31,5.63 16.44,5.56C16.75,5.41 16.91,5.15 16.94,4.75L17.12,2.13L14.5,2.25C14.1,2.28 13.85,2.44 13.7,2.75C13.56,3.06 13.63,3.37 13.9,3.66L12.5,1M21,11V13H19.5L19,16H17L16.5,13.5L13,16L12,15L15.5,11.5C15,11 15,10 16,9.5C17,9 18,10 17.5,11.5L21,11M9.7,13.41C9.57,13.41 9.45,13.36 9.32,13.29C9.2,13.18 9.13,13.05 9.13,12.87C9.13,12.67 9.2,12.5 9.32,12.38C9.45,12.25 9.59,12.19 9.78,12.19C9.96,12.19 10.11,12.26 10.21,12.38C10.32,12.5 10.38,12.66 10.38,12.86C10.38,13.04 10.32,13.19 10.21,13.31C10.09,13.38 9.9,13.41 9.7,13.41Z" />
        </svg>
      ),
      color: "bg-red-50",
      borderColor: "border-red-200",
    },
    {
      name: "Gardening",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-green-600">
          <path d="M15.5,22H8.5C8.22,22 8,21.78 8,21.5V20H16V21.5C16,21.78 15.78,22 15.5,22M19.5,3.5L18,2L16.5,3.5L15,2L13.5,3.5L12,2L10.5,3.5L9,2L7.5,3.5L6,2L4.5,3.5L3,2V16H21V2L19.5,3.5M5,5H18.95V5.03C19.39,5.13 19.74,5.38 20,5.73V6H5V5M5,7H20V8H5V7M5,9H20V10H5V9M5,11H20V12H5V11M5,13H20V14H5V13" />
        </svg>
      ),
      color: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      name: "Outdoor",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-emerald-600">
          <path d="M11,5A1,1 0 0,1 10,4C10,2.89 10.9,2 12,2C13.1,2 14,2.9 14,4A1,1 0 0,1 13,5A1,1 0 0,1 12.93,5H12.83C11.69,5 11,6.79 11,8.5V11H13V8.5C13,7.32 13.25,6.13 13.78,5.21C13.86,5.14 13.93,5.07 14,5A2,2 0 0,0 16,3A2,2 0 0,0 14,1A2,2 0 0,0 12,3A2,2 0 0,0 14,5A7.35,7.35 0 0,0 13.75,5.71A8.92,8.92 0 0,0 11.79,5.47A10.31,10.31 0 0,0 11,5M21.5,21.5L16,16H15V14.91C19.31,14.5 23,12.57 23,9.97C23,7.72 20.61,5.93 16.86,5.41A8.63,8.63 0 0,1 16.96,5.67C18.06,6.06 19.04,6.57 19.77,7.16C20.5,7.75 21,8.42 21,9.12C21,10.34 19.5,11.5 17,11.97V9.97H15V14H11V16H10.5L5,21.5L3.5,20L9,14.5V12.97C5.5,12.5 3,11.34 3,9.12C3,7.96 4.96,6.06 8.34,5.45C8.94,4.49 9.66,3.91 10,3.5C8.04,4.07 4,5.89 4,9.12C4,11.71 7.69,13.57 12,13.97V15H13V13.97C13.04,13.97 13.09,13.97 13.13,13.97C13.59,13.97 14.03,13.94 14.5,13.9L15,14.89V16H14L8.5,21.5L10,23L15.5,17.5L17,19L21.5,14.5L23,16L21.5,17.5L20,16L15.5,20.5L14,19L11.5,21.5L10,20L13.23,16.77C13.42,16.77 13.61,16.76 13.8,16.75L16.23,19.18L17.73,17.68L15.24,15.18C15.41,15.17 15.58,15.15 15.75,15.13L18.73,18.1L20.24,16.61L17.24,13.61C17.33,13.6 17.42,13.6 17.5,13.58L20.5,16.57L22,15.07L18.93,12L20.76,10.17L22.26,11.67L21.67,12.26C22.45,11.95 23,11.42 23,10.83C23,6.2 16.5,5 16.5,5C16.5,5 10,5.2 10,9.83C10,10.42 10.55,10.95 11.33,11.26L10.73,11.86L9.24,10.37L11.07,8.55L8,5.5V7H6V3H10V5H8.07L11.07,8L12.57,6.5L15.57,9.5C15.58,9.42 15.59,9.33 15.59,9.25L13.18,6.85L14.68,5.35L17.12,7.78C17.13,7.61 17.15,7.43 17.15,7.25L14.72,4.82L16.22,3.32L18.73,5.83C18.76,5.61 18.77,5.39 18.77,5.17L16.37,2.77L17.87,1.27L21.5,4.9L20,6.4L16.4,2.8C16.07,2.89 15.73,3 15.37,3.09L18,5.75C17.45,5.54 16.8,5.35 16.03,5.19L14.33,3.5C14.04,3.5 13.8,3.54 13.59,3.58L15,5C14.71,5.05 14.44,5.12 14.19,5.19L13.27,4.27C13.07,4.36 12.89,4.46 12.72,4.58L13.33,5.2L12.35,5.5H12C11.23,5.5 10.53,5.73 10,6.12C9.85,6.23 9.74,6.35 9.67,6.5C9.73,6.5 9.78,6.5 9.84,6.5H9.95L11,8.07V5.12C10.87,5.3 10.75,5.5 10.66,5.7C10.77,5.61 10.89,5.53 11,5.44V5M14,9V7H16V9H14Z" />
        </svg>
      ),
      color: "bg-emerald-50",
      borderColor: "border-emerald-200",
    },
    {
      name: "Excursions",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-blue-600">
          <path d="M18,10H6V5H18M18,3H6C4.9,3 4,3.9 4,5V17H6V19H8V17H16V19H18V17H20V5C20,3.9 19.1,3 18,3M14.5,16C13.67,16 13,15.33 13,14.5C13,13.67 13.67,13 14.5,13C15.33,13 16,13.67 16,14.5C16,15.33 15.33,16 14.5,16M9.5,16C8.67,16 8,15.33 8,14.5C8,13.67 8.67,13 9.5,13C10.33,13 11,13.67 11,14.5C11,15.33 10.33,16 9.5,16Z" />
        </svg>
      ),
      color: "bg-blue-50",
      borderColor: "border-blue-200",
    },
  ];

  const numberOfElements = curriculumElements.length;
  const radius = 180; // Radius for the orbiting elements

  return (
    <div className="min-h-screen bg-sky-50 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 mb-8 text-center tracking-tight">
            INTERACTIVE iLLUME BASED CURRICULUM
          </h1>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left column: Text content */}
          <div className="w-full lg:w-2/5 mb-12 lg:mb-0 lg:pr-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                About Our Curriculum
              </h2>
              <div className="text-gray-600 space-y-6">
                <p>
                  Interactive iLLUME is developed by Kidzee after undertaking
                  research and content development for 2 years. The new
                  curriculum is age appropriate and contextual making it easy
                  for child to understand.
                </p>

                <p>
                  Interactive iLLUME is a unique methodology covering an
                  'English Readiness Programme' where reading, writing and
                  comprehension are all fully addressed to help children learn
                  oral and written English.
                </p>

                <p>
                  It includes a specially designed 'School Readiness' programme
                  enabling the child to acquire language, mathematical,
                  cognitive, social and emotional skills at an early age.
                </p>

                <p>
                  The phonic programme, as part of this new curriculum, will
                  help children learn through a multisensory approach by using
                  VAK (Visual, Audio and Kinetics) methodology.
                </p>
              </div>

              <div className="mt-8">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <span className="font-medium">Learn More</span>
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: Rotating Curriculum Elements */}
          <div className="w-full lg:w-3/5 relative h-[36rem]">
            {/* Container for rotation */}
            <div className="absolute left-1/2 top-1/2 w-full h-full">
              {/* Center element - Fixed and doesn't rotate */}
              <div className="absolute  transform -translate-x-1/2 -translate-y-1/2 text-center z-30">
                <div className="w-40 h-40 rounded-full bg-purple-100 border border-purple-300 flex items-center justify-center shadow-lg">
                  <div>
                    <h2 className="text-xl font-bold text-purple-900">
                      Curriculum Elements
                    </h2>
                    <div className="h-1 w-20 bg-blue-400 mx-auto mt-2"></div>
                  </div>
                </div>
              </div>

              {/* Rotating elements */}
              <div
                className="absolute  w-full h-full"
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
                }}
              >
                {curriculumElements.map((element, index) => {
                  const angle = (index / numberOfElements) * 2 * Math.PI;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;

                  return (
                    <div
                      key={element.name}
                      className="absolute"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: `translate(-50%, -50%) rotate(${-rotation}deg)`, // Counter-rotate to keep elements upright
                        zIndex: hoveredElement === index ? 20 : 10,
                      }}
                      onMouseEnter={() => setHoveredElement(index)}
                      onMouseLeave={() => setHoveredElement(null)}
                    >
                      <div
                        className={`${element.color} border ${element.borderColor} rounded-full p-5 flex flex-col items-center justify-center w-28 h-28 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110`}
                      >
                        <div className="mb-2">{element.icon}</div>
                        <p className="text-gray-700 font-medium text-center">
                          {element.name}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full z-0">
              <div className="absolute top-10 right-10 w-64 h-64 bg-blue-50 rounded-full opacity-30 blur-xl"></div>
              <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-50 rounded-full opacity-30 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumShowcase;
