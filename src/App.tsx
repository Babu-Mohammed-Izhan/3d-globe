import { Route, Routes } from "react-router";
import Home from "./home/Home";
import Tutorial from "./tutorial/canvas";
import CubeCanvas from "./cube";

import "./app.css";
import MultiShapeCanvas from "./multi-shape";

function App() {
  return (
    <div className="projects-wrapper">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/cube" element={<CubeCanvas />} />
        <Route path="/multi-shape" element={<MultiShapeCanvas />} />
      </Routes>
    </div>
  );
}

export default App;
