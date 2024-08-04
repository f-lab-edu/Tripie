module.exports = config => {
  return {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
      '^.+\\.tsx?$': [
        'ts-jest',
        {
          diagnostics: false,
          tsconfig: '../../tsconfig.jest.json',
          babelConfig: true,
          isolatedModules: true,
        },
      ],
    },
    moduleNameMapper: {
      // Handle @next/font
      '@next/font/(.*)': `<rootDir>/__mocks__/nextFontMock.cjs`,
      // Handle next/font
      'next/font/(.*)': `<rootDir>/__mocks__/nextFontMock.cjs`,
      '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    },
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['jest-canvas-mock', 'jest-extended/all'],
    testPathIgnorePatterns: ['/node_modules/'],
    ...config,
  };
};
