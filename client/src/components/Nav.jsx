import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav-bar">
      <Link className="home-link" to="/">
        Home
      </Link>
      <Link className="sandwich-link" to="/results">
        Is It A Sandwich?
      </Link>
      <Link className="vote-link" to="/vote/rec1QxVsG4LA9xooF">
        VOTE
      </Link>
    </div>
  );
};

export default Nav;
