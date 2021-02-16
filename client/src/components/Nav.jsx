import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/results">Is It A Sandwich?</Link>
      <Link to="/vote">VOTE</Link>
    </div>
  );
};

export default Nav;
