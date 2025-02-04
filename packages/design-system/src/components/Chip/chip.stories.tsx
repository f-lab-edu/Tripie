import type { Meta, StoryObj } from '@storybook/react';

import { useEffect } from 'react';
import { useAppTheme } from '../../hooks';
import Chip from './Chip';

const meta: Meta<typeof Chip> = {
  title: 'tripie-ui/Chip',
  component: Chip,
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
  name: 'Chip',
  args: {
    children: 'Default',
  },
};

export const AccentedChip: Story = {
  name: 'Chip.Accented',
  render: () => <Chip.Accented>accented Chip</Chip.Accented>,
};
