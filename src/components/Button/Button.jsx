import React from "react";

const Button = ({ text, onClick, className, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
