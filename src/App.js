import "./App.css";
import Selection from "./selection/Selection";
import Game from "./game/Game";
import HighScore from "./game/HighScore";
import LevelInfo from "./LevelInfo";
import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  const [level, setLevel] = useState(LevelInfo.easy);
  const [time, setTime] = useState(0);

  return (
    <HashRouter className="">
      <Routes>
        <Route path="/" element={<Selection setLevel={setLevel} />} />
        <Route path="/game" element={<Game level={level} time={time} setTime={setTime} />} />
        <Route path="/highscore" element={<HighScore time={time} name={level.name} />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
