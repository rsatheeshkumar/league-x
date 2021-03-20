import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import SquadHead from './squad-head'
import Squad from './squad'
import SquadCounter from './squad-counter'
import SelectedSquad from './selected-squad'

import { fetchPlayers } from './action'

const SquadPage = ({ match, onFetchRequest }) => {
  const id = match.params.id

  const [activeTab, setActiveTab] = useState('Batsman')

  useEffect(() => {
    onFetchRequest(id)
  }, [onFetchRequest, id])

  const updateActiveTab = (newValue) => {
    setActiveTab(newValue)
  }

  return (
    <div className="row wrapper d-flex flex-row">
      <div className="col-6">
        <SquadHead activeTab={activeTab} updateActiveTab={updateActiveTab} />
        <Squad activeTab={activeTab} />
      </div>
      <div className="col-6">
        <SquadCounter />
        <SelectedSquad />
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  onFetchRequest: (id) => dispatch(fetchPlayers(id)),
})

export default connect(null, mapDispatchToProps)(SquadPage)
