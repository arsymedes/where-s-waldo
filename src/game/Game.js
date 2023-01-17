import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Main from "./Main";

function Game(props) {
  const {time, setTime} = props
  const { url, chars, name } = props.level;
  const [isActive, setIsActive] = useState(false);
  const [found, setFound] = useState([]);

  useEffect(() => {
    setFound([false, false, false]);
  }, []);

  return (
    <div className="font-nova bg-[#0e0c31]">
      <Nav chars={chars} isActive={isActive} found={found} time={time} setTime={setTime} />
      <Main
        url={url}
        chars={chars}
        name={name}
        setIsActive={setIsActive}
        found={found}
        setFound={setFound}
      />
    </div>
  );
}

export default Game;
