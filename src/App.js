import "./App.css";
import Selection from "./selection/Selection";
import Game from "./game/Game";
import HighScore from "./HighScore";
import LevelInfo from "./LevelInfo";
import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { auth } from "./firebase-config";
import { signInAnonymously } from "firebase/auth";

function App() {
  const [level, setLevel] = useState(LevelInfo.easy);
  signInAnonymously(auth)
    .then()
    .catch((error) => console.log(error.code, error.message));

  return (
    <HashRouter className="">
      <Routes>
        <Route path="/" element={<Selection setLevel={setLevel} />} />
        <Route path="/game" element={<Game level={level} />} />
        <Route path="/highscore" element={<HighScore />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
