const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');
const {jestConfig} = require('@tripie/jest');

module.exports = jestConfig({
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
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    ...pathsToModuleNameMapper(compilerOptions.paths),
  },
  setupFilesAfterEnv: ['./jest.setup.cjs'],
  resolver: require.resolve('@tripie/jest/resolver'),
});
