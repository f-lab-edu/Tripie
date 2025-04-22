import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '@tripie-pyotato/design-system';
import { List, Text } from '@tripie-pyotato/design-system/@core';
import { useAppTheme } from '@tripie-pyotato/design-system/@hooks';

const meta: Meta<typeof List> = {
  title: 'tripie-design@core/List',
  component: List,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '<li> 리스트 컴포넌트',
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
  render: args => {
    return <List {...args}></List>;
  },
  args: {
    alignItems: 'normal',
    justifyContent: 'flex-start',
    gap: 'default',
  },
  argTypes: {
    view: {
      control: { type: 'radio' },
      options: ['row', 'column'],
      table: {
        type: {
          summary: "'row' | 'column'",
        },
        defaultValue: { summary: 'row' },
      },
    },
    margin: {
      control: { type: 'radio' },
      options: ['xl', 'l', 'm', 'sm', 'xsm', 'none'],
      table: {
        type: {
          summary: "'xl'| 'l'| 'm'| 'left-right'| 'sm' | 'xsm'| 'none'",
        },
        defaultValue: { summary: 'm' },
      },
    },
    padding: {
      control: { type: 'radio' },
      options: ['xl', 'l', 'm', 'sm', 'xsm', 'none'],
      table: {
        type: {
          summary: "'xl'| 'l'| 'm'| 'left-right'| 'sm' | 'xsm'| 'none'",
        },
        defaultValue: { summary: 'none' },
      },
    },
    alignItems: {
      options: ['normal', 'center', 'start', 'stretch', 'end'],
      control: { type: 'radio' },
      table: {
        type: {
          summary: "'normal' | 'center' | 'start' | 'stretch' | 'end'",
        },
        defaultValue: { summary: 'center' },
      },
    },
    applyMargin: {
      control: { type: 'radio' },
      options: [
        'top-bottom',
        'top-left-right',
        'left-right-bottom',
        'left-right',
        'all',
        'left',
        'right',
        'top',
        'bottom',
      ],
      table: {
        type: {
          summary:
            "'top-bottom' | 'top-left-right' | 'left-right-bottom' | 'left-right' | 'all' | 'left' | 'right' | 'top' |'bottom'",
        },
        defaultValue: { summary: 'all' },
      },
    },
    applyPadding: {
      control: { type: 'radio' },
      options: [
        'top-bottom',
        'top-left-right',
        'left-right-bottom',
        'left-right',
        'all',
        'left',
        'right',
        'top',
        'bottom',
      ],
      table: {
        type: {
          summary:
            "'top-bottom' | 'top-left-right' | 'left-right-bottom' | 'left-right' | 'all' | 'left' | 'right' | 'top' |'bottom'",
        },
        defaultValue: { summary: 'all' },
      },
    },
    justifyContent: {
      control: { type: 'radio' },
      options: ['center', 'normal', 'stretch', 'space-evenly', 'space-around', 'space-between'],
      table: {
        type: {
          summary: "'center' | 'normal' | 'stretch' | 'space-evenly' | 'space-around' | 'space-between'",
        },
        defaultValue: { summary: 'normal' },
      },
    },
    gap: {
      options: ['none', 'sm', 'default', 'l'],
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const Lis = () =>
  Array.from({ length: 6 }, (_, index) => (
    <List.Item key={index}>
      <Icon /> <Text>{'item ' + index}</Text>
    </List.Item>
  ));

export const Default: Story = {
  name: 'Default',
  args: {
    children: Lis(),
  },
};
