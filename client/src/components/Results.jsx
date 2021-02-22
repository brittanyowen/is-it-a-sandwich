import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import "./Results.css";

// https://github.com/toomuchdesign/react-minimal-pie-chart

const Results = (props) => {
  const { food, yesVotes, noVotes } = props.food.fields;
  const yes = parseInt(`${yesVotes}`);
  const no = parseInt(`${noVotes}`);

  return (
    <div>
      <div id={props.food.id}>
        <h3 className="percentage-header">
          {food === "poptart" ? "poptart (is a ravioli)" : food}
        </h3>
        <PieChart
          key={`${props.food.id}`}
          data={[
            { title: "YES", value: yes, color: "#8fcb9b" },
            { title: "NO", value: no, color: "#5b9279" },
          ]}
          label={({ dataEntry }) =>
            `${Math.round(dataEntry.percentage)}% ${dataEntry.title} `
          }
          labelStyle={{
            fontSize: "8px",
          }}
          radius={40}
          center={[50, 40]}
          viewBoxSize={[100, 90]}
          animate={true}
          animationDuration={1000}
        />
      </div>
    </div>
  );
};
export default Results;
