import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { baseURL, config } from "../services";
import axios from "axios";
import Comments from "./Comments";
import Form from "./Form";

const Home = () => {
  const [comments, setComments] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const getComments = async () => {
      const resp = await axios.get(baseURL, config);
      setComments(resp.data.records);
    };
    getComments();
  }, [toggleFetch]);

  return (
    <div className="content">
      <div className="info">
        <h1>What is a sandwich?</h1>
        <img
          className="definition"
          src="https://imgur.com/XTC1a81.png"
          alt="definition of a sandwich"
        />
        <p className="blurb">
          But what constitutes a sandwich? Is it the container? Does it have to
          include two slices of square bread? Perhaps it has to do with what is
          inside the bread. Maybe a sandwich is determined by the way it is
          eaten or by it's portability. <strong>Click the sandwich </strong>
          below to cast your votes for "Is It A Sandwich?"!
        </p>
        <br></br>
        <div className="vote-button">
          <Link to="/vote/rec1QxVsG4LA9xooF">
            <button></button>
          </Link>
        </div>
      </div>

      <div className="comment-container">
        <p className="join">Join the conversation!</p>
        <div className="comment-section">
          <Form comments={comments} setToggleFetch={setToggleFetch} />
          {comments.map((comment) => (
            <Comments key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
