import * as types from "./types";

export const loadMovies = movies => dispatch => {
  return dispatch({
    type: types.MOVIES_LOAD_LIST,
    movies
  });
};

export const setMovieRating = movie => dispatch => {
  return dispatch({
    type: types.MOVIES_SET_RATING,
    movie
  });
};
