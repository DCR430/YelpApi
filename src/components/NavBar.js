import React from "react";
import { NavLink } from "react-router-dom";

const link = {
  padding: "12px",
  margin: "0 6px 6px"
};

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/"  style={link}>
        Home
      </NavLink>
      <NavLink to="/map"  style={link}>
        Map
      </NavLink>
    </div>
  );
};

export default NavBar;