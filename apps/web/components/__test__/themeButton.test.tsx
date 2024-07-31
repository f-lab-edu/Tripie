import { expect } from "@jest/globals";
import { cleanup, render } from "@testing-library/react";
// import localFont from "next/font/local";
// import ThemeButton from "../ThemeButton";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/jest-globals";
import ThemeButton from "../ThemeButton/ThemeButton";
// import ThemeButton from "../ThemeButton/ThemeButton";
// jest.mock("next/font/local");

afterEach(cleanup);
//!! TODO : [FIX] TypeError: Cannot read properties of null (reading 'useState')

describe("button", () => {
  test("has text 'os control'", () => {
    const { queryByText } = render(<ThemeButton />);
    expect(queryByText("os control")).toReturn();
  });
});
