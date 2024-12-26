import { Route, Routes } from "react-router";
import Home from "./home/Home";
import Tutorial from "./tutorial/canvas";
import CubeCanvas from "./cube";

import "./app.css";

function App() {
  return (
    <div className="projects-wrapper">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/cube" element={<CubeCanvas />} />
      </Routes>
    </div>
  );
}

export default App;
