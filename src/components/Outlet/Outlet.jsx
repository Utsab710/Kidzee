import React from "react";
import Card from "../Card/Card";

function Outlet() {
  return (
    <div>
      <div className="flex items-center justify-center p-5 gap-2">
        <Card
          image="https://kidzeeboudha.com/upload_file/offers/1682071709_7459002_Untitled-1.png"
          title="Hi"
          description="This is a customizable card component."
          buttonText="Click Me"
        />
        <Card
          image="https://kidzeeboudha.com/upload_file/offers/1682071709_7459002_Untitled-1.png"
          title="Hi"
          description="This is a customizable card component."
          buttonText="Click Me"
        />
        <Card
          image="https://kidzeeboudha.com/upload_file/offers/1682071709_7459002_Untitled-1.png"
          title="Hi"
          description="This is a customizable card component."
          buttonText="Click Me"
        />
        <Card
          image="https://kidzeeboudha.com/upload_file/offers/1682071709_7459002_Untitled-1.png"
          title="Hi"
          description="Interactive iLLUME, is specifically designed to help children realize their exceptional capabilities in a methodical, synergetic, and self-paced manner."
          buttonText="Click Me"
        />
      </div>
    </div>
  );
}

export default Outlet;
