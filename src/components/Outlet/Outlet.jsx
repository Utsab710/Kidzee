import React from "react";
import Card from "../Card/Card";

function Outlet() {
  return (
    <div>
      <div className="p-8">
        <div className="text-red-400 flex justify-center text-xl p-5">
          <h1>We offer best for your child</h1>
        </div>
        <div className="text-2xl flex justify-center font-bold ">
          <h1>What Do We Offer ?</h1>
        </div>
      </div>
      <div className="flex items-center justify-center p-5 gap-2">
        <Card
          image="https://kidzeeboudha.com/upload_file/offers/1682071709_7459002_Untitled-1.png"
          title="Interactive iLLUME"
          description="Interactive iLLUME, is specifically designed to help children realize their exceptional capabilities in a methodical, synergetic, and self-paced manner."
          buttonText="Click Me"
        />
        <Card
          image="https://kidzeeboudha.com/upload_file/offers/1682071709_7459002_Untitled-1.png"
          title="Kidzee Teachers"
          description="Our training mechanism is designed to arm teachers with practical and effective techniques, which are best suited for kids."
          buttonText="Click Me"
        />
        <Card
          image="https://kidzeeboudha.com/upload_file/offers/1682071709_7459002_Untitled-1.png"
          title="Leadership"
          description="We envision today’s children as tomorrow’s leadership icons."
          buttonText="Click Me"
        />
        <Card
          image="https://kidzeeboudha.com/upload_file/offers/1682071709_7459002_Untitled-1.png"
          title="MI-aided Methodology"
          description="The mi-aided methodology helps children to discover their own creative and aesthetic potential."
          buttonText="Click Me"
        />
      </div>
    </div>
  );
}

export default Outlet;
