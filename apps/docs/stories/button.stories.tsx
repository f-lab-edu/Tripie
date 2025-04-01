import type { Meta, StoryObj } from '@storybook/react';
import { NoStyleButton } from '@tripie-pyotato/design-system';

const meta: Meta<typeof NoStyleButton> = {
  title: 'tripie-design/Button/No style',
  component: NoStyleButton,
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['button', 'submit', 'reset'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof NoStyleButton>;

export const Primary: Story = {
  render: () => (
    <NoStyleButton
      action={(): void => {
        alert('Hello from Turborepo!');
      }}
    >
      Hello
    </NoStyleButton>
  ),
  name: 'Button',
  args: {
    children: 'Hello',
    type: 'button',
  },
};
