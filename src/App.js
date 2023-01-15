import "./App.css";
import Selection from "./components/Selection";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter className="scrollbar-thin scrollbar-track-black scrollbar-thumb-[#ff0000]">
      <Routes>
        <Route path="/" element={<Selection />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
