import React, { useState, useEffect } from "react";
import TopBar from "../TopBar/TopBar";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Outlet from "../Outlet/Outlet";
import Slider from "../Slider/Slider";
import "../Custom_css/AnimateCloud.css";

function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsScrolled(true);
      } else if (currentScrollY < lastScrollY) {
        setIsScrolled(false);
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const slides = [
    {
      title: "Embark on a new journey of empowerment",
      subtitle: "Welcome to Kidzee School",
      buttonText: "Contact us",
      imageUrl:
        "https://kidzeeboudha.com/upload_file/banner/1682070289_1471951331_education-girl.png",
    },
    {
      title:
        "A wonderful environment where children can learn and grow. a world of learning",
      subtitle: "Age-Appropriate Knowledge",
      buttonText: "Contact us",
      imageUrl:
        "https://kidzeeboudha.com/upload_file/banner/1682075046_1194578216_main-banner-1.png",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden overflow-y-auto">
      <TopBar />
      <Navbar className={isScrolled ? "navbar-hidden" : "navbar-visible"} />
      <div className="relative w-full bg-purple-50">
        <div className="absolute top-4 left-4 z-40">
          <img
            src="https://kidzeeboudha.com/assets/site/img/main-banner/image-birth.png"
            alt="Kite"
            className="w-auto floating-cloud"
          />
        </div>
        <Slider slides={slides} />
        <div className="banner bg-violet-200 relative -mt-10 floating-cloud">
          <img src="https://kidzeeboudha.com/assets/site/img/main-banner/banner-bg-shape-1.png" />
        </div>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Home;
