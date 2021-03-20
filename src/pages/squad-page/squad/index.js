import React from 'react'
import { connect } from 'react-redux'

import SquadList from './squad-list'

import { groupByKey } from '../../../utils'

import './index.scss'

const Squad = ({ players, activeTab }) => {
  if (!players) return <div>loading....</div>

  const playersByRole = groupByKey(players, 'role')

  const playersList = playersByRole[activeTab]

  if (!playersList) return null

  return (
    <div className="squads">
      <div className=" league col-6 p-0">
        <div className="table">
          {playersList.map((player) => {
            return <SquadList key={player.id} player={player} />
          })}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    players: state.players.players,
  }
}

export default connect(mapStateToProps)(Squad)
