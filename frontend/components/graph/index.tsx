import React from "react";
import { PolarArea } from "@reactchartjs/react-chart.js";
import { IExperience } from "interfaces/Experience";
import { createData } from './utils'
import styles from './graph.module.css'

import Store from 'store'

const getSelectedExperience = () => {
  const { state } = React.useContext(Store);
  return state.selectedExperience
  
}

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
        <div className={styles.graph}>
          <PolarArea
            data={createData(experience)}
            options={options}
            type="polar-area"
          />
        </div>
      )}
      <EmptyState isEmpty={!experience} />
    </>
  )
};

const EmptyState = ({ isEmpty }: { isEmpty: boolean}) => !isEmpty? null : (
  <div className={styles.empty}>
    There is not experiences yet, created the first one :)
  </div>
)

export default Graph;
