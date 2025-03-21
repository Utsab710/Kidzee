import React, { useEffect, useRef, useState } from "react";
import Card from "../Card/Card";
import "./parallax.css";
import AboutUs from "../AboutUs/AboutUs";
import WhyChooseUs from "./WhyChooseUs";
import CurriculumShowcase from "./CurriculumShowcase";
import ProgramCarousel from "./ProgramCarousel";
import TestimonialSection from "./TestimonialSection";

function Outlet() {
  const cardContainerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const cardData = [
    {
      id: 1,
      src: "https://digitallearning.eletsonline.com/wp-content/uploads/2015/01/preschool.jpg",
      title: "Interactive iLLUME",
      description:
        "Interactive iLLUME, is specifically designed to help children realize their exceptional capabilities in a methodical, synergetic, and self-paced manner.",
      backgroundColor: "#FF6B6B",
    },
    {
      id: 2,
      src: "https://kidzeeboudha.com/upload_file/offers/1682071709_7459002_Untitled-1.png",
      title: "Kidzee Teachers",
      description:
        "Our training mechanism is designed to arm teachers with practical and effective techniques, which are best suited for kids.",
      backgroundColor: "#AED75C",
    },
    {
      id: 3,
      src: "https://firststeps-preschool.com/wp-content/uploads/2024/03/Child-Leadership-Skill.jpg",
      title: "Leadership",
      description:
        "We envision today's children as tomorrow's leadership icons.",
      backgroundColor: "#FFBE0B",
    },
    {
      id: 4,
      src: "https://kidzeeboudha.com/upload_file/offers/1682071709_7459002_Untitled-1.png",
      title: "MI-aided Methodology",
      description:
        "The mi-aided methodology helps children to discover their own creative and aesthetic potential.",
      backgroundColor: "#3ABFF8",
    },
  ];

  const programData = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1598928636135-d146006ff4be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      title: "Playgroup",
      age: "1.5 - 2.5 Years",
      description:
        "Introduction to learning through play and social interaction.",
      backgroundColor: "#FF6B6B",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1621303837375-079c7c764f57?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      title: "Pre-Nursery",
      age: "2.5 - 3.5 Years",
      description:
        "Building foundational skills through structured activities.",
      backgroundColor: "#AED75C",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      title: "Kindergarten",
      age: "3.5 - 5.5 Years",
      description: "Preparing for formal education with advanced learning.",
      backgroundColor: "#FFBE0B",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      title: "Daycare",
      age: "1 - 6 Years",
      description: "Safe and nurturing environment for all-day care.",
      backgroundColor: "#3ABFF8",
    },
  ];

  const extendedProgramData = [...programData, ...programData, ...programData];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !animationComplete) {
          setIsVisible(true);
        } else if (!entry.isIntersecting && animationComplete) {
          setIsVisible(false);
          setAnimationComplete(false);
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.1 }
    );

    if (cardContainerRef.current) {
      observer.observe(cardContainerRef.current);
    }

    return () => {
      if (cardContainerRef.current) {
        observer.unobserve(cardContainerRef.current);
      }
    };
  }, [animationComplete]);

  useEffect(() => {
    if (isVisible) {
      const timeoutId = setTimeout(() => {
        setAnimationComplete(true);
      }, cardData.length * 300 + 500);
      return () => clearTimeout(timeoutId);
    }
  }, [isVisible, cardData.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setCurrentIndex((prev) => (prev + 1) % programData.length);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isDragging]);

  const handleMouseDown = (e) => {
    e.preventDefault(); // Prevent image drag behavior
    setIsDragging(true);
    setStartX(e.clientX);
    setScrollLeft(sliderRef.current.scrollLeft);
    sliderRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.clientX;
    const walk = (startX - x) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft + walk;
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    sliderRef.current.style.cursor = "default";
    const cardWidth = sliderRef.current.offsetWidth / 3;
    let newIndex = Math.round(sliderRef.current.scrollLeft / cardWidth);

    newIndex = newIndex % programData.length;
    if (newIndex < 0) newIndex += programData.length;
    setCurrentIndex(newIndex);

    setTimeout(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft =
          cardWidth * (programData.length + newIndex);
      }
    }, 0);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].clientX;
    const walk = (startX - x) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft + walk;
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const cardWidth = sliderRef.current.offsetWidth / 3;
    let newIndex = Math.round(sliderRef.current.scrollLeft / cardWidth);

    newIndex = newIndex % programData.length;
    if (newIndex < 0) newIndex += programData.length;
    setCurrentIndex(newIndex);

    setTimeout(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft =
          cardWidth * (programData.length + newIndex);
      }
    }, 0);
  };

  useEffect(() => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.offsetWidth / 3;
      sliderRef.current.scrollLeft = cardWidth * programData.length;
    }
  }, []);

  useEffect(() => {
    if (sliderRef.current && !isDragging) {
      const cardWidth = sliderRef.current.offsetWidth / 3;
      sliderRef.current.scrollTo({
        left: cardWidth * (programData.length + currentIndex),
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <div>
      {/* First Section */}
      <div className="p-8">
        <div className="text-red-400 flex justify-center text-xl p-5">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 mb-8 p-5 text-center tracking-tight">
            We Offer best for your child
          </h1>
        </div>
        <div className="text-2xl flex justify-center font-bold">
          <h2 className="text-4xl font-bold text-indigo-900 relative inline-block">
            What do we offer?
            <div className="absolute -bottom-3 left-0 right-0 h-1"></div>
          </h2>
        </div>
      </div>

      {/* First Card Container */}
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
              minHeight: "350px",
            }}
          >
            <Card
              src={card.src}
              title={card.title}
              description={card.description}
              backgroundColor={card.backgroundColor}
              textColor="white"
              imageSize="medium"
            />
          </div>
        ))}
      </div>

      {/* Other Components */}
      <div>
        <AboutUs />
      </div>
      <WhyChooseUs />
      <CurriculumShowcase />

      {/* Programs Section with Slider */}
      <div className="min-h-screen bg-sky-50 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <ProgramCarousel />
      </div>
      <TestimonialSection />
    </div>
  );
}

export default Outlet;
