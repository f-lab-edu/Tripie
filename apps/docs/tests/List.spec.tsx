import { render, screen } from '@testing-library/react';
import { Link } from '@tripie-pyotato/design-system';
import { beforeAll, describe, expect, test } from 'vitest';

describe('UnstyledLink Component', () => {
  beforeAll(() => {
    // ✅ Ensure `document` is available before running tests
    global.document = window.document;
  });

  test('renders the link with the correct text and href', () => {
    render(<Link href="/home">Go Home</Link>);

    const linkElement = screen.getByRole('link', { name: /go home/i });

    expect(linkElement).toBeDefined();
    expect(linkElement).toMatchSnapshot();
  });
});
