import React from "react";

import "./parallax.css"; // We'll create this CSS file
import Card from "../Card/Card";

function Outlet() {
  // Card data with appropriate colors matching the first image
  const cardData = [
    {
      id: 1,
      image:
        "https://kidzeeboudha.com/upload_file/offers/1682071709_7459002_Untitled-1.png",
      title: "Interactive iLLUME",
      description:
        "Interactive iLLUME, is specifically designed to help children realize their exceptional capabilities in a methodical, synergetic, and self-paced manner.",
      backgroundColor: "#FF6B6B",
    },
    {
      id: 2,
      image:
        "https://kidzeeboudha.com/upload_file/offers/1682071709_7459002_Untitled-1.png",
      title: "Kidzee Teachers",
      description:
        "Our training mechanism is designed to arm teachers with practical and effective techniques, which are best suited for kids.",
      backgroundColor: "#AED75C", // Green color from the first image
    },
    {
      id: 3,
      image:
        "https://kidzeeboudha.com/upload_file/offers/1682071709_7459002_Untitled-1.png",
      title: "Leadership",
      description:
        "We envision today's children as tomorrow's leadership icons.",
      backgroundColor: "#FFBE0B", // Yellow color from the first image
    },
    {
      id: 4,
      image:
        "https://kidzeeboudha.com/upload_file/offers/1682071709_7459002_Untitled-1.png",
      title: "MI-aided Methodology",
      description:
        "The mi-aided methodology helps children to discover their own creative and aesthetic potential.",
      backgroundColor: "#3ABFF8", // Blue color from the first image
    },
  ];

  return (
    <div>
      <div className="p-8">
        <div className="text-red-400 flex justify-center text-xl p-5">
          <h1>We offer best for your child</h1>
        </div>
        <div className="text-2xl flex justify-center font-bold">
          <h1>What Do We Offer ?</h1>
        </div>
      </div>

      {/* Parallax card container */}
      <div className="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-8 pb-10">
        {cardData.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            title={card.title}
            description={card.description}
            backgroundColor={card.backgroundColor}
            textColor="white"
            imageSize="medium"
          />
        ))}
      </div>
    </div>
  );
}

export default Outlet;
