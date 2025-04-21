import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '@tripie-pyotato/design-system';
import { ListItem, Text } from '@tripie-pyotato/design-system/@core';
import { useAppTheme } from '@tripie-pyotato/design-system/@hooks';

const meta: Meta<typeof ListItem> = {
  title: 'tripie-design@core/List-Item',
  component: ListItem,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: '<li> 컨테이너 컴포넌트 ' } } },
  decorators: [
    (story, context) => {
      const { mode } = useAppTheme();
      context.globals.theme = mode;
      return <div className={`${mode}`}>{story()}</div>;
    },
  ],
  argTypes: {
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
        defaultValue: { summary: 'normal' },
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

export const Default: Story = {
  name: 'Default',
  args: {
    children: (
      <>
        <Icon />
        <Text>list item</Text>
      </>
    ),
  },
};
