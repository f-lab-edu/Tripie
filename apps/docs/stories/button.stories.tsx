import type { Meta, StoryObj } from '@storybook/react';
import { UnStyledButton } from '@tripie-pyotato/design-system/@components';

const meta: Meta<typeof UnStyledButton> = {
  title: 'tripie-design/Button/No style',
  component: UnStyledButton,
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['button', 'submit', 'reset'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof UnStyledButton>;

export const Primary: Story = {
  render: () => (
    <UnStyledButton
      action={(): void => {
        alert('Hello from Turborepo!');
      }}
    >
      Hello
    </UnStyledButton>
  ),
  name: 'Button',
  args: {
    children: 'Hello',
    type: 'button',
  },
};
