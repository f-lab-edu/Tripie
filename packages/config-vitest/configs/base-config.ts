// https://github.com/vercel/turborepo/blob/main/examples/with-vitest/packages/vitest-config/configs/base-config.ts
import { defineConfig } from 'vitest/config';

export const baseConfig = defineConfig({
  test: {
    coverage: {
      provider: 'istanbul',
      reporter: [
        [
          'json',
          {
            file: `../coverage.json`,
          },
        ],
      ],
      enabled: true,
    },
  },
});
