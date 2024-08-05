import '@testing-library/jest-dom';
import '@testing-library/jest-dom/jest-globals';
import { render, screen } from '@testing-library/react';

import UnstyledLink, { LinkProps } from './_link';

jest.mock('next/link', () => {
  const { cloneElement } = jest.requireActual('react');
  return ({ children, ...rest }: LinkProps) => cloneElement(children, { ...rest });
});

it("link has '떡볶이'", () => {
  render(<UnstyledLink href="#">떡볶이</UnstyledLink>);
  expect(screen.getByText('떡볶이')).toBeInTheDocument();
});
