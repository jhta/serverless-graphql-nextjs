import { IExperience } from '../../interfaces/Experience'
import ListItem from '../list-item'
import styles from './list.module.css'


type ListProps = {
  experiences: IExperience[]
}

const List = ({ experiences }: ListProps) => (
  <div className={styles.list}>
    <ul>
      {
        experiences.map((experience, index) => <ListItem key={index} experience={experience}/>)
      }
    </ul>
  </div>
)

export default List