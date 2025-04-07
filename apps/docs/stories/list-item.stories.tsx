import type { Meta, StoryObj } from '@storybook/react';
import { Icon, List, useAppTheme } from '@tripie-pyotato/design-system';

const meta: Meta<typeof List.Item> = {
  title: 'tripie-design/List/Item',
  component: List,
  tags: ['autodocs'],
  argTypes: {
    alignItems: {
      options: ['normal', 'center', 'start', 'stretch', 'end'],
      control: { type: 'radio' },
    },
    justifyContent: {
      options: ['flex-start', 'center', 'flex-end'],
      control: { type: 'radio' },
    },
    gap: {
      options: ['default', 'l'],
      control: { type: 'radio' },
    },
  },
  decorators: [
    (story, context) => {
      const { mode } = useAppTheme();
      context.globals.theme = mode;
      return <div className={`${mode}`}>{story()}</div>;
    },
  ],
  parameters: { docs: { description: { component: '' } } },
};

export const Default: Story = {
  name: 'Default',
  render: args => {
    return (
      <List.Item alignItems="normal" {...args}>
        <Icon />
        list item
      </List.Item>
    );
  },
  args: {
    alignItems: 'normal',
    justifyContent: 'flex-start',
    gap: 'default',
  },
  argTypes: {
    alignItems: {
      control: 'select',
      defaultValue: 'normal',
      description: 'flex 속성 align-items과 유사하게 동작, 직계 자식들을 교차축에 따라 정렬',
      table: {
        type: { summary: "'normal' | 'center' |'start' | 'stretch' | 'end'" },
        defaultValue: { summary: 'normal' },
      },
    },
    justifyContent: {
      control: 'select',
      defaultValue: 'flex-start',
      description:
        'flex 속성 justify-content과 유사하게 동작, "flex-start" 설정 시 플렉스 항목들을 축의 시작 부분에 정렬, "center" 설정 시 항목들을 축의 중심 부분에 정렬, "flex-end" 정렬 시 플렉스 항목들을 축의 끝 부분에 정렬',
      table: {
        type: { summary: "'flex-start' | 'center' | 'flex-end'" },
        defaultValue: { summary: 'flex-start' },
      },
    },
    gap: {
      control: 'select',
      defaultValue: 'default',
      description: 'flex gap 속성을 "default"로 설정시 0.5rem, "l"로 설정 시 1rem',
      table: {
        type: { summary: "'default' | 'l'" },
        defaultValue: { summary: 'default' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
