import React, { useState, useEffect } from "react";
import { IoPersonOutline } from "react-icons/io5";

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Ramesh Lama",
      role: "Parent",

      text: "We are blessed to have our child at Kidzee Boudha. I am grateful for the loving care that Kidzee staff shower on him. The genuine affection that staff show the children at the school truly makes Kidzee a second home. Children participate in programs and activities that encourage them to engage, question and analyze the world around them, thereby enriching their lives.",
    },
    {
      id: 2,
      name: "Rojina Shrestha",
      role: "Parent",
      image: "/api/placeholder/80/80",
      text: "The thing I love the most about Kidzee Boudha is that the teachers and staff truly care about and love my children. I could think of no better place to give my kids a head start in life.",
    },
    {
      id: 3,
      name: "Suman Thapa",
      role: "Parent",
      image: "/api/placeholder/80/80",
      text: "Kidzee has transformed my child's approach to learning. The interactive teaching methods and focus on holistic development have helped my son become more confident and curious about the world.",
    },
  ];

  // Handle scroll for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Auto-slide testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 overflow-hidden py-16">
      {/* Animated blobs */}
      <div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-pink-200 opacity-30 blur-xl"
        style={{
          transform: `translate(${scrollY * 0.05}px, ${-scrollY * 0.02}px)`,
          transition: "transform 0.3s ease-out",
        }}
      />
      <div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-200 opacity-30 blur-xl"
        style={{
          transform: `translate(${-scrollY * 0.08}px, ${scrollY * 0.03}px)`,
          transition: "transform 0.3s ease-out",
        }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-purple-200 opacity-20 blur-xl"
        style={{
          transform: `translate(${scrollY * 0.03}px, ${scrollY * 0.06}px)`,
          transition: "transform 0.3s ease-out",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div
          className="text-center mb-12 opacity-0 animate-fade-in"
          style={{ animation: "fadeIn 1s forwards" }}
        >
          <p className="text-red-500 font-semibold mb-2">TESTIMONIAL</p>
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900">
            What parents say?
          </h2>
        </div>

        {/* Testimonials carousel */}
        <div className="relative max-w-5xl mx-auto mt-20">
          <div className="relative min-h-[300px] overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute top-0 left-0 w-full transition-all duration-700 ease-in-out px-4 ${
                  index === activeIndex
                    ? "opacity-100 translate-x-0"
                    : index < activeIndex
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
                }`}
              >
                <div className="bg-white rounded-lg shadow-xl p-6 md:p-10 relative">
                  {/* Quote icon */}
                  <div className="absolute top-0 right-10 text-red-400 text-8xl font-serif -mt-6">
                    "
                  </div>

                  {/* Profile */}
                  <div className="flex items-center mb-6">
                    <div className="relative w-16 h-16 mr-4">
                      <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500 rounded-full p-0.5">
                        <div className="bg-white p-0.5 rounded-full flex items-center h-full w-full">
                          <IoPersonOutline
                            size={40}
                            className="text-gray-700"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>

                  {/* Testimonial text */}
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-gray-600 w-6" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s forwards;
        }
      `}</style>
    </div>
  );
};

export default TestimonialSection;
