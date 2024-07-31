/** @type {import('ts-jest').JestConfigWithTsJest} **/

const jestConfig = {
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
};

export default jestConfig;
