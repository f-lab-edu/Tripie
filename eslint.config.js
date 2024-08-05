/** https://stackoverflow.com/questions/74237042/how-to-correctly-configure-the-parser-plugins-with-eslints-new-flat-config 참고 */
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import functional from 'eslint-plugin-functional';
import pluginImport from 'eslint-plugin-import';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    plugins: {
      react: pluginReact,
      functional,
      import: pluginImport,
      '@typescript-eslint': ts,
      ts,
    },
    rules: {
      'react/jsx-uses-react': 'error',
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
          modules: true,
        },
        projectService: true,
        project: '../../tsconfig.json',
        ecmaVersion: 'latest',
      },
      globals: { ...globals.browser, ...globals.node },
    },
    ignores: ['**/*.config.js', 'dist'],
  },
];
