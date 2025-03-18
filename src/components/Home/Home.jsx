import React from "react";
import TopBar from "../TopBar/TopBar";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Outlet from "../Outlet/Outlet";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Navbar />

      <div className="relative w-full bg-purple-50">
        <div className="absolute top-4 left-4 z-40">
          <img
            src="https://kidzeeboudha.com/assets/site/img/main-banner/image-birth.png"
            alt="Kite"
            className="w-auto floating-cloud"
          />
        </div>

        <div className="flex flex-row items-center bg-violet-200 relative">
          <div className="w-full md:w-1/2 pt-12 pb-16 px-8 md:pl-16">
            <div className="ml-0">
              <p className="text-red-600 font-bold mb-4">
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
            {/* Full width curved background */}
            <div className="absolute inset-0 z-10 overflow-hidden">
              <div className="absolute right-0 top-0 bg-amber-300 w-[95%] h-full rounded-l-full"></div>
            </div>

            {/* Cloud positioned near the top - above the circle */}
            <div className="absolute top-0 left-10 z-30">
              <img
                src="https://kidzeeboudha.com/assets/site/img/main-banner/image-clound.png"
                alt="Cloud"
                className="w-auto floating-cloud"
              />
            </div>

            {/* White cloud near student - above the circle */}
            <div className="absolute top-72 right-64 z-30">
              <img
                src="https://kidzeeboudha.com/assets/site/img/main-banner/image-clound.png"
                alt="Cloud"
                className="w-24 h-auto"
              />
            </div>
            <div className="relative">
              <div className="inset-0 z-10">
                {/* Student image */}
                <img
                  src="https://kidzeeboudha.com/upload_file/banner/1682070289_1471951331_education-girl.png"
                  alt="Student"
                  className="w-full md:w-auto lg:w-auto mx-auto relative z-20"
                />
              </div>

              {/* Owl positioned at bottom right */}
              <div className="absolute bottom-0 left-0 z-20">
                <img
                  src="https://kidzeeboudha.com/assets/site/img/main-banner/banner-shape-4.png"
                  alt="Owl"
                  className="w-20 floating-owl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Moved banner section slightly higher */}
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
