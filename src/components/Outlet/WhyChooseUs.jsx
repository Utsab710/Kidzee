import React, { useState, useEffect, useRef } from "react";

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Update visibility state based on intersection
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      {
        // Add a root margin to trigger slightly before/after the component enters/exits view
        rootMargin: "0px",
        threshold: 0.1, // Trigger when at least 10% of the element is visible
      }
    );

    // Start observing the component
    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  // Animation for facility cards based on visibility
  const getCardTransform = (index) => {
    const delay = index * 0.1;

    if (isVisible) {
      return {
        transform: "translateY(0) scale(1)",
        opacity: 1,
        transition: `transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${delay}s, opacity 0.8s ease-out ${delay}s`,
      };
    }

    return {
      transform: "translateY(100px) scale(0.9)",
      opacity: 0,
      transition: `transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.8s ease-out`,
    };
  };

  // Parallax background elements
  const facilities = [
    {
      id: 1,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M21.9 8.89l-1.05-4.37c-.22-.9-1-1.52-1.91-1.52H5.05c-.9 0-1.69.63-1.9 1.52L2.1 8.89c-.24 1.02-.02 2.06.62 2.88.08.11.19.19.28.29V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6.94c.09-.09.2-.18.28-.28.64-.82.87-1.87.62-2.89zm-2.99-3.9l1.05 4.37c.1.42.01.84-.25 1.17-.14.18-.44.47-.94.47-.61 0-1.14-.49-1.21-1.14L16.98 5l1.93-.01zM13 5h1.96l.54 4.52c.05.39-.07.78-.33 1.07-.22.26-.54.41-.95.41-.67 0-1.22-.59-1.22-1.31V5zM8.49 9.52L9.04 5H11v4.69c0 .72-.55 1.31-1.29 1.31-.34 0-.65-.15-.89-.41-.25-.29-.37-.68-.33-1.07zm-4.45-.16L5.05 5h1.97l-.58 4.86c-.08.65-.6 1.14-1.21 1.14-.49 0-.8-.29-.93-.47-.27-.32-.36-.75-.26-1.17zM5 19v-6.03c.08.01.15.03.23.03.87 0 1.66-.36 2.24-.95.6.6 1.4.95 2.31.95.87 0 1.65-.36 2.23-.93.59.57 1.39.93 2.29.93.84 0 1.64-.35 2.24-.95.58.59 1.37.95 2.24.95.08 0 .15-.02.23-.03V19H5z" />
        </svg>
      ),
      title: "Outdoor Playground",
      description:
        "Our spacious outdoor playground features age-appropriate equipment, ensuring safe and enjoyable physical activity. The entire area is monitored with 24/7 CCTV coverage for maximum security.",
      color: "blue",
    },
    {
      id: 2,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
        </svg>
      ),
      title: "Transportation Service",
      description:
        "We provide convenient pick-up and drop-off services for your children regardless of distance. Each vehicle is accompanied by a qualified teacher to ensure safety and comfort during transit.",
      color: "green",
    },
    {
      id: 3,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
        </svg>
      ),
      title: "Learning Centers",
      description:
        "Our specially designed learning centers promote cognitive development through play. Each space is equipped with educational materials that encourage curiosity, problem-solving, and creative thinking.",
      color: "yellow",
    },
    {
      id: 4,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H5M7,7H9V9H7V7M11,7H13V9H11V7M15,7H17V9H15V7M7,11H9V13H7V11M11,11H13V13H11V11M15,11H13V13H15V11M7,15H9V17H7V15M11,15H13V17H11V15M15,15H17V17H15V15Z" />
        </svg>
      ),
      title: "Safe Environment",
      description:
        "Child safety is our top priority. Our facilities include secure entry systems, trained staff, regular safety drills, and comprehensive health protocols to create a nurturing environment for your child.",
      color: "red",
    },
  ];

  // Get color styles based on facility color
  const getColorStyles = (color) => {
    const colorMap = {
      blue: {
        bg: "#dbeafe",
        text: "#3b82f6",
        border: "#93c5fd",
      },
      green: {
        bg: "#dcfce7",
        text: "#22c55e",
        border: "#86efac",
      },
      yellow: {
        bg: "#fef9c3",
        text: "#eab308",
        border: "#fde047",
      },
      red: {
        bg: "#fee2e2",
        text: "#ef4444",
        border: "#fca5a5",
      },
    };

    return colorMap[color] || colorMap.blue;
  };

  // Get styles for elements that animate
  const getTitleBadgeStyle = () => {
    return {
      transform: isVisible
        ? "translateY(0) scale(1)"
        : "translateY(-20px) scale(0.95)",
      opacity: isVisible ? 1 : 0,
      transition: "transform 0.5s ease-out, opacity 0.5s ease-out",
    };
  };

  const getHeadingStyle = () => {
    return {
      transform: isVisible ? "translateY(0)" : "translateY(30px)",
      opacity: isVisible ? 1 : 0,
      transition: "transform 0.5s ease-out 0.2s, opacity 0.5s ease-out 0.2s",
    };
  };

  // Enhanced underline animation
  const getUnderlineStyle = () => {
    return {
      width: isVisible ? "100%" : "0%",
      opacity: isVisible ? 1 : 0,
      transition: "width 1.2s ease-in-out 0.4s, opacity 0.8s ease-out 0.4s",
      background:
        "linear-gradient(90deg, transparent 0%, #4f46e5 50%, transparent 100%)",
      backgroundSize: isVisible ? "200% 100%" : "100% 100%",
      backgroundPosition: isVisible ? "right center" : "left center",
      animation: isVisible ? "gradientShift 3s ease infinite" : "none",
    };
  };

  const getButtonStyle = () => {
    return {
      transform: isVisible
        ? "translateY(0) scale(1)"
        : "translateY(20px) scale(0.95)",
      opacity: isVisible ? 1 : 0,
      transition: "transform 0.5s ease-out 0.6s, opacity 0.5s ease-out 0.6s",
    };
  };

  // Enhanced blob animation styles
  const getBlobStyle = (top, left, size, color, delay, rotationSpeed) => {
    return {
      position: "absolute",
      top: `${top}%`,
      left: `${left}%`,
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: "50%",
      backgroundColor: color,
      opacity: isVisible ? 0.15 : 0,
      filter: `blur(${size / 4}px)`,
      transform: isVisible ? "scale(1)" : "scale(0)",
      transition: `transform 1s ease-out ${delay}s, opacity 1s ease-out ${delay}s`,
      animation: isVisible
        ? `float ${rotationSpeed}s ease-in-out infinite alternate, rotate ${
            rotationSpeed * 2
          }s linear infinite`
        : "none",
    };
  };

  return (
    <div ref={componentRef} className="relative overflow-hidden bg-white py-24">
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes float {
          0% {
            transform: translate(0, 0) scale(1);
          }
          100% {
            transform: translate(10px, -10px) scale(1.05);
          }
        }

        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>

      {/* Animated Blob Elements */}
      <div style={getBlobStyle(10, 75, 140, "#a78bfa", 0.2, 82)} />
      <div style={getBlobStyle(60, 10, 180, "#93c5fd", 0.3, 82)} />
      <div style={getBlobStyle(30, 40, 120, "#fde68a", 0.4, 82)} />
      <div style={getBlobStyle(70, 70, 160, "#a7f3d0", 0.5, 82)} />

      {/* Floating Decorative Elements */}
      <div
        className="absolute top-20 right-20 w-16 h-16 rounded-full border-4 border-red-200"
        style={{
          transform: isVisible
            ? `translate(0, 0) rotate(0deg)`
            : `translate(-20px, 20px) rotate(-45deg)`,
          opacity: isVisible ? 0.8 : 0,
          transition: `transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s, opacity 1s ease-out 0.2s`,
          animation: isVisible
            ? "float 6s ease-in-out infinite alternate"
            : "none",
        }}
      />
      <div
        className="absolute bottom-32 left-1/4 w-12 h-12 rounded-full border-4 border-green-200"
        style={{
          transform: isVisible
            ? `translate(0, 0) rotate(0deg)`
            : `translate(20px, -20px) rotate(45deg)`,
          opacity: isVisible ? 0.8 : 0,
          transition: `transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s, opacity 1s ease-out 0.3s`,
          animation: isVisible
            ? "float 8s ease-in-out infinite alternate-reverse"
            : "none",
        }}
      />
      <div
        className="absolute left-20 top-1/3 w-20 h-20 rounded-full border-4 border-blue-200"
        style={{
          transform: isVisible
            ? `translate(0, 0) rotate(0deg)`
            : `translate(20px, 20px) rotate(45deg)`,
          opacity: isVisible ? 0.8 : 0,
          transition: `transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s, opacity 1s ease-out 0.4s`,
          animation: isVisible
            ? "float 7s ease-in-out infinite alternate"
            : "none",
        }}
      />

      {/* Content Container */}
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header with Animation */}
        <div className="text-center mb-16">
          <div
            className="inline-block text-pink-500 px-6 py-1 rounded-full text-sm font-semibold mb-4 bg-pink-50"
            style={getTitleBadgeStyle()}
          >
            WHY CHOOSE US
          </div>
          <h2
            className="text-4xl font-bold text-indigo-900 relative inline-block"
            style={getHeadingStyle()}
          >
            Exceptional Facilities For Your Children
            <div
              className="absolute -bottom-3 left-0 right-0 h-1"
              style={getUnderlineStyle()}
            ></div>
          </h2>
        </div>

        {/* Facility Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => {
            const colorStyles = getColorStyles(facility.color);

            return (
              <div
                key={facility.id}
                className="bg-white rounded-xl p-6 border shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden"
                style={{
                  ...getCardTransform(index),
                  borderColor: colorStyles.border,
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{
                    backgroundColor: colorStyles.bg,
                    color: colorStyles.text,
                  }}
                >
                  <div className="w-10 h-10">{facility.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-indigo-900 mb-2">
                  {facility.title}
                </h3>
                <p className="text-gray-600">{facility.description}</p>

                {/* Animated blob decoration for each card */}
                <div
                  className="absolute -z-10 rounded-full"
                  style={{
                    bottom: "-20%",
                    right: "-20%",
                    width: "180px",
                    height: "180px",
                    backgroundColor: colorStyles.bg,
                    transform: isVisible ? `scale(1)` : `scale(0)`,
                    opacity: isVisible ? 0.2 : 0,
                    transition: `transform 1s cubic-bezier(0.34, 1.56, 0.64, 1) ${
                      index * 0.1 + 0.5
                    }s, opacity 1s ease-out ${index * 0.1 + 0.5}s`,
                    filter: "blur(90px)",
                    animation: isVisible
                      ? `float ${5 + index}s ease-in-out infinite alternate`
                      : "none",
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Learn More Button with Animation */}
        <div className="mt-12 text-center">
          <button
            className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            style={getButtonStyle()}
          >
            <span className="relative z-10">Take a Virtual Tour</span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
