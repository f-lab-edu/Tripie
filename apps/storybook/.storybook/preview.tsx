import type { Preview } from '@storybook/react';

import '@tripie-pyotato/design-system/global';

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
        { name: 'Dark', value: '#080807' },
        { name: 'Light', value: '#F7F9F2' },
      ],
      // 👇 Specify which background is shown by default
      default: 'Dark',
    },
  },

  // globalTypes: {
  //   theme: {
  //     description: 'Global theme for components',
  //     defaultValue: 'light',
  //     toolbar: {
  //       // The label to show for this toolbar item
  //       title: 'Theme',
  //       icon: 'circlehollow',
  //       // Array of plain string values or MenuItem shape (see below)
  //       items: ['light', 'dark'],
  //       // Change title based on selected value
  //       dynamicTitle: true,
  //     },
  //   },
  // },
};

export default preview;
