import React, { useState } from "react";
import Nav from "./Nav";
import Main from "./Main";

function Game(props) {
  const { url, chars, name} = props.level

  return (
    <div className="font-nova">
      <Nav chars={chars} />
      <Main url={url} chars={chars} name={name}/>
    </div>
  );
}

export default Game;
