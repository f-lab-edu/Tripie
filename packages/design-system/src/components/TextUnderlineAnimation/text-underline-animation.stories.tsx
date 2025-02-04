import type { Meta, StoryObj } from '@storybook/react';

import { useEffect } from 'react';
import { useAppTheme } from '../../hooks';
import TextUnderlineAnimation from './TextUnderlineAnimation';

const meta: Meta<typeof TextUnderlineAnimation> = {
  title: 'tripie-ui/TextUnderlineAnimation',
  component: TextUnderlineAnimation,
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
  name: 'TextUnderlineAnimation',
  args: { children: 'text underline animation' },
};
