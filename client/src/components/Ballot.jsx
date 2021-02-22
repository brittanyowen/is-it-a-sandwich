import React from "react";
import { Link, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL2, config } from "../services";

import Results from "./Results";
import Vote from "./Vote";
import "./Ballot.css";

const Ballot = () => {
  const [foods, setFoods] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const showResults = async () => {
      const resp2 = await axios.get(baseURL2, config);
      setFoods(resp2.data.records);
    };
    showResults();
  }, [toggleFetch]);

  return (
    <div className="ballot-div">
      <Route path="/results">
        <h3 className="results-header">
          Voters were asked if they think each item is a sandwich.
        </h3>
        <p>Have some thoughts? Join the conversation!</p>
        <Link to="/">
        <button className="form">COMMENT</button>
        </Link>
        <div className="result-container">
          {foods.map((food) => (
            <Results key={food.id} food={food} />
          ))}
        </div>
      </Route>

      <Route exact path={"/vote/:id"}>
        <Vote foods={foods} setToggleFetch={setToggleFetch} />
      </Route>
    </div>
  );
};

export default Ballot;
