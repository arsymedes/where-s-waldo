import React, { useState } from "react";

function Main(props) {
  const { url, chars, name, setIsActive, found, setFound } = props;
  const [clicked, setClicked] = useState(false);
  const [mousePos, setMousePos] = useState([0, 0]);

  function handleClick(event) {
    const [x, y] = [
      event.clientX,
      event.clientY + event.target.parentNode.scrollTop,
    ];
    const [width, height] = [event.target.offsetWidth, event.target.offsetHeight]
    const [xOff, yOff] = [event.target.offsetLeft, event.target.offsetTop]

    console.log((x - xOff) / width, (y - yOff) / height);
    setMousePos([x, y]);
    setClicked((prevState) => !prevState);
  }

  return (
    <div className="scrollbar-thin scrollbar-track-black scrollbar-thumb-[#ff0000] relative pt-12 h-screen">
      <img
        onClick={handleClick}
        onLoad={() => setIsActive(true)}
        src={url}
        alt={name}
      />
      {clicked && <RemainChars chars={chars} mousePos={mousePos} />}
      {clicked && <Circle mousePos={mousePos} />}
    </div>
  );
}

function RemainChars(props) {
  const { chars, mousePos } = props;

  return (
    <ul
      className="absolute overflow-hidden top-20 min-w-[6rem] bg-white bg-opacity-70 rounded-xl"
      style={{
        left: mousePos[0] + 36 + "px",
        top: mousePos[1] + 36 + "px",
      }}
    >
      {chars.map((char, index) => (
        <li className="hover:scale-110 overflow-hidden duration-200 p-2 hover:bg-white cursor-pointer">
          {char.name}
        </li>
      ))}
    </ul>
  );
}

function Circle(props) {
  const { mousePos } = props;

  return (
    <div
      className="absolute w-24 h-24 rounded-[50%] border-dashed border-white border-4 bg-white bg-opacity-40"
      style={{
        left: mousePos[0] - 48 + "px",
        top: mousePos[1] - 48 + "px",
      }}
    ></div>
  );
}

export default Main;
