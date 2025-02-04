import type { Meta, StoryObj } from '@storybook/react';

import { useEffect } from 'react';
import { useAppTheme } from '../../hooks';
import AnimatedText from './Text';

const meta: Meta<typeof AnimatedText> = {
  title: 'tripie-ui/AnimatedText',
  component: AnimatedText,
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
  name: 'AnimatedText',
  args: {
    children: 'Default',
  },
};

export const SlidingText: Story = {
  name: 'AnimatedText.Slide',
  render: () => <AnimatedText.Slide>sliding text</AnimatedText.Slide>,
};

export const JumpingText: Story = {
  name: 'AnimatedText.Jump',
  render: () => <AnimatedText.Jump>jumping text</AnimatedText.Jump>,
};
