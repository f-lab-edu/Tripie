import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from '@tripie-pyotato/design-system';
import { useAppTheme } from '@tripie-pyotato/design-system/@hooks';

const meta: Meta<typeof Chip> = {
  title: 'tripie-design/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: '칩 컴포넌트입니다.accentedChip은 호버 시 애니메이션으로 강조됩니다.',
      },
    },
  },
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
  name: 'Chip',
  args: {
    children: 'Default',
  },
};

export const Selected: Story = {
  name: 'Chip.Selected',
  args: {
    children: 'Selected',
    selected: true,
  },
};

export const Disabled: Story = {
  name: 'Chip.Disabled',
  args: {
    children: 'Disabled',
    disabled: true,
  },
};

export const RestaurantChip: Story = {
  name: 'Chip.Restaurant',
  args: {
    children: '1',
    className: 'restaurant',
  },
};

export const AccentedChip: Story = {
  name: 'Chip.Accented',
  render: () => <Chip.Accented>accented Chip</Chip.Accented>,
};
