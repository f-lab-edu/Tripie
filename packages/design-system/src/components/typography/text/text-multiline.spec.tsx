import '@testing-library/jest-dom';
import '@testing-library/jest-dom/jest-globals';
import { cleanup, render, screen } from '@testing-library/react';
import Text from './_text';

afterEach(() => {
  cleanup(); // Resets the DOM after each test suite
});

it('text has multiLine', () => {
  render(<Text>{'줄바꿈이 \n 될까요?'}</Text>);
  expect(screen.queryByText('\n')).toBeNull();
});
