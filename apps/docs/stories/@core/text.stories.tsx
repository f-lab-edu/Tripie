import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '@tripie-pyotato/design-system/@core';
import { useAppTheme } from '@tripie-pyotato/design-system/@hooks';

const meta: Meta<typeof Text> = {
  title: 'tripie-design@core/Text',
  tags: ['autodocs'],
  component: Text,
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
  name: 'Default',
  args: {
    children: 'default 기본',
  },
};

export const Accented: Story = {
  name: 'Text.Accented',
  render: () => <Text.Accented>accented text</Text.Accented>,
};
