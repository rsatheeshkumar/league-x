import { connect } from 'react-redux'

import SelectedSquadList from '../selected-squad-list'

const CreateSquad = ({ selectedPlayers }) => {
  return (
    <>
      <div>
        {selectedPlayers.map((player) => {
          return <SelectedSquadList key={player.id} player={player} />
        })}
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    selectedPlayers: state.players.selected.players,
  }
}

export default connect(mapStateToProps)(CreateSquad)
