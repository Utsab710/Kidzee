import React from "react";
import kidzee from "../../image/kidzee.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Navbar({ className }) {
  return (
    <div
      className={`flex gap-x-8 gap-y-4 w-full py-4 bg-white shadow-md ${className}`} // Added bg-white and shadow-md for visibility
    >
      <div className="space-x-6 ml-25 items-center">
        <img src={kidzee} alt="kidzee logo" className="w-32 h-auto" />
      </div>
      <div className="flex gap-x-6 gap-y-4 items-center justify-center flex-grow">
        <h2 className="text-base hover:text-gray-600 cursor-pointer font-medium">
          Home
        </h2>
        <h2 className="text-base hover:text-gray-600 cursor-pointer font-medium">
          What do we offer
        </h2>
        <h2 className="text-base hover:text-gray-600 cursor-pointer font-medium">
          About
        </h2>
        <h2 className="text-base hover:text-gray-600 cursor-pointer font-medium">
          Curriculum
        </h2>
        <h2 className="text-base hover:text-gray-600 cursor-pointer font-medium">
          Contact Us
        </h2>
      </div>
      <div className="flex items-center space-x-4 pr-7">
        <a
          href="https://www.facebook.com/Kidzeeboudha"
          target="_blank"
          className="hover:animate-bounce"
        >
          <FaFacebook size={24} className="cursor-pointer" />
        </a>
        <a
          href="https://www.instagram.com/kidzee_boudha/"
          target="_blank"
          className="hover:animate-bounce"
        >
          <FaInstagram size={24} className="cursor-pointer" />
        </a>
        <a className="hover:animate-bounce">
          <FaXTwitter size={24} className="cursor-pointer" />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
