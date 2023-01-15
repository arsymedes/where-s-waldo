import "./App.css";
import Selection from "./components/Selection";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Selection />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
