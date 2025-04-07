import type { Preview } from '@storybook/react';

import '@tripie-pyotato/design-system/global';
import '@tripie-pyotato/design-system/styles';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      values: [
        // 👇 Default values
        { name: 'dark', value: '#080807' },
        { name: 'light', value: '#F7F9F2' },
      ],
      // 👇 Specify which background is shown by default
      default: 'dark',
    },
    // https://stackoverflow.com/questions/74515807/uncaught-error-invariant-expected-app-router-to-be-mounted
    nextjs: { appDirectory: true },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'dark',
      toolbar: {
        // The label to show for this toolbar item
        title: 'Theme',
        icon: 'circlehollow',
        // Array of plain string values or MenuItem shape (see below)
        // items: ['light', 'dark'],
        items: ['dark'],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
