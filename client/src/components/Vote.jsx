import React from "react";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { baseURL2, config } from "../services";
import "./Vote.css";

const Vote = (props) => {
  const [food, setFood] = useState("");
  const [yesVotes, setYesVotes] = useState("");
  const [noVotes, setNoVotes] = useState("");
  const history = useHistory();
  const params = useParams();

  const question = props.foods.find((q) => params.id === q.id);
  
  useEffect(() => {
    if (params.id) {
      if (params.id === "undefined") {
        console.log("line 20");
        history.push("/");
      } else if (question) {
        setFood(question.fields.food);
        setYesVotes(question.fields.yesVotes);
        setNoVotes(question.fields.noVotes);
      }
    } else {
      history.push("/");
    }
  }, [props.foods, params.id]);

  const addYes = () => {
    const yes = parseInt(`${yesVotes}`) + 1;
    setYesVotes(`${yes}`);
  };

  const addNo = () => {
    const no = parseInt(`${noVotes}`) + 1;
    setNoVotes(`${no}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fields = {
      food,
      yesVotes,
      noVotes,
      image: question.fields.image,
    };

    if (params.id) {
      const questionURL = `${baseURL2}/${params.id}`;
      await axios.patch(questionURL, { fields }, config);
    } else {
      await axios.post(baseURL2, { fields }, config);
    }
    props.setToggleFetch((curr) => !curr);

    // const curr = props.foods.findIndex((food) => food.id === params.id); 

    if (params.id === props.foods[props.foods.length - 1].id) {
      history.push("/results");
    } else
    // { history.push(`/vote/${props.food[curr + 1].id}`) }
    if (params.id === "rec1QxVsG4LA9xooF") {
      history.push("/vote/rec7IYq3xD6pnefVO");
    } else if (params.id === "rec7IYq3xD6pnefVO") {
      history.push("/vote/rec9OOCfXOiHghDnX");
    } else if (params.id === "rec9OOCfXOiHghDnX") {
      history.push("/vote/recPM0k41EXJW3ReP");
    } else if (params.id === "recPM0k41EXJW3ReP") {
      history.push("/vote/recTLF5qu9hGsznSl");
    } else if (params.id === "recTLF5qu9hGsznSl") {
      history.push("/vote/recg9THNcp1HBzyTc");
    } else if (params.id === "recg9THNcp1HBzyTc") {
      history.push("/vote/rechBGKkwornoCkuO");
    } else if (params.id === "rechBGKkwornoCkuO") {
      history.push("/vote/recvAJWABPg8rwdr5");
    } else if (params.id === "recvAJWABPg8rwdr5") {
      history.push("/vote/recySS5dwS69ZfFQl");
    }
  };

  if (!question) {
    return <h4>Loading...</h4>;
  }

  return (
    <div className="ballot-container">
      <div>
        <img src={question.fields.image} alt={question.fields.food} />
        <div className="question">
          Is a {question.fields.food} a{" "}
          {question.fields.food === "poptart" ? "ravioli" : "sandwich"}?
        </div>
        <form onSubmit={handleSubmit}>
          <button onClick={addYes}>YES</button>
          <button onClick={addNo}>NO</button>
        </form>
      </div>
    </div>
  );
};

export default Vote;
