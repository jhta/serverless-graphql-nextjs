import { useContext } from 'react'
import { IExperience } from '../../interfaces/Experience'
import Store from 'store'
import { EXPERIENCES_ACTION_NAMES } from 'store/experiences/types';
import { formatDate } from './utils'
import styles from './listItem.module.css'

type ItemProps = {
  experience: IExperience
}

const useSetExperience = (selectedExperience: IExperience | undefined) => {
  const store = useContext(Store);

  return () => store.dispatch({
    type: EXPERIENCES_ACTION_NAMES.SET_SELECTED_EXPERIENCE,
    payload: {
      selectedExperience,
    }
  })
}

const Item = ({ experience }: ItemProps) => {
  const setExperience = useSetExperience(experience)
  const { createdAt, description } = experience 
  const handleCickItem = (e: any) => {
    e.preventDefault()
    setExperience()
  }

  return (
    <>
      <li
        className={styles.item}
        onClick={handleCickItem}>
        <p className={styles.description}>{description}</p>
        <span className={styles.date}>{formatDate(createdAt)}</span>
      </li>
      
    </>
  )
}

export default Item