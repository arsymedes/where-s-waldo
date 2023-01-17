import React from "react";
import { Link } from "react-router-dom";

function HighScore() {
  return (
    <div className="bg-black h-screen font-nova grid place-items-center">
      <main className="bg-white p w-[clamp(200px,90%,500px)] min-h-[27rem] rounded-3xl grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] place-items-center py-10 px-8 gap-y-8">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-3xl font-bold">High Scores</h2>
          <ul className="">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-3xl font-bold">Time</h2>
          <div className="text-2xl font-bold">00:00:00</div>
          <Link to="/">
            <button className="font-bold text-xl w-28 py-3 rounded-3xl bg-gradient-to-r text-white from-[#bbdfff] to-[#e7afb1] hover:text-black hover:outline hover:outline-black hover:outline-2 hover:bg-none transition-all ease-in-out duration-100">
              RESTART
            </button>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default HighScore