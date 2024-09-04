import { Config } from 'jest';

export function jestConfig(config: Config): Config {
  return {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['jest-canvas-mock', 'jest-extended/all'].concat(config.setupFilesAfterEnv ?? []),
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
    testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    moduleDirectories: ['node_modules', 'src'],
    ...config,
  };
}
