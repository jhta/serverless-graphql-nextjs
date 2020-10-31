import React from "react";
import { PolarArea } from "@reactchartjs/react-chart.js";
import { IExperience } from "../interfaces/Experience";

import Store from 'store'

const getSelectedExperience = () => {
  const { state } = React.useContext(Store);
  return state.selectedExperience
  
}

const createData = ({ labels }: IExperience) => {
  const keys = Object.keys(labels);
  const values = (Object as any).values(labels);
  return {
    labels: keys,
    datasets: [
      {
        label: "Experience",
        data: values,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "yellow",
          "green",
          "blue",
          "pink",
          "purple",
          "red",
          "gold"
        ]
      }
    ]
  };
};

const options = {
  scale: {
    ticks: { beginAtZero: true }
  }
};

type GraphProps = {
  experience?: IExperience;
};

const Graph = () => {
  const experience = getSelectedExperience()
  return (
    <>
      {experience && (
        <div className="graph">
          <div className="header">
            <h1 className="title">Radar Chart</h1>
          </div>
          <PolarArea
            data={createData(experience)}
            options={options}
            type="polar-area"
          />
        </div>
      )}
      <style jsx>{`
      .graph {
        border: 1px solid red;
        min-width: 400px;
        min-height: 500px;
        flex: 1;
      }
    `}</style>
      {!experience && <div> not experience provided </div>}
    </>
  )
};

export default Graph;
