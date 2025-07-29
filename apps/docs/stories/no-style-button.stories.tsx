import type { Meta, StoryObj } from '@storybook/react';

import { BasicButton } from '@tripie-pyotato/design-system/@components';
import { useAppTheme } from '@tripie-pyotato/design-system/@hooks';

const meta: Meta<typeof BasicButton> = {
  title: 'tripie-design/Button/Basic',
  component: BasicButton,
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
