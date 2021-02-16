import React from "react";
import "./Comments.css"

const Comments = (props) => {

  const { author, comment } = props.comment.fields;

  return (
    <div className="comment-section">
      <h3>{author}</h3>
      <h4>{comment}</h4>
    </div>
  );
};

export default Comments;
