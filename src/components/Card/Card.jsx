import React from "react";
import Button from "../Button/Button"; // Adjust the import path as needed

const Card = ({ image, title, description, buttonText }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-white">
      <img className="w-full h-48 object-cover" src={image} alt="Card Image" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4">
        <Button text={buttonText} />
      </div>
    </div>
  );
};

export default Card;
