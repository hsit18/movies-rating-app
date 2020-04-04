import * as types from "./types";

export const loadMovies = movies => dispatch => {
  return dispatch({
    type: types.MOVIES_LOAD_LIST,
    movies
  });
};

export const setMovieRating = (movieId, rating) => dispatch => {
  return dispatch({
    type: types.MOVIES_SET_RATING,
    movieId,
    rating
  });
};

export const sortList = () => dispatch => {
  return dispatch({
    type: types.MOVIES_SORT_LIST,
  });
};
