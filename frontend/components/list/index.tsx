import { IExperience } from '../../interfaces/Experience'
import ListItem from '../list-item'
import styles from './list.module.css'
import { useSelect } from 'store/hooks'
import { getExperiences } from 'store/selectors'

const List = () => {
  const experiences: IExperience[] = useSelect(getExperiences)
  return (
    <div className={styles.list}>
      <ul>
        {
          experiences.map((experience, index) => <ListItem key={index} experience={experience} />)
        }
      </ul>
    </div>
  )
}

export default List
