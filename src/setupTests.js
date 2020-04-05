import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import movieData from "./data/movies.json";

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);

const store = mockStore({ movies: movieData });

const reduxRender = (ui, options) =>
  render(ui, {
    wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    ...options,
  });

// re-export everything for convenience
export * from "@testing-library/react";

// override render method
export { reduxRender as render, store };
