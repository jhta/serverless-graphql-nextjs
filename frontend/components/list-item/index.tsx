import { IExperience } from '../../interfaces/Experience'
import { formatDate, formatLabel } from './utils'
import styles from './listItem.module.css'
import * as actions from 'store/experiences/actions'
import { useDispatch, useSelect } from 'store/hooks'
import { isSelectedCreator } from 'store/selectors'

type ItemProps = {
  experience: IExperience
}

const Item = ({ experience }: ItemProps) => {
  const { createdAt, description, labels } = experience 
  const isSelected = useSelect(isSelectedCreator(createdAt))

  const action = actions.setExperience({ selectedExperience: experience })
  const setExperience = useDispatch(action)

  const handleCickItem = (e: any) => {
    e.preventDefault()
    setExperience()
  }

  return (
    <>
      <li
        className={isSelected ? styles.itemSelected : styles.item}
        onClick={handleCickItem}>
        <p>{formatLabel(labels)}</p>
        <p className={styles.description}>{description}</p>
        <span className={styles.date}>{formatDate(createdAt)}</span>
      </li>
      
    </>
  )
}

export default Item