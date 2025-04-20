import { Meta, StoryObj } from '@storybook/react';
import { Container } from '@tripie-pyotato/design-system/@components/core';
import { useAppTheme } from '@tripie-pyotato/design-system/@hooks';

const meta: Meta<typeof Container> = {
  title: 'tripie-design/Container',
  component: Container,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '<div> 컨테이너 컴포넌트',
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
    align: {
      control: { type: 'radio' },
      options: ['left', 'center', 'right'],
      table: {
        type: {
          summary: "'left' | 'center' | 'right'",
        },
        defaultValue: { summary: 'left' },
      },
    },
    preserveWhiteSpace: {
      control: { type: 'radio' },
      options: [false, true, 'default'],
      table: {
        type: {
          summary: 'false | true | "default"',
        },
        defaultValue: { summary: 'false' },
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
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  args: {
    children: <>default container {'\n'} next line</>,
  },
};
