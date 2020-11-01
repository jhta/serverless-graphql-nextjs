import { IExperience } from '../../interfaces/Experience'
import { formatDate } from './utils'
import styles from './listItem.module.css'
import * as actions from 'store/experiences/actions'
import { useDispatch } from 'store/hooks'

type ItemProps = {
  experience: IExperience
}

const Item = ({ experience }: ItemProps) => {
  const action = actions.setExperience({ selectedExperience: experience })
  const setExperience = useDispatch(action)
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