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
  experience: IExperience
  handleShowModal: Function
};

const Graph = ({ experience, handleShowModal }: GraphProps) => {

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
        <Button onClick={handleShowModal}>Create experience</Button>
      </div>
    </div>
  )
}

const EmptyState = ({ handleShowModal }: any) => (
  <div className={styles.empty}>
    <p className={styles.emptyText}>There is not experiences yet, created the first one :)</p>
    <div className={styles.graphBottom}>
        <Button onClick={handleShowModal}>Create experience</Button>
      </div>
  </div>
)

const GraphWrapper = () => {
  const experience = useSelect(getSelectedExperience)
  const showModal = useDispatch(showModalAction)

  const handleShowModal = (event: MouseEvent) => {
    event.preventDefault()
    showModal()
  }

  if (!experience) return (
    <EmptyState
      handleShowModal={handleShowModal}
    />
  )

  return <Graph
    handleShowModal={handleShowModal}
    experience={experience}
  />
};

export default GraphWrapper;
