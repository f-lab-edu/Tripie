import type { Meta, StoryObj } from '@storybook/react';
import { NoStyleButton, useAppTheme } from '@tripie-pyotato/design-system';

const meta: Meta<typeof NoStyleButton> = {
  title: 'tripie-design/Button/NoStyle',
  component: NoStyleButton,
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
  name: 'Button',
  args: {
    children: 'Default',
  },
};
