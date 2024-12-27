import { NavLink } from "react-router";

import "./home.css";

const Home = () => {
  return (
    <div className="home-wrapper">
      <h1>3D Projects</h1>
      <NavLink className="home-link" to="/tutorial" end>
        3 js Tutorial
      </NavLink>
      <NavLink className="home-link" to="/cube" end>
        Cube
      </NavLink>
      <NavLink className="home-link" to="/multi-shape" end>
        Multi Shape
      </NavLink>
      <NavLink className="home-link" to="/glossy-sphere" end>
        Glossy Sphere
      </NavLink>
      <NavLink className="home-link" to="/clouds" end>
        Clouds
      </NavLink>
    </div>
  );
};

export default Home;
