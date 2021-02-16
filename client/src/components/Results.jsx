import React from "react";

const Results = (props) => {
  const { food, yesVotes, noVotes } = props.food.fields;
  const yes = parseInt(`${yesVotes}`); 
  const totalVotes = yes + parseInt(`${noVotes}`); 
  const percentYes = Math.floor((yes / totalVotes) * 100); 

  return (
    <div>
      <h1>{percentYes}% of voters consider a {food} a sandwich</h1>
    </div>
  );
};

export default Results;
