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
    },
    setupFilesAfterEnv: ['./jest.setup.cjs'],
    resolver: require.resolve('@tripie/jest/resolver'),
});
