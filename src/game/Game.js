import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Main from "./Main";

function Game(props) {
  const { url, chars, name } = props.level;
  const [isActive, setIsActive] = useState(false);
  const [mousePos, setMousePos] = useState({});
  const [found, setFound] = useState([])

  useEffect(() => {
    setFound([false, false, false])
  }, [])

  return (
    <div className="font-nova bg-[#0e0c31]">
      <Nav chars={chars} isActive={isActive} />
      <Main
        url={url}
        chars={chars}
        found={found}
        setFound={setFound}
        name={name}
        setIsActive={setIsActive}
      />
    </div>
  );
}

export default Game;
