import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = (props) => {
  return (
    <div className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/results">Is It A Sandwich?</Link>
      {/* <Link to={`/vote/rec7IYq3xD6pnefVO`}>VOTE</Link> */}
      {/* <Link to={`/vote/${props.foods.id}`}>VOTE</Link> */}
      {/* <Link to="/vote">VOTE</Link> */}
      <Link to={`/vote/${props.foods.id}`}>
        VOTE
      </Link>
    </div>
  );
};

export default Nav;
