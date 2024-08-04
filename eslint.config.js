// const js = require('@eslint/js');

// /** @type {import("eslint").Linter.Config} */
// module.exports = {
//   ...js.configs.recommended,
//   //   ignores: ['.*.js', '*.(js|cjs|mjs|json)$', 'node_modules/', '**/.*', '**/*/dist/'],
//   ignores: ['.*.js', '*.(js|cjs|mjs|json)$', 'node_modules/', '**/.*', '**/*/dist/', '**.*/'],

//   //   globals: {
// React: true,
// JSX: true,
//   //   },
//   //   env: {
//   //     node: true,
//   //     browser: true,
//   //   },
//   //   plugins: ['only-warn'],
//   //   settings: {
//   //     'import/resolver': {
//   //       typescript: {
//   //         project,
//   //       },
//   //     },
//   //   },
//   //   ignorePatterns: [
//   //     // Ignore dotfiles
//   //     '.*.js',
//   //     'node_modules/',
//   //   ],
//   overrides: [{ files: ['*.js?(x)', '*.ts?(x)'] }],
// };

export default [
  {
    files: ['apps/**/*.ts?(x)'],
    rules: {
      semi: 'error',
      'no-unused-vars': 'error',
    },
  },

  {
    files: ['packages/design-system/src/components/**/*.ts?(x)'],
    rules: {
      'no-undef': 'error',
      globals: {
        React: true,
        JSX: true,
      },
      semi: 'warn',
    },
  },
  {
    files: ['packages/hooks/src/**/*.ts?(x)'],
    rules: {
      'no-undef': 'error',
      semi: 'warn',
    },
  },
];
