import type { Meta, StoryObj } from '@storybook/react';
import { UnstyledButton } from '@tripie-pyotato/design-system/@components';

const meta: Meta<typeof UnstyledButton> = {
  title: 'tripie-design/Button/No style',
  component: UnstyledButton,
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['button', 'submit', 'reset'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof UnstyledButton>;

export const Primary: Story = {
  render: () => (
    <UnstyledButton
      onclick={(): void => {
        alert('Hello from Turborepo!');
      }}
    >
      Hello
    </UnstyledButton>
  ),
  name: 'Button',
  args: {
    children: 'Hello',
    type: 'button',
  },
};
