import type { Meta, StoryObj } from '@storybook/react';
import { useEffect } from 'react';
import { useAppTheme } from '../../../hooks';
import Text from './_text';

const meta: Meta<typeof Text> = {
  title: 'tripie-ui/Typography/Text',
  tags: ['autodocs'],
  component: Text,
  decorators: [
    (story, context) => {
      const { mode, setMode } = useAppTheme();
      const [selectedTheme] = context.globals.theme || mode;

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
    children: 'default 기본',
  },
};
