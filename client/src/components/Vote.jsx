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
      // console.log(question);
      if (question) {
        setFood(question.fields.food);
        setYesVotes(question.fields.yesVotes);
        setNoVotes(question.fields.noVotes);
      }
    }
  }, [props.foods, params.id]);


  const handleClick = async () => {
    const fields = {
      food,
      yesVotes,
      noVotes,
    };

    if (params.id) {
      const questionURL = `${baseURL2}/${params.id}`;
      await axios.put(questionURL, { fields }, config);
    }
    else {
      await axios.post(baseURL2, { fields }, config);
    }
    // props.setToggleFetch((curr) => !curr);
    history.push("/results");
  };

  return (
    <div className="ballot-container"> 
      {/* <img src={question.fields.image} alt={question.fields.food} /> */}
      <div>Is a {question.fields.food} a sandwich?</div>
      <form onClick={handleClick}>
        <button value={yesVotes} onClick={() => setYesVotes(1)}>
          YES
        </button>
        <button value={noVotes} onClick={() => setNoVotes(2)}>
          NO
        </button>
      </form>
    </div>
  );
};

export default Vote;