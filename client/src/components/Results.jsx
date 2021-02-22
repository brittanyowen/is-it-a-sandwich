import React from "react";
import {PieChart} from 'react-minimal-pie-chart'
import "./Results.css"

const Results = (props) => {
  const { food, yesVotes, noVotes } = props.food.fields;
  const yes = parseInt(`${yesVotes}`); 
  const no = parseInt(`${noVotes}`)
  const totalVotes = yes + parseInt(`${noVotes}`); 
  const percentYes = Math.round((yes / totalVotes) * 100); 

  return (
    <div>
    <div id={props.food.id}>
      <h3 className="percentage-header">{food === "poptart" ? "poptart (is a ravioli)" : food}</h3>
      {/* <div>* results based on {totalVotes} voters </div> */}
      <PieChart
        key={`${props.food.id}`}
        data={[
          { title: 'YES', value: yes, color: '#137547' },
          { title: 'NO', value: no, color: '#5a7c70' }
        ]}
        label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}% ${dataEntry.title} `}
        labelStyle={() => ({
          fontSize: '8px',
        })}
        radius={40}
        center={[50, 40]}
        viewBoxSize={[100, 90]}
        />
    </div>
        </div>
  );
};
export default Results;
