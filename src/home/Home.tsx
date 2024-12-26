import { NavLink } from "react-router";

const Home = () => {
  return (
    <div>
      <h1>3D Projects</h1>
      <NavLink to="/tutorial" end>
        3 js Tutorial
      </NavLink>
      <NavLink to="/cube" end>
        Cube
      </NavLink>
      <NavLink to="/glossy-sphere" end>
        Glossy Sphere
      </NavLink>
      <NavLink to="/clouds" end>
        Clouds
      </NavLink>
    </div>
  );
};

export default Home;
