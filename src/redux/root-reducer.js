import { combineReducers } from 'redux'
import matchReducer from '../pages/match-page/match/reducer'
import playersReducer from '../pages/squad-page/reducer'
// import SelectedReducer from "../components/selected-squad/reducer";

const rootReducer = combineReducers({
  matches: matchReducer,
  players: playersReducer,
  // selectedPlayers: SelectedReducer,
})

export default rootReducer
