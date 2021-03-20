import { connect } from 'react-redux'
import { deletePlayer, createCaptain, createViceCaptain } from '../action'

const SelectedSquadList = ({
  player,
  onDeletePlayer,
  onSelectCaptain,
  onSelectViceCaptain,
}) => {
  const isImage = player.role

  if (!player) {
    return <div> Loading...!</div>
  }

  const handleClick = (id) => {
    onDeletePlayer(id)
  }

  return (
    <div className="player-list scroll-bar-color px-2 mt-4">
      <div className="pick-squad-player d-flex align-items-stretch justify-content-between mb-2 squad-player d-player">
        <div className="col-auto align-self-center">
          <img src={player.team_logo} alt="player-role" />
        </div>
        <div className="col-2 align-self-center text-center">
          <img
            src={
              isImage === 'Batsman'
                ? 'https://www.leaguex.com/images/Batsman.svg'
                : isImage === 'Bowler'
                ? 'https://www.leaguex.com/images/Bowler.svg'
                : isImage === 'All-Rounder'
                ? 'https://www.leaguex.com/images/All-Rounder.svg'
                : 'https://www.leaguex.com/images/Wicket-Keeper.svg'
            }
            alt="player.role"
          />
        </div>
        <div className="col-4 align-self-center text-truncate">
          {player.name}
        </div>
        <div className="col-2 align-self-center">
          {player.event_total_points}
        </div>
        <div className="col-2 align-self-center">
          {player.event_player_credit}
        </div>
        <div className="col-auto align-self-center text-right pl-3">
          <button
            className="btn btn-primary p-1 m-1"
            onClick={() => onSelectCaptain(player.id)}
          >
            C
          </button>
          <button
            className="btn btn-primary p-1 m-1"
            onClick={() => onSelectViceCaptain(player.id)}
          >
            VC
          </button>
          <button
            className="btn btn-danger"
            onClick={() => handleClick(player.id)}
          >
            -
          </button>
        </div>
      </div>
      <hr />
    </div>
  )
}
const mapDispatchToProps = (dispatch) => ({
  onDeletePlayer: (id) => dispatch(deletePlayer(id)),
  onSelectCaptain: (id) => dispatch(createCaptain(id)),
  onSelectViceCaptain: (id) => dispatch(createViceCaptain(id)),
})

export default connect(null, mapDispatchToProps)(SelectedSquadList)
