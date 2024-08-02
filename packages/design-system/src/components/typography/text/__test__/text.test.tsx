import { expect } from "@jest/globals";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/jest-globals";
import { render, screen } from "@testing-library/react";
import Text from "../_text";

it("text has 'os control'", () => {
  render(<Text>os control</Text>);
  expect(screen.getByText("os control")).toBeInTheDocument();
});
