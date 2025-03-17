import React from "react";
import TopBar from "../TopBar/TopBar";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <div className="flex bg-gray-200">
        <Kite />
        <Cloud />
      </div>
      <Footer />
    </div>
  );
}

function Cloud() {
  return (
    <div>
      <img
        src="https://kidzeeboudha.com/assets/site/img/main-banner/image-clound.png"
        alt="image"
      ></img>
    </div>
  );
}

function Kite() {
  return (
    <div>
      <img
        src="https://kidzeeboudha.com/assets/site/img/main-banner/image-birth.png"
        alt="image"
      ></img>
    </div>
  );
}

export default Home;
