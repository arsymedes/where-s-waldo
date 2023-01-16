import React from "react";
import CharCard from "./CharCard";
import { Link } from "react-router-dom";

function CarouselSlide(props) {
  const { setLevel } = props;
  const { url, alt, name, chars } = props.level;

  return (
    <div className="grid grid-cols-[6fr_5fr] h-[16rem] w-[22rem] sm:h-[28rem] sm:w-[38rem] bg-white items-center rounded-3xl overflow-hidden relative">
      <div className="h-[16rem] sm:h-[28rem]">
        <img className="" src={url} alt={alt} />
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className="flex flex-col gap-1">
          <h2 className="text-center font-bold text-xl sm:text-2xl">{name}</h2>
          <h3 className="text-center text-[0.6rem] sm:text-[0.675rem]">by Egor Klyuch nyk</h3>
        </div>
        <ul className="flex flex-col gap-2">
          <CharCard char={chars[0]} />
          <CharCard char={chars[1]} />
          <CharCard char={chars[2]} />
        </ul>
        <Link to="./game">
          <button onClick={setLevel} className="font-bold text-[0.8rem] px-2 py-1 rounded-xl sm:text-xl sm:w-28 sm:py-3 sm:rounded-3xl bg-gradient-to-r text-white from-[#bbdfff] to-[#e7afb1] hover:text-black hover:outline hover:outline-black hover:outline-2 hover:bg-none transition-all ease-in-out duration-100">
            START
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CarouselSlide;
