import type { Meta, StoryObj } from '@storybook/react';

import { useEffect } from 'react';
import MenuToggle from '.';
import { useAppTheme } from '../../../hooks';

const meta: Meta<typeof MenuToggle> = {
  title: 'tripie-ui/Button/Menu/Toggle',
  component: MenuToggle,
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
      const { mode, setMode } = useAppTheme();
      const selectedTheme = context.globals.theme || mode;

      useEffect(() => {
        setMode(selectedTheme);
      }, [selectedTheme]);

      return (
        <div className={`${context.globals.theme}`} style={{ height: '12rem' }}>
          {story()}
        </div>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'MenuToggle',
};

export const OpennedMenu: Story = {
  name: 'MenuToggle.initalOpen',
  render: () => {
    return (
      <MenuToggle initial={true}>
        <MenuToggle.List>
          {Array.from({ length: 3 }, (_, i) => (
            <MenuToggle.Item key={i}>아이템 {i + 1}</MenuToggle.Item>
          ))}
        </MenuToggle.List>
      </MenuToggle>
    );
  },
};

export const ClosedMenu: Story = {
  name: 'MenuToggle.initial.Closed',
  render: () => {
    return (
      <MenuToggle initial={false}>
        <MenuToggle.List>
          {Array.from({ length: 3 }, (_, i) => (
            <MenuToggle.Item key={i}>아이템 {i + 1}</MenuToggle.Item>
          ))}
        </MenuToggle.List>
      </MenuToggle>
    );
  },
};
