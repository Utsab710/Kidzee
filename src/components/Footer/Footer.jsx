import React from "react";
import Form from "../Form/Form";
import kidzee from "../../image/kidzee.png";
import "../Custom_css/AnimateCloud.css";

function Footer() {
  return (
    <div className="w-full bg-cyan-100">
      <div className="container mx-auto px-4">
        <div className="relative">
          <img
            src="https://kidzeeboudha.com/assets/site/img/value/cloud-1.png"
            alt="Floating cloud"
            className="w-auto h-auto floating-cloud absolute top-0 right-0 p-4"
          />
          <img
            src="https://kidzeeboudha.com/assets/site/img/value/cloud-2.png"
            alt="Floating cloud"
            className="w-auto h-auto floating-cloud absolute top-0 right-1/6 p-8"
          />
        </div>

        <div className="flex flex-col lg:flex-row py-8 mt-16">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-6">
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

      <div className="relative">
        <div className="w-full bg-white h-8"></div>
        <div className="absolute bottom-0 left-0 w-full">
          <img
            src="https://kidzeeboudha.com/assets/site/img/footer-top.png"
            alt="Flower border"
            className="w-full"
          />
        </div>
      </div>

      <div className="w-full py-4 bg-white flex flex-col items-center ">
        <img src={kidzee} alt="Kidzee logo" className="w-44 h-auto " />
        <div className="w-full border-t border-gray-400 my-4"></div>
      </div>

      <div className="text-gray-600 text-center flex justify-center items-center pb-4 bg-white">
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
