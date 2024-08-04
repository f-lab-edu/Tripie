import type { StorybookConfig } from '@storybook/nextjs';

import { dirname, join } from 'path';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
const config: StorybookConfig = {
  stories: ['../../../packages/design-system/src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-interactions'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/nextjs'),
    options: {},
  },
  // 폰트 이미지 경로 "../static" // 적용 시도 중 ㅜㅜ
  staticDirs: ['../public', '../static'],
  refs: {
    // 👇 Upper-case characters not supported in the refs key
    'chromatic-published-storybook': {
      // The title of your Storybook
      title: 'Design System',
      // The url provided by Chromatic when it was published
      url: 'https://<branch>--<appid>.chromatic.com',
    },
  },
};
export default config;
