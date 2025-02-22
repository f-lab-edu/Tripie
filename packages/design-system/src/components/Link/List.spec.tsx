import { render, screen } from '@testing-library/react';

import { beforeAll, describe, expect, it } from 'vitest';
import UnstyledLink from './Link';
// describe('basic math', () => {
//   it('1+1=2', () => {
//     expect(1 + 1).toBe(2);
//   });
// });

describe('UnstyledLink Component', () => {
  beforeAll(() => {
    // ✅ Ensure `document` is available before running tests
    global.document = window.document;
  });

  it('renders the link with the correct text and href', () => {
    render(<UnstyledLink href="/home">Go Home</UnstyledLink>);

    const linkElement = screen.getByRole('link', { name: /go home/i });

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/home');
  });
});
