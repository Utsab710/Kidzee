import React from "react";
import Form from "../Form/Form";
import kidzee from "../../image/kidzee.png";

function Footer() {
  return (
    <div className="w-full bg-cyan-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row py-8">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <Form />
          </div>
          <div className="w-full lg:w-1/2 flex items-end justify-center lg:justify-end relative">
            <img
              src="https://kidzeeboudha.com/assets/site/img/img-home3-1.png"
              alt="School bus with children"
              className="w-auto h-auto"
            />
          </div>
        </div>
      </div>

      {/* Flower border */}
      <div className="relative">
        <div className="w-full bg-green-500 h-8"></div>
        <div className="absolute bottom-0 left-0 w-full">
          <img
            src="https://kidzeeboudha.com/assets/site/img/footer-top.png"
            alt="Flower border"
            className="w-full "
          />
        </div>
      </div>

      <div className="flex justify-center items-center w-full py-4">
        <img src={kidzee} alt="kidzee logo" className="w-45 h-auto" />
      </div>

      <div className="w-full border-t border-gray-400 my-4"></div>
      <div className="text-gray-600 text-center flex justify-center items-center pb-4">
        <p>Copyright @ 2025 Kidzee. All Rights Reserved by</p>
        <a
          href="https://kidzeeboudha.com/"
          target="__blank"
          className="text-red-500 font-bold ml-1"
        >
          krennova
        </a>
      </div>
    </div>
  );
}

export default Footer;
