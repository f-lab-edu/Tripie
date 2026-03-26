import { config } from '@tripie-pyotato/eslint-config/next';
import tripiePlugin from '@tripie-pyotato/eslint-plugin-tripie';

export default [...config, tripiePlugin.configs['recommended'], { ignores: ['.next/**', 'dist/**'] }];
