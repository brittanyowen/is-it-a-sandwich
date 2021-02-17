import React from "react";
import {Link} from 'react-router-dom'

const Results = (props) => {
  const { food, yesVotes, noVotes } = props.food.fields;
  const yes = parseInt(`${yesVotes}`); 
  const totalVotes = yes + parseInt(`${noVotes}`); 
  const percentYes = Math.floor((yes / totalVotes) * 100); 

  return (
    <div>
      <h3>{percentYes}% of voters consider a {food} a sandwich</h3>
      <Link to={`/vote/${props.food.id}`}>
        <button>VOTE</button>
      </Link>
    </div>
  );
};

export default Results;
