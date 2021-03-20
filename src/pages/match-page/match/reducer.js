import {
  FETCH_MATCH_REQUEST,
  FETCH_MATCH_SUCCESS,
  FETCH_MATCH_ERROR,
} from "./types";

const INITIAL_STATE = {
  loading: false,
  upcomingMatch: [],
  error: "",
};

const matchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_MATCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MATCH_SUCCESS:
      return {
        loading: false,
        upcomingMatch: action.payload,
        error: "",
      };
    case FETCH_MATCH_ERROR:
      return {
        loading: true,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default matchReducer;
