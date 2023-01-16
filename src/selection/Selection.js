import React from "react";
import Carousel from "./Carousel";

function Selection(props) {
  const { setLevel } = props;

  return (
    <div className="h-screen bg-black font-nova flex flex-col justify-center py-10">
      <h1 className="font-bold text-5xl text-center">
        <span className="text-white">Among</span>
        <span className="text-[#ff0000]">Us</span>
      </h1>
      <h2 className="text-white text-center pt-5 pb-5">
        Swipe to choose image to play
      </h2>
      <Carousel setLevel={setLevel}></Carousel>
    </div>
  );
}

export default Selection;
