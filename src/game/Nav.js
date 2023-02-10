import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  const { chars, isActive, found, time, setTime } = props;
  const [showPopup, setShowPopup] = useState(false);

  return (
    <nav className="bg-[#0e0c31] grid grid-cols-3 place-items-center px-4 py-2 fixed w-full list-none z-10">
      <li className="font-bold text-xl sm:text-2xl hover:scale-110 duration-150">
        <Link to="/">
          <span className="text-white">Among</span>
          <span className="text-[#ff0000]">Us</span>
        </Link>
      </li>
      <Timer isActive={isActive} time={time} setTime={setTime} />
      <li className="">
        <button
          onClick={() => setShowPopup((prevState) => !prevState)}
          className="bg-[#8d0c0c] text-white grid place-items-center text-xl w-8 h-8 rounded-[50%] font-bold hover:bg-[#ff0000] duration-200"
        >
          {found.filter(el => !el).length}
        </button>
        {showPopup && (
          <CharsPopup found={found} className="transition-all duration-500" chars={chars} />
        )}
      </li>
    </nav>
  );
}

function CharsPopup(props) {
  const { chars, found } = props;

  return (
    <ul className="fixed right-[12%] top-[11%] bg-[#17134d] py-4 px-2 rounded-2xl text-white ">
      {chars.map((char, index) => (
        <li className={`grid grid-cols-[5rem_7.5rem] place-items-center pl-3 gap-4 hover:scale-105 ${found[index] ? "line-through grayscale-[100%] brightness-50" : ""}`}>
          <div className="h-20 flex">
            <img src={char.url} alt={char.name} />
          </div>
          <div className="text-center">
            <h4 className="font-bold">{char.name}</h4>
            <h5 className="text-[0.675rem] font-semibold">{char.series}</h5>
          </div>
        </li>
      ))}
    </ul>
  );
}

function Timer(props) {
  const { isActive, time, setTime } = props;
  

  useEffect(() => {
    let interval;

    if (isActive) {
      const startTime = Date.now();
      interval = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 10);
    }

    return () => clearInterval(interval);
  }, [isActive, setTime]);

  return (
    <li className="text-white text-xl sm:text-2xl">
      <span>{("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
    </li>
  );
}

export default Nav;
