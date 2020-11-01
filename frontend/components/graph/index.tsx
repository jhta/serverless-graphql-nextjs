import React from "react";
import { PolarArea } from "@reactchartjs/react-chart.js";
import { IExperience } from "interfaces/Experience";
import Button from 'components/button'
import { createData, graphOptions } from './utils'
import { UI_ACTION_NAMES } from 'store/ui/types'
import styles from './graph.module.css'

import Store from 'store'

const getSelectedExperience = () => {
  const { state } = React.useContext(Store);
  return state.experiences.selectedExperience
  
}

const useDispatchShowModal = () => {
  const { dispatch } = React.useContext(Store)

  return () => dispatch({
    type: UI_ACTION_NAMES.SHOW_MODAL,
    payload: undefined
  })
}

type GraphProps = {
  experience: IExperience;
};

const Graph = ({ experience }: GraphProps) => {
  const showModal = useDispatchShowModal()

  const handleClick = (event: MouseEvent) => {
    event.preventDefault()
    showModal()
  }

  return (
    <div className={styles.graphWrapper}>
      <div className={styles.graph}>
        <PolarArea
          data={createData(experience)}
          options={graphOptions}
          type="polar-area"
        />
      </div>
      <div className={styles.graphBottom}>
        <Button onClick={handleClick}>Create experience</Button>
      </div>
    </div>
  )
}

const EmptyState = () => (
  <div className={styles.empty}>
    There is not experiences yet, created the first one :)
  </div>
)

const GraphWrapper = () => {
  const experience = getSelectedExperience()

  if (!experience) return <EmptyState />
  return <Graph experience={experience} />
};

export default GraphWrapper;
