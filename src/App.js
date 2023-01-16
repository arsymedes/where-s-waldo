import "./App.css";
import Selection from "./selection/Selection";
import Game from "./game/Game"
import LevelInfo from "./LevelInfo";
import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  const [level, setLevel] = useState(LevelInfo.easy)

  return (
    <HashRouter className="">
      <Routes>
        <Route path="/" element={<Selection setLevel={setLevel}/>} />
        <Route path="/game" element={<Game level={level}/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
