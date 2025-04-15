// https://github.com/vercel/turborepo/blob/main/examples/with-vitest/packages/vitest-config/configs/ui-config.ts
import { defineProject, mergeConfig } from 'vitest/config';
import { baseConfig } from './base-config';

export const uiConfig = mergeConfig(
  baseConfig,
  defineProject({
    test: {
      environment: 'jsdom',
    },
  })
);
