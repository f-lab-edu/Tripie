import type { Meta, StoryObj } from '@storybook/react';

import { useEffect } from 'react';
import { useAppTheme } from '../../hooks';
import List from './List';

const meta: Meta<typeof List> = {
  title: 'tripie-ui/List',
  component: List,
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
  name: 'Default',
  args: {
    children: (
      <>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
      </>
    ),
  },
};

export const AccentedChip: Story = {
  name: 'List.Grid',
  render: () => (
    <List.Grid>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
    </List.Grid>
  ),
};
