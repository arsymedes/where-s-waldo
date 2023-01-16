import React, { useState } from "react";
import Nav from "./Nav";
import Main from "./Main";

function Game(props) {
  const { url, chars, name} = props.level
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="font-nova">
      <Nav chars={chars} isActive={isActive} />
      <Main url={url} chars={chars} name={name} setIsActive={setIsActive} />
    </div>
  );
}

export default Game;
