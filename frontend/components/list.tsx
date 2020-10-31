
import { formatRelative } from 'date-fns'
import { IExperience } from '../interfaces/Experience'

type ItemProps = {
  experience: IExperience
}
type ListProps = {
  experiences: IExperience[]
}

const formatDate = (createdAt: string): string =>
formatRelative(new Date(parseInt(createdAt)), new Date())

const Item = ({ experience: { createdAt} }: ItemProps) => (
  <li>{formatDate(createdAt)}</li>
)

const List = ({ experiences }: ListProps) => (
  <div className="list">
      <h1>List</h1>
      <ul>
        {
          experiences.map((experience, index) => <Item key={index} experience={experience}/>)
        }
      </ul>
      </div>
)

export default List