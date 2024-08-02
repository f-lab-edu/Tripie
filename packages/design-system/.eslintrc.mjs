/** @type {import("eslint").Linter.Config} */
export default {
  root: true,
  extends: ["@tripie/eslint-config/react-internal.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.lint.json",
    tsconfigRootDir: __dirname,
  },
  overrides: [
    {
      files: ["src/components/*/__tests__/**/*"],
      env: {
        jest: true,
      },
    },
  ],
};
