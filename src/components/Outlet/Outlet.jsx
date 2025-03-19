import React, { useEffect, useRef, useState } from "react";
import Card from "../Card/Card";
import "./parallax.css";

function Outlet() {
  const cardContainerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  // Card data with appropriate colors matching the first image
  const cardData = [
    {
      id: 1,
      image:
        "https://digitallearning.eletsonline.com/wp-content/uploads/2015/01/preschool.jpg",
      title: "Interactive iLLUME",
      description:
        "Interactive iLLUME, is specifically designed to help children realize their exceptional capabilities in a methodical, synergetic, and self-paced manner.",
      backgroundColor: "#FF6B6B",
    },
    {
      id: 2,
      image:
        "https://kidzeeboudha.com/upload_file/offers/1682071709_7459002_Untitled-1.png",
      title: "Kidzee Teachers",
      description:
        "Our training mechanism is designed to arm teachers with practical and effective techniques, which are best suited for kids.",
      backgroundColor: "#AED75C", // Green color from the first image
    },
    {
      id: 3,
      image:
        "https://firststeps-preschool.com/wp-content/uploads/2024/03/Child-Leadership-Skill.jpg",
      title: "Leadership",
      description:
        "We envision today's children as tomorrow's leadership icons.",
      backgroundColor: "#FFBE0B", // Yellow color from the first image
    },
    {
      id: 4,
      image:
        "https://kidzeeboudha.com/upload_file/offers/1682071709_7459002_Untitled-1.png",
      title: "MI-aided Methodology",
      description:
        "The mi-aided methodology helps children to discover their own creative and aesthetic potential.",
      backgroundColor: "#3ABFF8", // Blue color from the first image
    },
  ];

  useEffect(() => {
    // Create the Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !animationComplete) {
          setIsVisible(true);
        } else if (!entry.isIntersecting && animationComplete) {
          // When we scroll away and come back, we want to reset the animation
          setIsVisible(false);
          setAnimationComplete(false);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    // Observe the card container
    if (cardContainerRef.current) {
      observer.observe(cardContainerRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (cardContainerRef.current) {
        observer.unobserve(cardContainerRef.current);
      }
    };
  }, [animationComplete]);

  // Set animation as complete after all cards have slid in
  useEffect(() => {
    if (isVisible) {
      const timeoutId = setTimeout(() => {
        setAnimationComplete(true);
      }, cardData.length * 300 + 500); // Allow time for all cards to slide in plus a buffer

      return () => clearTimeout(timeoutId);
    }
  }, [isVisible, cardData.length]);

  return (
    <div>
      <div className="p-8">
        <div className="text-red-400 flex justify-center text-xl p-5">
          <h1>We offer best for your child</h1>
        </div>
        <div className="text-2xl flex justify-center font-bold">
          <h1>What Do We Offer ?</h1>
        </div>
      </div>

      {/* Card container with fixed sizing */}
      <div
        ref={cardContainerRef}
        className="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-8 pb-10"
      >
        {cardData.map((card, index) => (
          <div
            key={card.id}
            className={`card-wrapper h-full w-full transition-all duration-700 ease-out ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
            style={{
              transitionDelay:
                isVisible && !animationComplete ? `${index * 300}ms` : "0ms",
              minHeight: "350px", // Ensure consistent height
            }}
          >
            <Card
              image={card.image}
              title={card.title}
              description={card.description}
              backgroundColor={card.backgroundColor}
              textColor="white"
              imageSize="medium"
            />
          </div>
        ))}
      </div>
      <div className="bg-slate-200">
        <div className="flex justify-between items-center w-full">
          <div>
            <div
              className="w-40 h-40 rounded-full 
                inline-flex items-center justify-center 
                bg-white text-gray-700 text-xl font-bold z-10"
            >
              <div className="w-40 h-40 rounded-full inline-flex items-center justify-center bg-white text-gray-700 text-xl font-bold">
                <img
                  src="https://kidzeeboudha.com/upload_file/section/1682073132_1829721674_Untitled-1.png"
                  alt="students"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Right Section with Owl */}
          <div className="flex items-center">
            <img
              src="https://kidzeeboudha.com/assets/site/img/who-we-are/who-we-are-shape.png"
              alt="owl"
              className="h-auto"
            />

            <div className="ml-2">About</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Outlet;
