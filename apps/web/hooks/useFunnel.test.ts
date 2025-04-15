// import { act, renderHook } from '@testing-library/react';
// import { useSearchParams } from 'next/navigation';
// import { useLocalStorage } from 'usehooks-ts';
// import { beforeEach, describe, expect, it, vi } from 'vitest';
// import ROUTE from '../constants/routes';
// import useFunnel from './useFunnel';

// const mockRouter = {
//   push: vi.fn(),
//   replace: vi.fn(),
// };

// vi.mock('next/navigation', () => ({
//   useRouter: () => mockRouter,
//   usePathname: vi.fn(() => '/test'),
//   useSearchParams: vi.fn(() => new URLSearchParams('?test.step=step2')),
// }));

// vi.mock('usehooks-ts', () => ({
//   useLocalStorage: vi.fn(),
// }));

// describe('useFunnel', () => {
//   let mockSetLocalStorage;

//   beforeEach(() => {
//     vi.clearAllMocks();
//     mockSetLocalStorage = vi.fn();
//     useLocalStorage.mockReturnValue([[], mockSetLocalStorage]); // Ensure mockReturnValue is directly used
//   });

//   it('주어진 step과 context로 초기화된다.', () => {
//     const { result } = renderHook(() =>
//       useFunnel<{
//         step1: { foo?: string; baz?: string; paz?: string };
//         step2: { foo: string; baz?: string; paz?: string };
//       }>({
//         id: 'test',
//         initial: { step: 'step1', context: { foo: 'bar' } },
//       })
//     );

//     expect(result.current.step).toBe('step1');
//     expect(result.current.context).toEqual({ foo: 'bar' });
//   });

//   it('history.push에 step과 context가 업데이트된다.', () => {
//     const { result } = renderHook(() =>
//       useFunnel<{
//         step1: { foo?: string; baz?: string; paz?: string };
//         step2: { foo: string; baz?: string; paz?: string };
//       }>({
//         id: 'test',
//         initial: { step: 'step1', context: { foo: 'bar' } },
//       })
//     );

//     act(() => {
//       result.current.history.push('step2', { baz: 'qux' });
//     });

//     expect(result.current.historySteps).toEqual([{ context: { foo: 'bar', baz: 'qux' }, step: 'step1' }]);
//     expect(mockRouter.push).toHaveBeenCalledWith('/test?test.step=step2');
//   });

//   it('history.clear 시 history가 리셋되어 {}가 된다.', () => {
//     useLocalStorage.mockReturnValue([[{ step: 'step1', context: {} }], mockSetLocalStorage]);

//     const { result } = renderHook(() =>
//       useFunnel({
//         id: 'test',
//         initial: { step: 'step1', context: {} },
//       })
//     );

//     act(() => {
//       result.current.history.clear();
//     });

//     expect(mockSetLocalStorage).toHaveBeenCalledWith([{ step: 'step1', context: {} }]);
//   });

//   it('should restore step from localStorage if present', () => {
//     useLocalStorage.mockReturnValue({ step: 'step1', context: { foo: 'bar' } }, vi.fn());

//     const { result } = renderHook(() =>
//       useFunnel<{
//         step1: { foo?: string; baz?: string };
//         step2: { foo: string; baz?: string };
//       }>({
//         id: 'test',
//         initial: { step: 'step1', context: { foo: 'bar' } },
//       })
//     );
//     expect(result.current.step).toBe('step2');
//     expect(result.current.context).toEqual({ foo: 'bar' });
//     expect(mockRouter.replace).not.toHaveBeenCalled();
//   });

//   it('should redirect to default route if no stored step is found', () => {
//     useLocalStorage.mockReturnValue([[], vi.fn()]);

//     renderHook(() => useFunnel({ id: 'test', initial: { step: 'step1', context: {} } }));

//     expect(mockRouter.replace).toHaveBeenCalledWith(ROUTE.TRIP_PLANNER.href);
//   });

//   it('should fall back to initial step if no valid search param exists', () => {
//     useSearchParams.mockReturnValue(new URLSearchParams());

//     useLocalStorage.mockReturnValue([[{ step: 'step2', context: { foo: 'bar' } }], vi.fn()]);

//     const { result } = renderHook(() => useFunnel({ id: 'test', initial: { step: 'step1', context: { baz: 'qux' } } }));

//     expect(result.current.step).toBe('step1');
//     expect(result.current.context).toEqual({ baz: 'qux' });
//   });
// });
