import { Route, Routes } from "react-router";
import Home from "./home/Home";
import Tutorial from "./tutorial/canvas";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/tutorial" element={<Tutorial />} />
    </Routes>
  );
}

export default App;
