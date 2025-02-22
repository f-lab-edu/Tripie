import type { Meta, StoryObj } from '@storybook/react';

import { useEffect } from 'react';
import NoStyleButton from '.';
import { useAppTheme } from '../../../hooks';

const meta: Meta<typeof NoStyleButton> = {
  title: 'tripie-ui/Button/NoStyle',
  component: NoStyleButton,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (story, context) => {
      const { mode, setMode } = useAppTheme();
      const selectedTheme = context.globals.theme || mode;

      useEffect(() => {
        setMode(selectedTheme);
      }, [selectedTheme]);

      return <div className={`${context.globals.theme}`}>{story()}</div>;
    },
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Button',
  args: {
    children: 'Default',
  },
};
