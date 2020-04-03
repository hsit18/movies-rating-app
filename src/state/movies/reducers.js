import * as types from "./types";

const movies = (state = [], action) => {
  switch (action.type) {
    case types.MOVIES_LOAD_LIST:
      return action.movies;

    case types.MOVIES_SET_RATING:
      return state;

    default:
      return state;
  }
};

export default movies;
