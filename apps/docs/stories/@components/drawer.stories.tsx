import type { Meta, StoryObj } from '@storybook/react';
import { Container } from '@tripie-pyotato/design-system';

import { Drawer } from '@tripie-pyotato/design-system/@components';
import { useAppTheme, useCycle } from '@tripie-pyotato/design-system/@hooks';
import meta from '../@core/container.stories';

const drawerMeta: Meta<typeof Drawer> = {
  title: 'tripie-design@components/navigation/Drawer',
  component: Drawer.Body,
  tags: ['autodocs'],
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
  argTypes: {
    ...meta['argTypes'],
    position: {
      control: { type: 'radio' },
      options: ['top', 'bottom', 'left', 'right'],
      table: {
        type: {
          summary: "'top' | 'bottom' | 'left' | 'right'",
        },
        defaultValue: { summary: 'left' },
      },
    },
    withBorder: {
      control: { type: 'boolean' },
      options: ['true', 'false'],
      table: {
        type: {
          summary: "'true' | 'false' ",
        },
        defaultValue: { summary: 'false' },
      },
    },
    exposePercentage: {
      control: { type: 'number' },
      table: {
        type: {
          summary: "'number' value between 0 - 100. Applies to 'top' | 'bottom' position",
        },
        defaultValue: { summary: 100 },
      },
    },
  },
  args: {
    position: 'left',
    withBorder: false,
    exposePercentage: 100,
  },
};

export default drawerMeta;
type Story = StoryObj<typeof drawerMeta>;

export const Default: Story = {
  name: 'Default',
  render: (args: typeof Drawer) => {
    const [isOpen, toggleOpen] = useCycle(true, false);
    return (
      <Drawer>
        <Container>body</Container>
        <Drawer.Content {...args} isOpen={isOpen} toggleOpen={() => toggleOpen()}>
          contents
        </Drawer.Content>
      </Drawer>
    );
  },
};
