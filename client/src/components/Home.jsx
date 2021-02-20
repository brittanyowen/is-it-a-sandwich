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
      <img
        className="definition"
        src="https://imgur.com/XTC1a81.png"
        alt="definition of a sandwich"
      />
      <br></br>
      <br></br>
      <div className="vote-button">
        <Link to="/vote/rec1QxVsG4LA9xooF">
          <button>VOTE</button>
        </Link>
      </div>

      <div className="comment-section">
        <h4>Join the conversation!</h4>
        <Form comments={comments} setToggleFetch={setToggleFetch} />
        {comments.map((comment) => (
          <Comments key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Home;
