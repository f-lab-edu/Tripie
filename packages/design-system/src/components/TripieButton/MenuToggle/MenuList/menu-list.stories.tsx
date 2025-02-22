import type { Meta, StoryObj } from '@storybook/react';

import { useEffect } from 'react';
import MenuList from '.';
import { useAppTheme } from '../../../../hooks';
import MenuItem from '../MenuItem';

const meta: Meta<typeof MenuList> = {
  title: 'tripie-ui/Button/Menu/List',
  component: MenuList,
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

      return <div className={`${context.globals.theme}`}>{story()}</div>;
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
        <MenuList>
          {Array.from({ length: 3 }, (_, i) => (
            <MenuItem key={i}>아이템 {i + 1}</MenuItem>
          ))}
        </MenuList>
      </div>
    );
  },
};
