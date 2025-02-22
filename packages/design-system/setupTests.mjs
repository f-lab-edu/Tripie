import '@testing-library/jest-dom';
import '../design-system/src';
import '../design-system/src/shared/colors';

// import { setupServer } from 'msw/node';

// import { handlers } from '@/__mocks__/handlers';

/* msw */
// export const server = setupServer(...handlers);

// beforeAll(() => {
//   server.listen();
// });

afterEach(() => {
  // server.resetHandlers();
  vi.clearAllMocks();
});

afterAll(() => {
  vi.resetAllMocks();
  // server.close();
});

// https://github.com/vitest-dev/vitest/issues/821
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});
