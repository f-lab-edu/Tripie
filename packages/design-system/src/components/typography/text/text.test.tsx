// themeButton.test.tsx
import { expect } from "@jest/globals";
import { cleanup, render } from "@testing-library/react";
import Text from "./_text";

afterEach(cleanup);

it("text has 'os control'", () => {
  const { getByText } = render(<Text>os control</Text>);
  expect(getByText("os control"));
});

it("text with \n renders to multiple span tags'", () => {
  const { queryAllByText } = render(<Text>os control\ntext\nbreak</Text>);
  expect(queryAllByText("\n")).toBeNull;
});
