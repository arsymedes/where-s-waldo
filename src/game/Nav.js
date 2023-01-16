import React, {useState} from "react";
import Timer from "./Timer";
import CharsPopup from "./CharsPopup";
import { Link } from "react-router-dom";

function Nav(props) {
  const { chars } = props
  const [showPopup, setShowPopup] = useState(false)

  return (
    <nav className="bg-[#0e0c31] grid grid-cols-3 place-items-center px-4 py-2 fixed w-full list-none">
      <li className="font-bold text-xl sm:text-2xl hover:scale-110 duration-150">
        <Link to="/" >
          <span className="text-white">Among</span>
          <span className="text-[#ff0000]">Us</span>
        </Link>
      </li>
      <Timer />
      <li className="">
        <button onClick={() => setShowPopup((prevState) => !prevState)} className="bg-[#8d0c0c] text-white grid place-items-center text-xl w-8 h-8 rounded-[50%] font-bold hover:bg-[#ff0000] duration-200">
          3
        </button>
        {showPopup && <CharsPopup className="transition-all duration-500" chars={chars}/>}
      </li>
    </nav>
  );
}

export default Nav;
