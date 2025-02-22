import path from 'path';

import react from '@vitejs/plugin-react';
// import eslint from 'vite-plugin-eslint';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // eslint({ exclude: ['/virtual:/**', 'node_modules/**'] })
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: path.resolve(__dirname, '') + '/setupTests.mjs',
    css: true,
    // deps: {
    //   registerNodeLoader: false, // https://stackoverflow.com/questions/73309769/how-to-test-a-react-app-with-framer-motion-using-vitest
    // },
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
});
