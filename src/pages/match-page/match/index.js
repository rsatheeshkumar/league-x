import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import MatchList from '../match-list'
import './index.scss'

import { fetchMatch } from './action'

const UpcomingMatch = ({ matches, onFetchRequest }) => {
  useEffect(() => {
    onFetchRequest()
  }, [onFetchRequest])

  if (!matches) {
    return <div>Loading</div>
  }
  return (
    <div className=" league col-11 p-0 bg-dark">
      <div className="container-fluid">
        <ul className="navbar-nav navbar-nav d-flex flex-row justify-content-around">
          <li className="nav-item ">
            <Link className="nav-link active" aria-current="page" to="/">
              Live
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
              Upcoming
            </Link>
          </li>{' '}
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
              Completed
            </Link>
          </li>
        </ul>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Match</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        {matches.map((match) => {
          return <MatchList key={match.id} match={match} />
        })}
      </table>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    matches: state.matches.upcomingMatch,
  }
}
const mapDispatchToProps = (dispatch) => ({
  onFetchRequest: () => dispatch(fetchMatch()),
})

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingMatch)
