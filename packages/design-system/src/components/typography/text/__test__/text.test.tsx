import { expect } from "@jest/globals";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/jest-globals";
import { cleanup, render, screen } from "@testing-library/react";
import Text from "../_text";

afterEach(() => {
  cleanup(); // Resets the DOM after each test suite
});

it("text has 'os control'", () => {
  render(<Text>os control</Text>);
  expect(screen.getByText("os control")).toBeInTheDocument();
});
