import {
  FETCH_PLAYERS_REQUEST,
  FETCH_PLAYERS_SUCCESS,
  FETCH_PLAYERS_ERROR,
  SELECTED_PLAYER,
  CREATE_CAPTAIN,
  CREATE_VICE_CAPTAIN,
  DELETE_PLAYER,
} from './types'

const INITIAL_STATE = {
  loading: false,
  players: [],
  error: '',
  selected: {
    players: [],
    captainId: null,
    viceCaptainId: null,
  },
}

const playersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PLAYERS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_PLAYERS_SUCCESS:
      return {
        ...state,
        loading: false,
        players: action.payload,
        error: '',
      }
    case FETCH_PLAYERS_ERROR:
      return {
        ...state,
        loading: true,
        error: action.payload,
      }
    case SELECTED_PLAYER: {
      return {
        ...state,
        selected: {
          ...state.selected,
          players: [...state.selected.players, action.payload],
        },
      }
    }
    case CREATE_CAPTAIN: {
      return {
        ...state,
        selected: {
          ...state.selected,
          captainId: action.payload,
        },
      }
    }
    case CREATE_VICE_CAPTAIN: {
      return {
        ...state,
        selected: {
          ...state.selected,
          viceCaptainId: action.payload,
        },
      }
    }
    case DELETE_PLAYER: {
      return {
        ...state,
        selected: {
          ...state.selected,
          players: state.selected.players.filter(
            (player) => player.id !== action.payload
          ),
        },
      }
    }
    default:
      return state
  }
}
export default playersReducer
