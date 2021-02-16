import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseURL2, config } from "../services";
import "./Vote.css";

const Vote = (props) => {
  const { food, yesVotes, noVotes, image } = props.food.fields;
  const [yeses, setYeses] = useState('');
  const [nos, setNos] = useState('');
  // const params = useParams(); 

  // console.log(params)

  const yesVote = () => {
    console.log("yesVote + 1");
    console.log(props.food.id)
  };

  const noVote = () => {
    console.log("noVote + 1");
  };

  return (
    <div className="ballot-container">
      <img
        src={image}
        alt={food}
      />
      <div>Is a {food} a sandwich?</div>
      <button onClick={yesVote}>YES</button>
      <button onClick={noVote}>NO</button>
    </div>
  );
};

export default Vote;
