import "@testing-library/jest-dom";
import "@testing-library/jest-dom/jest-globals";
import { cleanup, render, screen } from "@testing-library/react";

afterEach(() => {
  cleanup(); // Resets the DOM after each test suite
});

import UnstyledLink, { LinkProps } from "../_link";

jest.mock("next/link", () => {
  const { cloneElement } = jest.requireActual("react");
  return ({ children, ...rest }: LinkProps) =>
    cloneElement(children, { ...rest });
});

it("link has '떡볶이'", () => {
  render(<UnstyledLink href="#">떡볶이</UnstyledLink>);
  expect(screen.getByText("떡볶이")).toBeInTheDocument();
});
