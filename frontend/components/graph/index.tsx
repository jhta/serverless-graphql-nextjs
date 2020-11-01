import React from "react";
import { PolarArea } from "@reactchartjs/react-chart.js";
import { IExperience } from "interfaces/Experience";
import Button from 'components/button'
import { createData, graphOptions } from './utils'
import styles from './graph.module.css'

import { getSelectedExperience } from 'store/selectors'
import { useSelect, useDispatch } from 'store/hooks'
import { showModal as showModalAction } from 'store/ui/actions'

type GraphProps = {
  experience: IExperience;
};

const Graph = ({ experience }: GraphProps) => {
  const showModal = useDispatch(showModalAction)

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
      <div className={styles.description}>{ `"${experience.description}"` }</div>
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
  const experience = useSelect(getSelectedExperience)

  if (!experience) return <EmptyState />
  return <Graph experience={experience} />
};

export default GraphWrapper;
