import React, { useState } from "react";
import { checkPos } from "./Backend";
import { useNavigate } from "react-router-dom";

function Main(props) {
  const { url, chars, name, setIsActive, found, setFound } = props;
  const [clicked, setClicked] = useState(false);
  const [clickInfo, setClickInfo] = useState({});
  const [popup, setPopup] = useState(false);
  const [isFound, setIsFound] = useState(false);
  const navigate = useNavigate()

  async function isChar(index) {
    const data = await checkPos(name);
    const [xAns, yAns] = data[index];

    const match =
      Math.abs(xAns - clickInfo.x / clickInfo.width) < 0.035 &&
      Math.abs(yAns * clickInfo.height + clickInfo.yOff - clickInfo.y) <
        0.035 * clickInfo.width;

    setIsFound(match);
    return match;
  }

  function handleClick(event) {
    const [x, y] = [
      event.clientX,
      event.clientY + event.target.parentNode.scrollTop,
    ];
    const [width, height] = [
      event.target.offsetWidth,
      event.target.offsetHeight,
    ];
    const [xOff, yOff] = [event.target.offsetLeft, event.target.offsetTop];

    setClicked((prevState) => !prevState);
    setClickInfo({ x, y, width, height, xOff, yOff });
  }

  async function handleCharPick(index) {
    const isTrue = await isChar(index);
    if (isTrue) {
      setFound((state) => {
        const tempState = [...state];
        tempState[index] = true;

        if (JSON.stringify(tempState) === JSON.stringify([true, true, true])) {
          navigate("/highscore")
        }
        return tempState;
      });
    }

    setClicked((prevState) => !prevState);
    setPopup(() => {
      setTimeout(() => setPopup(false), 2000);
      return true;
    });
  }

  return (
    <div className="scrollbar-thin scrollbar-track-black scrollbar-thumb-[#ff0000] relative pt-12 h-screen">
      <img
        onClick={handleClick}
        onLoad={() => setIsActive(true)}
        src={url}
        alt={name}
      />
      {clicked && (
        <RemainChars
          chars={chars}
          clickInfo={clickInfo}
          handleCharPick={handleCharPick}
          found={found}
        />
      )}
      {clicked && <Circle clickInfo={clickInfo} />}
      {popup && <Notif isFound={isFound} />}
    </div>
  );
}

function RemainChars(props) {
  const { chars, clickInfo, handleCharPick, found } = props;

  return (
    <ul
      className="absolute overflow-hidden top-20 min-w-[6rem] bg-white bg-opacity-70 rounded-xl"
      style={{
        left: `calc(${clickInfo.x}px ${
          clickInfo.x + 80 > clickInfo.width ? "- 18vw" : "+ 4vw"
        })`,
        top: `calc(${clickInfo.y}px - 3.5vw)`,
      }}
    >
      {chars
        .filter((char) => !found[char.id])
        .map((char) => (
          <li
            key={char.name}
            onClick={() => handleCharPick(char.id)}
            className="hover:scale-110 overflow-hidden duration-200 p-2 hover:bg-white cursor-pointer"
          >
            {char.name}
          </li>
        ))}
    </ul>
  );
}

function Notif(props) {
  const { isFound } = props;
  const trueMsg = "You Found One!";
  const falseMsg = "Wrong One, Try Again!";

  return (
    <div
      className={`fixed top-16 right-[50%] translate-x-1/2 px-3 py-1 rounded-xl text-white ${
        isFound ? "bg-green-700" : "bg-red-700"
      }`}
    >
      {isFound ? trueMsg : falseMsg}
    </div>
  );
}

function Circle(props) {
  const { clickInfo } = props;

  return (
    <div
      className="absolute w-[7vw] h-[7vw] border-dashed border-white border-4 bg-white bg-opacity-40"
      style={{
        left: `calc(${clickInfo.x}px - 3.5vw)`,
        top: `calc(${clickInfo.y}px - 3.5vw)`,
      }}
    ></div>
  );
}

export default Main;
