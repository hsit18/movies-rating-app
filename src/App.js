import React from "react";
import "./App.css";
import MoviesListing from "./pages/MoviesListing";

const App = () => {
  return (
    <div className="app" data-testid="app">
      <MoviesListing />
    </div>
  );
};

export default App;
