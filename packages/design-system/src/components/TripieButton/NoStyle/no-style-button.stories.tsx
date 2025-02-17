import type { Meta, StoryObj } from '@storybook/react';

import NoStyleButton from '.';

const meta: Meta<typeof NoStyleButton> = {
  title: 'tripie-ui/Button/NoStyleButton',
  component: NoStyleButton,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Button',
  args: {
    children: 'Default',
  },
};
