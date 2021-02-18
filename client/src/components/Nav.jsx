import React from "react";
import { Link, Route } from "react-router-dom";
import Vote from "./Vote";
import "./Nav.css";

const Nav = (props) => {
  return (
    <div className="nav-bar">
      <Link className="home-link" to="/">
        Home
      </Link>
      <Link className="sandwich-link" to="/results">
        Is It A Sandwich?
      </Link>
      <Link className="vote-link" to={`/vote`}>
        VOTE
      </Link>
    </div>
  );
};

export default Nav;
