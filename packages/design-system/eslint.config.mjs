import { config } from '@tripie-pyotato/eslint-config';

/** @type {import("eslint").Linter.Config} */
export default [...config, { ignores: ['coverage/**', 'dist/**', 'storybook-static/**'] }];
