import React from "react";
import { PolarArea } from "@reactchartjs/react-chart.js";
import { IExperience } from "../interfaces/Experience";

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
  experience: IExperience | null;
};
const Graph = ({ experience }: GraphProps) => (
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
      }
    `}</style>
    {!experience && <div> not experience provided </div>}
  </>
);

export default Graph;
