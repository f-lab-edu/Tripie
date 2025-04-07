import type { Meta, StoryObj } from '@storybook/react';

import AnimatedButton from '../../../packages/design-system/src/components/TripieButton/Animated';
import { useAppTheme } from '../../../packages/design-system/src/hooks';

const meta: Meta<typeof AnimatedButton> = {
  title: 'tripie-design/Button/Animated',
  component: AnimatedButton,
  tags: ['autodocs'],
  argTypes: {},
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
  name: 'AnimatedButton.Default',
  args: {
    children: 'Default',
  },
};

export const AnimatedButtonWithOtherChild: Story = {
  name: 'AnimatedButton.WithOtherChild',
  args: {
    children: 'Default',
    otherChild: 'Other child',
  },
};

export const AnimatedButtonWithBorder: Story = {
  name: 'AnimatedButton.WithBorder',
  args: {
    children: 'AnimatedButton.WithBorder',
    withBorder: true,
  },
};

export const AnimatedButtonWithBorderWithLongText: Story = {
  name: 'AnimatedButton.WithBorder.LongText',
  args: {
    children: 'super long button text. see how it looks like!',
    withBorder: true,
  },
};

const longText = 'Super long button text. max max max max max'.repeat(3);

export const AnimatedButtonWithBorderWithSuperLongText: Story = {
  name: 'AnimatedButton.WithBorder.Super.LongText',
  args: {
    children: longText,
    withBorder: true,
  },
};
