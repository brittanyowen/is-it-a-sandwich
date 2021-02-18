import React from "react";
import axios from "axios";
import { useState } from "react";
import { baseURL, config } from "../services";
import './Form.css'

const Form = (props) => {
  const [author, setAuthor] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      author,
      comment,
    };

    await axios.post(baseURL, { fields }, config);

    props.setToggleFetch((curr) => !curr);

    setAuthor("");
    setComment("");
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <label className="author-label" htmlFor="author">Author: </label>
      <input value={author} onChange={(e) => setAuthor(e.target.value)}></input>
      <br></br>
      <label className="comment-label" htmlFor="comment">Comment: </label>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <br></br>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
