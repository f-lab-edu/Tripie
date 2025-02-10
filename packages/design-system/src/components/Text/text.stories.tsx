import type { Meta, StoryObj } from '@storybook/react';
import { useEffect } from 'react';
import { useAppTheme } from '../../hooks';
import Text from './Text';

const meta: Meta<typeof Text> = {
  title: 'tripie-ui/Typography/Text',
  tags: ['autodocs'],
  component: Text,
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
    children: 'default 기본',
  },
};
export const Animated: Story = {
  name: 'Text.Animated',
  render: () => <Text.Animated otherChild={'other text'}>animated text</Text.Animated>,
};

export const JumpingText: Story = {
  name: 'Text.Jump',
  render: () => <Text.Jump>jumping text</Text.Jump>,
};

export const SlidingText: Story = {
  name: 'Text.Slide',
  render: () => <Text.Slide>sliding text</Text.Slide>,
};
