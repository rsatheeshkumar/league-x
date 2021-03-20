import axios from "../../../config/config";

import {
  FETCH_MATCH_REQUEST,
  FETCH_MATCH_SUCCESS,
  FETCH_MATCH_ERROR,
} from "./types";

export const getRequest = (match) => ({
  type: FETCH_MATCH_REQUEST,
});
export const getMatch = (match) => ({
  type: FETCH_MATCH_SUCCESS,
  payload: match,
});
export const getError = (errorMsg) => ({
  type: FETCH_MATCH_ERROR,
  payload: errorMsg,
});

export const fetchMatch = () => {
  return (dispatch) => {
    axios
      .get("/matches/upcoming-matches", {
        headers: {
          Content_Type: "application/json",
        },
      })
      .then((response) => {
        const match = response.data.matches.cricket;
        dispatch(getMatch(match));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(getError(errorMsg));
      });
  };
};
