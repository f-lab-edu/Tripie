import type { Meta, StoryObj } from '@storybook/react';
import { Link, Text, useAppTheme } from '@tripie-pyotato/design-system';

const meta: Meta<typeof Link> = {
  title: 'tripie-design/Link',
  tags: ['autodocs'],
  component: Text,
  decorators: [
    (story, context) => {
      const { mode } = useAppTheme();
      context.globals.theme = mode;
      return <div className={`${mode}`}>{story()}</div>;
    },
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  args: {
    children: '기본 링크',
    href: '#',
  },
};

export const AriaSelectedTrue: Story = {
  name: 'AriaSelectedTrue',
  args: {
    children: 'aria selected',
    href: '#',
    'aria-selected': true,
  },
};

export const AriaSelectedFalse: Story = {
  name: 'AriaSelectedFalse',
  args: {
    children: 'aria not selected',
    href: '#',
    'aria-selected': false,
  },
};

export const DisabledLink: Story = {
  name: 'DisabledLink',
  args: {
    children: 'disabled link',
    href: '#',
    'aria-disabled': true,
  },
};
