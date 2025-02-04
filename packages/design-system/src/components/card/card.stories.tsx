import type { Meta, StoryObj } from '@storybook/react';

import { useEffect } from 'react';
import { useAppTheme } from '../../hooks';
import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'tripie-ui/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {},
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
  name: 'Card',
  args: {
    children: 'Default',
  },
};

export const CardContent: Story = {
  name: 'Card.Content',

  render: () => <Card.Content> Card Content</Card.Content>,
};

export const ClickableCardContent: Story = {
  name: 'Card.ClickableContent',

  render: () => <Card.ClickableContent>ClickableContent Card Content</Card.ClickableContent>,
};

export const CardDescription: Story = {
  name: 'Card.Description',
  render: () => <Card.Description>Card Description</Card.Description>,
};
