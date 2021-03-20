import { connect, useSelector } from 'react-redux'

import { selectPlayer, deletePlayer } from '../action'
import { getSelectedPlayer, getSelectedPlayersTotalCredit } from '../selectors'

import { groupByKey } from '../../../utils'

const minMaxCalculation = {
  Batsman: {
    min: 3,
    max: 7,
  },
  Bowler: {
    min: 3,
    max: 7,
  },
  'Wicket-Keeper': {
    min: 0,
    max: 4,
  },
  'All-Rounder': {
    min: 1,
    max: 5,
  },
}

const SquadList = ({
  player,
  onSelectPlayer,
  onDeletePlayer,
  selectedPlayersList,
}) => {
  const role = player.role
  const selectedPlayer = useSelector(getSelectedPlayer(player.id))
  const totalCredit = useSelector(getSelectedPlayersTotalCredit())
  const groupedPlayers = groupByKey(selectedPlayersList, 'role')

  const onClick = () => {
    if (selectedPlayer) {
      if (groupedPlayers[role].length > minMaxCalculation[role].min) {
        onDeletePlayer(player.id)
      }
    } else {
      if (totalCredit + player.event_player_credit > 100) {
        return
      }
      if (selectedPlayersList.length >= 11) {
        return
      }
      if (groupedPlayers[role]) {
        if (groupedPlayers[role].length < minMaxCalculation[role].max) {
          onSelectPlayer(player)
        }
      } else {
        onSelectPlayer(player)
      }
    }
  }

  return (
    <div className="player-list scroll-bar-color px-2">
      <div className="pick-squad-player d-flex align-items-stretch justify-content-between mb-2 squad-player d-player">
        <div className="col-auto align-self-center">
          <img src={player.team_logo} alt={player.team} />
        </div>
        <div className="col-2 align-self-center text-center">
          <img
            src={
              role === 'Batsman'
                ? 'https://www.leaguex.com/images/Batsman.svg'
                : role === 'Bowler'
                ? 'https://www.leaguex.com/images/Bowler.svg'
                : role === 'All-Rounder'
                ? 'https://www.leaguex.com/images/All-Rounder.svg'
                : 'https://www.leaguex.com/images/Wicket-Keeper.svg'
            }
            alt={player.role}
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
            className={`btn btn-${selectedPlayer ? 'danger' : 'success'}`}
            onClick={onClick}
          >
            {selectedPlayer ? '-' : '+'}
          </button>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => ({
  selectedPlayersList: state.players.selected.players,
})
const mapDispatchToProps = (dispatch) => ({
  onSelectPlayer: (player) => dispatch(selectPlayer(player)),
  onDeletePlayer: (id) => dispatch(deletePlayer(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SquadList)
