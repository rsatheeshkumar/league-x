import axios from '../../config/config'

import {
  FETCH_PLAYERS_REQUEST,
  FETCH_PLAYERS_SUCCESS,
  FETCH_PLAYERS_ERROR,
  SELECTED_PLAYER,
  DELETE_PLAYER,
  CREATE_CAPTAIN,
  CREATE_VICE_CAPTAIN,
  // POST_PLAYERS_SUCCESS,
} from './types'

export const getRequest = () => ({
  type: FETCH_PLAYERS_REQUEST,
})

export const getPlayers = (players) => ({
  type: FETCH_PLAYERS_SUCCESS,
  payload: players,
})

export const getError = (errorMsg) => ({
  type: FETCH_PLAYERS_ERROR,
  payload: errorMsg,
})

export const fetchPlayers = (id) => {
  return (dispatch) => {
    axios
      .get(`/squad/players?match_id=${id}`, {
        headers: {
          Content_Type: 'application/json',
        },
      })
      .then((response) => {
        const players = response.data
        dispatch(getPlayers(players))
      })
      .catch((error) => {
        const errorMsg = error.message
        dispatch(getError(errorMsg))
      })
  }
}

export const selectPlayer = (player) => {
  return {
    type: SELECTED_PLAYER,
    payload: player,
  }
}

export const deletePlayer = (id) => {
  return {
    type: DELETE_PLAYER,
    payload: id,
  }
}
export const createCaptain = (id) => {
  console.log(id)
  return {
    type: CREATE_CAPTAIN,
    payload: id,
  }
}
export const createViceCaptain = (id) => {
  console.log(id)
  return {
    type: CREATE_VICE_CAPTAIN,
    payload: id,
  }
}
