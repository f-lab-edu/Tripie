import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '@tripie-pyotato/design-system';
import { useAppTheme } from '@tripie-pyotato/design-system/@hooks';

const meta: Meta<typeof Icon> = {
  title: 'tripie-design/Icon',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '교통 수단 이외 상호작용이 가능한 모든 아이콘 컴포넌트들입니다.',
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
  name: 'Icon.Default',
};

export const RefreshIcon: Story = {
  name: 'Icon.Refresh',
  render: () => <Icon.Refresh />,
};

export const PlaneIcon: Story = {
  name: 'Icon.Plane',
  render: () => <Icon.Plane />,
};

export const CloudIcon: Story = {
  name: 'Icon.Cloud',
  render: () => <Icon.Cloud index={0} />,
};

export const CursorIcon: Story = {
  name: 'Icon.Cursor',
  render: () => <Icon.Cursor />,
};

export const ScrollIcon: Story = {
  name: 'Icon.Scroll',
  render: () => <Icon.Scroll />,
};

export const XIcon: Story = {
  name: 'Icon.X',
  render: () => <Icon.X />,
};
export const CheckIcon: Story = {
  name: 'Icon.Check',
  render: () => <Icon.Check />,
};
