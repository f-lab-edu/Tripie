import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '@tripie-pyotato/design-system/@core';
import { useAppTheme } from '@tripie-pyotato/design-system/@hooks';

const meta: Meta<typeof Skeleton> = {
  title: 'tripie-design@core/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
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
  name: 'Default Skeleton',
  args: {
    children: <Skeleton></Skeleton>,
  },
};
