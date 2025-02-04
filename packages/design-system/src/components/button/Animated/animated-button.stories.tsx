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
    children: 'Default',
    withBorder: true,
  },
};
