import React from "react";
import CharCard from "./CharCard";

function CarouselSlide(props) {
  const { url, alt, name, chars } = props
  console.log(
    props
  );

  return (
    <div className="grid grid-cols-[6fr_5fr] h-[28rem] w-[38rem] bg-white items-center rounded-3xl overflow-hidden relative">
      <div className=" h-[28rem]"><img src={url} alt={alt} /></div>
      <div className="flex flex-col items-center gap-3">
        <div className="flex flex-col gap-1">
          <h2 className="text-center font-bold text-2xl">{name}</h2>
          <h3 className="text-center text-[0.675rem]">by Egor Klyuch nyk</h3>
        </div>
        <ul className="flex flex-col gap-2">
          <CharCard char={chars[0]}/>
          <CharCard char={chars[1]}/>
          <CharCard char={chars[2]}/>
        </ul>
        <button className="font-bold text-xl w-28 py-3 rounded-3xl bg-gradient-to-r text-white from-[#bbdfff] to-[#e7afb1] hover:text-black hover:outline hover:outline-black hover:outline-2 hover:bg-none transition-all ease-in-out duration-100">START</button>
      </div>
    </div>
  )
}

export default CarouselSlide