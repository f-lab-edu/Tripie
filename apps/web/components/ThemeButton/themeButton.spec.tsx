import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ThemeButton from './ThemeButton';

jest.mock('@tripie/design-system', () => {
  const actual = jest.requireActual('@tripie/design-system');

  return {
    ...actual,
    __esModule: true,
    MyButton: jest.fn(({ children, className, props }) => [children, className, props]),
    useAppTheme: jest.fn(() => ({ mode: null, setMode: jest.fn(), toggle: jest.fn() })),
  };
});

describe('Button Test', () => {
  it('ThemeButton 는 "os default"가 적혀있다', () => {
    render(<ThemeButton />); //!! <body><div>os control</div><body>
    screen.debug();
    const el = screen.getByText('os control');
    expect(el).toBeInTheDocument();
  });
});

describe('Toggle Button Test', () => {
  it('Toggle ThemeButton 는 "user control"가 적혀있다', () => {
    render(<ThemeButton.Toggle />); //!! <body><div>user control</div><body>
    screen.debug();
    const el = screen.getByText('user control');
    expect(el).toBeInTheDocument();
  });
});
