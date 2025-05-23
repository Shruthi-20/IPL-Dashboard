// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {item} = props
  const {id, name, teamImageUrl} = item

  return (
    <Link to={`/team-matches/${id}`} className="item-link" key={id}>
      <li className="team-card-item" key={id}>
        <img src={teamImageUrl} alt={name} className="team-image" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
