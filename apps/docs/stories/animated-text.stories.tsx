import type { Meta, StoryObj } from '@storybook/react';
import AnimatedText from '@tripie-pyotato/design-system/@components/AnimatedText';
import { useAppTheme } from '@tripie-pyotato/design-system/@hooks';

const meta: Meta<typeof AnimatedText> = {
  title: 'tripie-design/AnimatedText',
  tags: ['autodocs'],
  component: AnimatedText,
  decorators: [
    (story, context) => {
      const { mode } = useAppTheme();
      context.globals.theme = mode;
      return <div className={`${mode}`}>{story()}</div>;
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
  render: () => <AnimatedText otherChild={'other text'}>animated text</AnimatedText>,
};

export const JumpingText: Story = {
  name: 'Text.Jump',
  render: () => <AnimatedText.Jump>jumping text</AnimatedText.Jump>,
};

export const SlidingText: Story = {
  name: 'Text.Slide',
  render: () => <AnimatedText.Slide>sliding text</AnimatedText.Slide>,
};
