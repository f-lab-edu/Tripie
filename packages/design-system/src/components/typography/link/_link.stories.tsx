import type { Meta, StoryObj } from '@storybook/react';
import { useEffect } from 'react';
import { useAppTheme } from '../../../hooks';
import { default as Text, default as UnstyledLink } from './_link';

const meta: Meta<typeof UnstyledLink> = {
  title: 'tripie-ui/Typography/Link',
  tags: ['autodocs'],
  component: Text,
  decorators: [
    (story, context) => {
      const { mode, setMode } = useAppTheme();
      const [selectedTheme] = context.globals.theme || mode;

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
