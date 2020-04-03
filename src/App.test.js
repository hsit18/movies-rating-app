import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { container } = render(<App />);
  expect(container.querySelectorAll("div.app")).toHaveLength(1);
  expect(container.querySelector("div.app").textContent).toBe(
    "Movies Rating App"
  );
});
