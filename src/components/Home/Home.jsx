import React from "react";
import TopBar from "../TopBar/TopBar";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Navbar />

      {/* Hero section with correct layout */}
      <div className="relative w-full bg-purple-50">
        {/* Bird logo positioned at top left */}
        <div className="absolute top-4 left-4">
          <img
            src="https://kidzeeboudha.com/assets/site/img/main-banner/image-birth.png"
            alt="Kite"
            className="w-auto floating-cloud"
          />
        </div>

        <div className="flex flex-row items-center">
          {/* Left side - text content */}
          <div className="w-full md:w-1/2 pt-12 pb-16 px-8 md:pl-16">
            {/* Text content with correct spacing */}
            <div className="ml-0">
              <p className="text-red-500 font-medium mb-4">
                Welcome to Kidzee School
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-purple-900 mb-8">
                Embark on a new
                <br />
                journey of
                <br />
                empowerment
              </h1>
              <button className="bg-red-500 hover:bg-red-600 text-white py-3 px-10 rounded-md font-medium">
                Contact us
              </button>
            </div>
          </div>

          {/* Right side - Student image */}
          <div className="hidden md:block w-1/2 relative">
            {/* Cloud positioned near the top */}
            <div className="absolute top-10 left-10">
              <img
                src="https://kidzeeboudha.com/assets/site/img/main-banner/image-clound.png"
                alt="Cloud"
                className="w-auto floating-cloud"
              />
            </div>

            {/* Student image */}
            <img
              src="https://kidzeeboudha.com/upload_file/banner/1682070289_1471951331_education-girl.png"
              alt="Student"
              className="w-full"
            />

            {/* Owl positioned at bottom right */}
            <div className="absolute bottom-10 right-10">
              <img
                src="https://kidzeeboudha.com/assets/site/img/main-banner/banner-shape-4.png"
                alt="Owl"
                className="w-16"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
