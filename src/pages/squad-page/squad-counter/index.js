import React from 'react'
import { useSelector } from 'react-redux'

import {
  getSelectedPlayerLength,
  getSelectedPlayersTotalCredit,
  getSelectedPlayersByCountry,
} from '../selectors'

const SquadCounter = () => {
  const selectedPlayerLength = useSelector(getSelectedPlayerLength())
  const totalCredit = useSelector(getSelectedPlayersTotalCredit())
  const country = useSelector(getSelectedPlayersByCountry())

  return (
    <div className="d-flex mt-5">
      <div className="col-auto align-self-center">
        <h5>My Squad 1</h5>
      </div>
      <div className="col d-flex">
        <div className="col no-of-player">
          <span className="active">{selectedPlayerLength}/11</span>
          <h4>Players</h4>
          <span></span>
        </div>
        <div className="col team-one-count">
          <span>0</span>

          <h4>
            <img
              src="https://s3.ap-south-1.amazonaws.com/leaguex/team-images/RBCC.png"
              alt="img12"
            />
            <span>{country.Australia && country.Australia.length}</span>
          </h4>
          <span></span>
        </div>
        <div className="col team-two-count">
          <span>0</span>
          <h4>
            <img
              src="https://s3.ap-south-1.amazonaws.com/leaguex/team-images/ALCC.png"
              alt="image12"
            />
            <span>{country.India && country.India.length}</span>
          </h4>
          <span></span>
        </div>
        <div className="col credit-left active">
          <span>{100 - totalCredit}</span>
          <h4>Cr Left</h4>
          <span></span>
        </div>
      </div>
    </div>
  )
}

export default SquadCounter
