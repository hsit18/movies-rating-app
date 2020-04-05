import React from "react";
import { render, cleanup, fireEvent, wait } from "../setupTests";

import MoviesListing from "./MoviesListing";

afterEach(cleanup);
describe("<MoviesListing />", () => {
  it("should render title as Movies Rating App", () => {
    const { container } = render(<MoviesListing />);
    expect(container.querySelector(".title h1").textContent).toBe(
      "Movies Rating App"
    );
  });
  it("should render all movies", () => {
    const { getByTestId } = render(<MoviesListing />);
    expect(getByTestId("movies-list").children).toHaveLength(100);
  });

  it("should render random rating button", async () => {
    const { getByTestId, debug } = render(<MoviesListing />);
    expect(getByTestId("random-rating").textContent).toBe(
      "Random Rating Start"
    );
    const randomRatingButton = getByTestId("random-rating");
    fireEvent.click(randomRatingButton);
    await wait(() => {
      expect(randomRatingButton.textContent).toBe(
        "Random Rating Start"
      );
    });
  });
});
