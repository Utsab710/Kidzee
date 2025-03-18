import React from "react";

function Slider() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Main slider container */}
      <div className="flex flex-col items-start justify-center p-8 md:p-16 h-full">
        {/* Welcome text */}
        <p className="text-red-500 font-medium mb-4">
          Welcome to Kidzee School
        </p>

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-purple-900 mb-6 max-w-lg">
          Embark on a new journey of empowerment
        </h1>

        {/* Contact button */}
        <button className="bg-red-500 hover:bg-red-600 text-white py-3 px-8 rounded-md font-medium">
          Contact us
        </button>
      </div>

      {/* Child image - this would be positioned absolutely in a real implementation */}
      <div className="absolute top-0 right-0 h-full">
        {/* This would be your student image */}
      </div>
    </div>
  );
}

export default Slider;
