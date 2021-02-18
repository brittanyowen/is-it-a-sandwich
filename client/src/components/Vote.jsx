import React from "react";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { baseURL2, config } from "../services";
import "./Vote.css";

const Vote = (props) => {
  const [food, setFood] = useState("");
  const [yesVotes, setYesVotes] = useState('');
  const [noVotes, setNoVotes] = useState('');
  const history = useHistory();
  const params = useParams();

  const question = props.foods.find((q) => params.id === q.id);

  useEffect(() => {
    if (params.id) {
      if (params.id === "undefined") {
        history.push('/')
      } else if (question) {
        setFood(question.fields.food);
        setYesVotes(question.fields.yesVotes);
        setNoVotes(question.fields.noVotes);
      }
    } else {
      history.push('/')
    }
  }, [props.foods, params.id]);

  const addYes = () => {
    const yes = parseInt(`${yesVotes}`) + 1; 
    setYesVotes(`${yes}`)
  };

  const addNo = () => {
    const no = parseInt(`${noVotes}`) + 1
    setNoVotes(`${no}`)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fields = {
      food,
      yesVotes,
      noVotes,
    };

    if (params.id) {
      const questionURL = `${baseURL2}/${params.id}`;
      await axios.put(questionURL, { fields }, config);
    } else {
      await axios.post(baseURL2, { fields }, config);
    }
    props.setToggleFetch((curr) => !curr);
    history.push("/results");
  };
  if (!question) {
    return <h4>Loading...</h4>
  }
  return (
    <div className="ballot-container">
      <img src={question.fields.image} alt={question.fields.food} />
      <div className="question">Is a {question.fields.food} a {question.fields.food === "poptart" ? "ravioli" : "sandwich"}?</div>
      <form onSubmit={handleSubmit}>
        <button onClick={addYes}>YES</button>
        <button onClick={addNo}>NO</button>
      </form>
    </div>
  );
};

export default Vote;
