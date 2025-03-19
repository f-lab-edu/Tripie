import { act, renderHook } from '@testing-library/react-hooks';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useLocalStorage } from 'usehooks-ts';
import useFunnel from '../useFunnel';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
  usePathname: jest.fn(),
}));

jest.mock('usehooks-ts', () => ({
  useLocalStorage: jest.fn(),
}));

describe('useFunnel Hook', () => {
  const mockPush = jest.fn();
  const mockReplace = jest.fn();
  const mockRouter = {
    push: mockPush,
    replace: mockReplace,
  };

  beforeEach(() => {
    // Clear mocks before each test
    mockPush.mockClear();
    mockReplace.mockClear();

    // Mock the router and search params
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams());
    (usePathname as jest.Mock).mockReturnValue('/trip-planner');

    // Mock useLocalStorage
    (useLocalStorage as jest.Mock).mockReturnValue([[], jest.fn()]);
  });

  it('initializes funnel correctly', () => {
    const initialStep = { step: 'step1', context: { key: 'value' }, index: 0 };
    const { result } = renderHook(() => useFunnel({ id: 'funnel1', initial: initialStep }));

    expect(result.current.step).toBe('step1');
    expect(result.current.context).toEqual({ key: 'value' });
  });

  it('pushes the step to URL and local storage when the step changes', () => {
    const initialStep = { step: 'step1', context: { key: 'value' }, index: 0 };
    const { result } = renderHook(() => useFunnel({ id: 'funnel1', initial: initialStep }));

    act(() => {
      result.current.history.push('step2', { newKey: 'newValue' });
    });

    expect(mockPush).toHaveBeenCalledWith('/trip-planner?funnel1.step=step2');
    expect(useLocalStorage).toHaveBeenCalledWith('funnel1', expect.anything());
  });

  it('navigates back to previous step and updates the state', () => {
    const initialStep = { step: 'step1', context: { key: 'value' }, index: 0 };
    const secondStep = { step: 'step2', context: { key: 'value2' }, index: 1 };
    const funnelStorage = [initialStep, secondStep];

    (useLocalStorage as jest.Mock).mockReturnValue([funnelStorage, jest.fn()]);

    const { result } = renderHook(() => useFunnel({ id: 'funnel1', initial: initialStep }));

    act(() => {
      result.current.history.push('step2', { newKey: 'newValue' });
    });

    expect(result.current.step).toBe('step2');
    expect(result.current.context).toEqual({ key: 'value2', newKey: 'newValue' });

    act(() => {
      result.current.history.back();
    });

    expect(mockPush).toHaveBeenCalledWith('/trip-planner?funnel1.step=step1');
    expect(result.current.step).toBe('step1');
  });

  it('updates URL and funnel state on clear', () => {
    const initialStep = { step: 'step1', context: { key: 'value' }, index: 0 };
    const { result } = renderHook(() => useFunnel({ id: 'funnel1', initial: initialStep }));

    act(() => {
      result.current.history.clear();
    });

    expect(mockPush).toHaveBeenCalledWith('/trip-planner?funnel1.step=step1');
    expect(result.current.step).toBe('step1');
    expect(result.current.context).toEqual({ key: 'value' });
  });

  it('initializes correctly when the URL has search parameters', () => {
    const initialStep = { step: 'step1', context: { key: 'value' }, index: 0 };
    const funnelStorage = [
      { step: 'step1', context: { key: 'value' }, index: 0 },
      { step: 'step2', context: { key: 'value2' }, index: 1 },
    ];

    (useLocalStorage as jest.Mock).mockReturnValue([funnelStorage, jest.fn()]);
    (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams({ 'funnel1.step': 'step2' }));

    const { result } = renderHook(() => useFunnel({ id: 'funnel1', initial: initialStep }));

    expect(result.current.step).toBe('step2');
    expect(result.current.context).toEqual({ key: 'value2' });
  });
});
