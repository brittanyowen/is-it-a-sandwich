import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseURL2, config } from "../services";
import "./Vote.css";

const Vote = (props) => {
  const params = useParams();
  const hotdog = props.foods[0] ? props.foods[0].id : null;

  const [yesVotes, setYesVotes] = useState(0);
  const [noVotes, setNoVotes] = useState(0);
  // console.log(props.foods[0] ? props.foods[0].fields ? props.foods[0].fields.yesVotes : null : null)


  const yesVote = () => {
    console.log(yesVotes);
    setYesVotes(yesVotes + 1)
    }

  const noVote = () => {
    console.log(noVotes);
    setNoVotes(noVotes + 1)
  };

  return (
    <div className="ballot-container">
      <img
        src={
          props.foods[0]
            ? props.foods[0].fields
              ? props.foods[0].fields.image
              : null
            : null
        }
        alt={
          props.foods[0]
            ? props.foods[0].fields
              ? props.foods[0].fields.food
              : null
            : null
        }
      />
      <div>
        Is a{" "}
        {props.foods[0]
          ? props.foods[0].fields
            ? props.foods[0].fields.food
            : null
          : null}{" "}
        a sandwich?
      </div>
      <form>
        <button onClick={yesVote}>YES</button>
        <button onClick={noVote}>NO</button>


      </form>
    </div>
  );
};

export default Vote;
