import type { Meta, StoryObj } from '@storybook/react';

import { Menu } from '@tripie-pyotato/design-system/@components';
import { useAppTheme } from '@tripie-pyotato/design-system/@hooks';

const meta: Meta<typeof Menu> = {
  title: 'tripie-design/Button/Menu/Toggle',
  component: Menu,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component:
          '네비게이션 토글 버튼, 닫힌 상태에는 버거 아이콘이며 열린 상태에서는 X 모양으로 애니메이션 전환합니다.',
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
  name: 'Menu',
};

export const OpennedMenu: Story = {
  name: 'Menu.initalOpen',
  render: () => {
    return (
      <Menu initial={true}>
        <Menu.List>
          {Array.from({ length: 3 }, (_, i) => (
            <Menu.Item key={i}>아이템 {i + 1}</Menu.Item>
          ))}
        </Menu.List>
      </Menu>
    );
  },
};

export const ClosedMenu: Story = {
  name: 'Menu.initial.Closed',
  render: () => {
    return (
      <Menu initial={false}>
        <Menu.List>
          {Array.from({ length: 3 }, (_, i) => (
            <Menu.Item key={i}>아이템 {i + 1}</Menu.Item>
          ))}
        </Menu.List>
      </Menu>
    );
  },
};
