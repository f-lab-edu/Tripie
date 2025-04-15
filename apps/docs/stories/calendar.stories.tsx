import type { Meta, StoryObj } from '@storybook/react';
import { useAppTheme } from '@tripie-pyotato/design-system';
import { Calendar } from '@tripie-pyotato/design-system/@components';

const meta: Meta<typeof Calendar> = {
  title: 'tripie-design/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: '1년 달력',
      },
    },
  },
  decorators: [
    story => {
      const { mode } = useAppTheme();
      return <div className={`${mode}`}>{story()}</div>;
    },
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  render: () => {
    return <Calendar />;
  },
};
