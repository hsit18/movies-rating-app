import React from "react";
import { render, cleanup } from "../setupTests";
import movieData from "../data/movies.json";

import MovieCard from "./MovieCard";

afterEach(cleanup);

describe("<MovieCard />", () => {
  const movieObj = movieData[1];

  it("should render title as passed", () => {
    const { container, debug } = render(<MovieCard movie={movieObj} />);
    expect(container.querySelector(".card-title h3").textContent).toBe(
      movieObj.Title
    );
    //debug();
  });

  it("should render total stars as 10", () => {
    const { container } = render(<MovieCard movie={movieObj} />);
    expect(container.querySelectorAll(".card-footer div input")).toHaveLength(
      10
    );
  });

  it("should render filled star as passed rating", () => {
    const { container } = render(<MovieCard movie={movieObj} />);
    expect(
      container.querySelectorAll(
        ".card-footer div label.dv-star-rating-full-star"
      )
    ).toHaveLength(parseInt(movieObj.IMDB_Rating, 10));
  });
});
