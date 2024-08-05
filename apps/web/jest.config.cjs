const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');
const jestConfig = require('../../jest.config.cjs');

module.exports = jestConfig({
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.cjs',
    ...pathsToModuleNameMapper(compilerOptions.paths),
    'next/font/(.*)': `<rootDir>/__mocks__/nextFontMock.cjs`,
  },
});
