import type { Meta, StoryObj } from '@storybook/react';

import { useEffect } from 'react';
import { useAppTheme } from '../../hooks';
import Divider from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'tripie-ui/Divider',
  component: Divider,
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
  name: 'Divider',
  args: {},
};

export const ArticleDivider1: Story = {
  name: 'Divider.Article.hr1',
  render: () => <Divider.Article item={{ type: 'hr1' }} />,
};

export const ArticleDivider2: Story = {
  name: 'Divider.Article.hr2',
  render: () => <Divider.Article item={{ type: 'hr2' }} />,
};

export const ArticleDivider3: Story = {
  name: 'Divider.Article.hr3',
  render: () => <Divider.Article item={{ type: 'hr3' }} />,
};

export const ArticleDivider4: Story = {
  name: 'Divider.Article.hr4',
  render: () => <Divider.Article item={{ type: 'hr4' }} />,
};

export const ArticleDivider5: Story = {
  name: 'Divider.Article.hr5',
  render: () => <Divider.Article item={{ type: 'hr5' }} />,
};
