import * as types from "./types";

const movies = (state = [], action) => {
  switch (action.type) {
    case types.MOVIES_LOAD_LIST:
      return action.movies;

    case types.MOVIES_SORT_LIST:
      return state.sort((a, b) => b.IMDB_Rating - a.IMDB_Rating);

    case types.MOVIES_SET_RATING:
      return state.map(m => {
        if (m.id === action.movieId) {
          return {
            ...m,
            IMDB_Rating: action.rating
          };
        }
        return m;
      });

    default:
      return state;
  }
};

export default movies;
