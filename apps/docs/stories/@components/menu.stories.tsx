import type { Meta, StoryObj } from '@storybook/react';

import { Menu } from '@tripie-pyotato/design-system/@components';
import { useAppTheme } from '@tripie-pyotato/design-system/@hooks';

const meta: Meta<typeof Menu.Item> = {
  title: 'tripie-design@components/navigation/Menu',
  component: Menu.Item,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component:
          '네비게이션 토글 버튼이 열린 상태에서 보이는 메뉴 리스트의 아이템 컴포넌트. 호버 시 확대 애니메이션이 동작합니다.',
      },
    },
  },
  decorators: [
    (story, context) => {
      const { mode } = useAppTheme();
      context.globals.theme = mode;
      return (
        <div className={`${mode}`} style={{ height: '10rem' }}>
          {story()}
        </div>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  render: () => {
    return (
      <Menu>
        <Menu.List>
          <Menu.Item>아이템1</Menu.Item>
          <Menu.Item>아이템2</Menu.Item>
          <Menu.Item>아이템2</Menu.Item>
        </Menu.List>
      </Menu>
    );
  },
};
