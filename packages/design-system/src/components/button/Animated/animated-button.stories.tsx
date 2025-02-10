import type { Meta, StoryObj } from '@storybook/react';

import AnimatedButton from '.';

const meta: Meta<typeof AnimatedButton> = {
  title: 'tripie-ui/Button/AnimatedButton',
  component: AnimatedButton,
  tags: ['autodocs'],
  argTypes: {},
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
