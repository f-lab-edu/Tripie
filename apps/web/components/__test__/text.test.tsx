import { expect } from "@jest/globals";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/jest-globals";
import { cleanup, render } from "@testing-library/react";
import { Text } from "@tripie/design-system";

afterEach(cleanup);

it("text has 'os control'", () => {
  const { getByText } = render(<Text>os control</Text>);

  expect(getByText("os control")).toBeInTheDocument();
});
