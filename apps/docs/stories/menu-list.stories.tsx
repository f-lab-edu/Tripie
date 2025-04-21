import type { Meta, StoryObj } from '@storybook/react';

import { MenuToggle } from '@tripie-pyotato/design-system';
import { useAppTheme } from '@tripie-pyotato/design-system/@hooks';

const meta: Meta<typeof MenuToggle.List> = {
  title: 'tripie-design/Button/Menu/List',
  component: MenuToggle.List,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component:
          '네비게이션 토글 버튼이 열린 상태에서 보이는 메뉴 리스트 컴포넌트. 여닫을 때 리스트 아이템들이 하나씩 stagger되는 애니메이션이 동작합니다. 다른 ui 위에 리스트가 올라가면 블러 효과가 있습니다.',
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
  name: 'Default',
  render: () => {
    return (
      <div style={{ height: '12rem' }}>
        <MenuToggle.List>
          {Array.from({ length: 3 }, (_, i) => (
            <MenuToggle.Item key={i}>아이템 {i + 1}</MenuToggle.Item>
          ))}
        </MenuToggle.List>
      </div>
    );
  },
};
