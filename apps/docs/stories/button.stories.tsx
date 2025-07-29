import type { Meta, StoryObj } from '@storybook/react';
import { BasicButton } from '@tripie-pyotato/design-system/@components';

const meta: Meta<typeof BasicButton> = {
  title: 'tripie-design/Button/No style',
  component: BasicButton,
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['button', 'submit', 'reset'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof BasicButton>;

export const Primary: Story = {
  render: () => (
    <BasicButton
      onclick={(): void => {
        alert('Hello from Turborepo!');
      }}
    >
      Hello
    </BasicButton>
  ),
  name: 'Button',
  args: {
    children: 'Hello',
    type: 'button',
  },
};
