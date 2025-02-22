import type { Meta, StoryObj } from '@storybook/react';

import { useEffect } from 'react';
import MenuItem from '.';
import { useAppTheme } from '../../../../hooks';

const meta: Meta<typeof MenuItem> = {
  title: 'tripie-ui/Button/Menu/Item',
  component: MenuItem,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
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
  render: () => {
    return <MenuItem>아이템1</MenuItem>;
  },
};
