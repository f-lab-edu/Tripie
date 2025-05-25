import { Meta, StoryObj } from '@storybook/react';
import { Stack } from '@tripie-pyotato/design-system/@core';
import { useAppTheme } from '@tripie-pyotato/design-system/@hooks';

const meta: Meta<typeof Stack> = {
  title: 'tripie-design@core/Stack',
  component: Stack,
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
  args: {
    gridRepeat: {
      'wrap-xl': 6,
      'wrap-md': 4,
    },
    gridWrapOn: {
      'wrap-sm': 1,
    },
  },
  argTypes: {
    gridWrapOn: {
      control: { type: 'object' },
      table: {
        type: {
          summary:
            'wrap-${size}를 key와  1, 2, 4, 5, 6, 8, 10, 12 중 하나를 value로 한 객체를 제공하면 해당 breakpoint를 maxwidth로 grid column를 repeat합니다.',
        },
        defaultValue: {
          summary: `{'wrap-sm': 1}`,
        },
      },
    },
    gridRepeat: {
      control: { type: 'object' },
      table: {
        type: {
          summary:
            'wrap-${size}를 key와  1, 2, 4, 5, 6, 8, 10, 12 중 하나를 value로 한 객체를 제공하면 해당 breakpoint를 minwidth로 grid column를 repeat합니다.',
        },
        defaultValue: {
          summary: `{'wrap-xl': 6, 'wrap-md': 4,}`,
        },
      },
    },
    display: {
      control: { type: 'radio' },
      options: ['grid', 'inline-flex'],
      table: {
        type: {
          summary: "'inline-flex' | 'grid'",
        },
        defaultValue: { summary: 'inline-flex' },
      },
    },
    direction: {
      control: { type: 'radio' },
      options: ['column', 'row'],
      table: {
        type: {
          summary: "'column'| 'row'",
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
    gap: {
      control: { type: 'radio' },
      options: ['none', 'l', 'sm', 'default'],
      table: {
        type: {
          summary: "'none' | 'l' | 'sm' | 'default'",
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
  render: args => {
    const Items = () => Array.from({ length: 8 }, (_, i) => <div key={`item${i}`}>item {i + 1}</div>);

    return (
      <Stack {...args}>
        <Items />
      </Stack>
    );
  },
};
