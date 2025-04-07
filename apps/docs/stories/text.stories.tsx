import type { Meta, StoryObj } from '@storybook/react';
import { Text, useAppTheme } from '@tripie-pyotato/design-system';

const meta: Meta<typeof Text> = {
  title: 'tripie-design/Text',
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
export const Animated: Story = {
  name: 'Text.Animated',
  render: () => <Text.Animated otherChild={'other text'}>animated text</Text.Animated>,
};

export const JumpingText: Story = {
  name: 'Text.Jump',
  render: () => <Text.Jump>jumping text</Text.Jump>,
};

export const SlidingText: Story = {
  name: 'Text.Slide',
  render: () => <Text.Slide>sliding text</Text.Slide>,
};
