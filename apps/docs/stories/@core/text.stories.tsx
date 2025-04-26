import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '@tripie-pyotato/design-system/@components';
import { Text } from '@tripie-pyotato/design-system/@core';
import { useAppTheme } from '@tripie-pyotato/design-system/@hooks';

const meta: Meta<typeof Text> = {
  title: 'tripie-design@core/Text',
  tags: ['autodocs'],
  component: Text,
  parameters: {
    docs: {
      description: {
        component:
          '<span>으로 감싼 텍스트 컴포넌트, children이 `string`만으로 구성되었을 경우에만 각 문자를 span으로 감싸줍니다.',
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
  args: {
    alignItems: 'center',
    justifyContent: 'normal',
    gap: 'default',
    size: 'default',
    bold: false,
    crossOut: false,
    margin: 'none',
    applyMargin: 'all',
    padding: 'none',
    applyPadding: 'all',
  },
  argTypes: {
    bold: {
      options: [true, false],
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: 'false' },
      },
    },
    crossOut: {
      options: [true, false],
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: 'false' },
      },
    },
    size: {
      options: ['default', 'h0', 'h1', 'h2', 'h3', 'h4', 'text', 'small', 'tiny'],
      control: { type: 'radio' },
      table: {
        type: {
          summary: "'default' | 'h0' | 'h1' | 'h2' | 'h3' | 'h4' | 'text' | 'small' | 'tiny'",
        },
        defaultValue: { summary: 'default' },
      },
    },
    gap: {
      options: ['none', 'sm', 'default', 'l'],
      control: { type: 'radio' },
      table: {
        type: {
          summary: "none' | 'sm' | 'default' | 'l",
        },
        defaultValue: { summary: 'none' },
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
    children: 'default 기본',
  },
};

export const Accented: Story = {
  name: 'Text.Accented',
  render: () => <Text.Accented>accented text</Text.Accented>,
};

export const TextWithIcon: Story = {
  name: 'Text.WithIcon',
  render: () => (
    <Text>
      <Icon />
      accented text
    </Text>
  ),
};
