import { expect } from "@jest/globals";
import { cleanup, render } from "@testing-library/react";
// import localFont from "next/font/local";
// import ThemeButton from "../ThemeButton";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/jest-globals";
import { Text } from "@tripie/design-system";
// import ThemeButton from "../ThemeButton/ThemeButton";
// jest.mock("next/font/local");

afterEach(cleanup);

// it("text has 'os control'", () => {
//   const { getByText } = render(<Text>os control</Text>);
//   expect(getByText("os control"));
// });

// describe("button", () => {
//   test("render test", () => {
//     const { getByText } = render(<ThemeButton />);
//     expect(getByText("os control")).not.toThrow();
//   });
// });

it("text has 'os control'", () => {
  //   // localFont({
  //   //   src: [
  //   //     {
  //   //       path: "../../../static/fonts/MaruBuri-Regular.woff",
  //   //       style: "normal",
  //   //     },
  //   //   ],
  //   // });
  const { getByText } = render(<Text>os control</Text>);

  expect(getByText("os control")).toBeInTheDocument();
});
