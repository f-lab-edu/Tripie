/** @type {import("eslint").Linter.Config} */

export default {
  root: true,
  extends: ["@tripie/eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  overrides: [
    {
      files: ["/components/*/__tests__/**/*"],
      env: {
        jest: true,
      },
    },
  ],
};
