import type { Meta, StoryObj } from '@storybook/react';

import { useEffect } from 'react';
import MenuItem from '.';
import { useAppTheme } from '../../../../hooks';

const meta: Meta<typeof MenuItem> = {
  title: 'tripie-ui/Button/Menu/Item',
  component: MenuItem,
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
    return <MenuItem>아이템1</MenuItem>;
  },
};
