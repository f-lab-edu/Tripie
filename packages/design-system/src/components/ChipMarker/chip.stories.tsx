import type { Meta, StoryObj } from '@storybook/react';

import { useEffect } from 'react';
import { useAppTheme } from '../../hooks';
import ChipMarker from './ChipMarker';

const meta: Meta<typeof ChipMarker> = {
  title: 'tripie-ui/Chip/Marker',
  component: ChipMarker,
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
  name: 'Default',
  args: {
    children: '0-0',
  },
};

export const SecondChip: Story = {
  name: 'Second',
  args: {
    children: '0-1',
  },
};
