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
    <div id={props.food.id}>
      <h3 className="percentage-header">{food}</h3>
      <PieChart
        key={`${props.food.id}`}
        data={[
          { title: 'YES', value: yes, color: '#E38627' },
          { title: 'NO', value: no, color: '#C13C37' }
        ]}
        label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}% ${dataEntry.title} `}
        labelStyle={() => ({
          fontSize: '4px',
        })}
        radius={30}
        center={[50, 30]}
        viewBoxSize={[100, 90]}
      />
    </div>
  );
};
export default Results;
