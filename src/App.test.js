import React from "react";
import { render } from "./setupTests";
import App from "./App";

test("should renders App", () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId("app")).toBeDefined();
});
