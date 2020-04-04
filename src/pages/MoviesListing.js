import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import movieData from "../data/movies.json";
import { actions } from "../state/movies";
import MovieCard from "../components/MovieCard";

import "./style.css";

const MoviesListing = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies);
  const intervalRef = useRef(null);

  useEffect(() => {
    dispatch(actions.loadMovies(movieData));
    dispatch(actions.sortList());
  }, [dispatch]);

  const updateRating = (movieId, rating) => {
    dispatch(actions.setMovieRating(movieId, rating));
    dispatch(actions.sortList());
  };

  const toggleRandomRating = () => {
    if (intervalRef && intervalRef.current) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(() => {
        const movieObj = movies[Math.floor(Math.random() * movies.length)];
        dispatch(
          actions.setMovieRating(
            movieObj.id,
            Math.floor(Math.random() * Math.floor(10))
          )
        );
        dispatch(actions.sortList());
      }, 500);
    }
  };

  return (
    <div className="movies-container">
      <div className="title">
        <h1>Movies Rating App</h1>
        <button onClick={toggleRandomRating}>
          Random Rating {intervalRef.current ? "Stop" : "Start"}
        </button>
      </div>

      <ul>
        {movies &&
          movies.map(m => (
            <MovieCard key={m.id} movie={m} updateRating={updateRating} />
          ))}
      </ul>
    </div>
  );
};

export default MoviesListing;
