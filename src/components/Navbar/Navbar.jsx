import React from "react";
import kidzee from "../../image/kidzee.png";

function Navbar() {
  return (
    <div className="flex gap-x-8 gap-y-4  w-full py-4">
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
    </div>
  );
}

export default Navbar;
