import { Route, Routes } from "react-router";
import Home from "./home/Home";
import Tutorial from "./tutorial/canvas";
import CubeCanvas from "./cube";

import "./app.css";
import MultiShapeCanvas from "./multi-shape";
import GlossySphereCanvas from "./glossy-sphere";
import EarthCanvas from "./globe";

function App() {
  return (
    <div className="projects-wrapper">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/cube" element={<CubeCanvas />} />
        <Route path="/multi-shape" element={<MultiShapeCanvas />} />
        <Route path="/glossy-sphere" element={<GlossySphereCanvas />} />
        <Route path="/globe" element={<EarthCanvas />} />
      </Routes>
    </div>
  );
}

export default App;
