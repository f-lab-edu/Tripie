import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import MyButton from '.';
import { useAppTheme } from '../../hooks';

jest.mock('../../hooks/useAppTheme.ts', () => {
  return { useAppTheme: jest.fn(() => ({ mode: null, setMode: jest.fn(), toggle: jest.fn() })) };
});

describe('Button Test', () => {
  useAppTheme();
  it('Button 는 "pink" 색상을 가진다', () => {
    render(<MyButton>Button</MyButton>);

    const el = screen.getByTestId('my-button');

    expect(el).toBeInTheDocument();
    expect(el).toHaveClass('button');
  });
});
