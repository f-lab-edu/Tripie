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
  name: 'Divider.Default',
  // args: {},
  render: () => (
    <>
      content before
      <Divider />
      content after
    </>
  ),
};

export const ArticleDivider1: Story = {
  name: 'Divider.Article.hr1',
  render: () => (
    <>
      content before
      <Divider.Article item={{ type: 'hr1' }} />
      content after
    </>
  ),
};

export const ArticleDivider2: Story = {
  name: 'Divider.Article.hr2',
  render: () => (
    <>
      content before
      <Divider.Article item={{ type: 'hr2' }} />
      content after
    </>
  ),
};

export const ArticleDivider3: Story = {
  name: 'Divider.Article.hr3',
  render: () => (
    <>
      content before
      <Divider.Article item={{ type: 'hr3' }} />
      content after
    </>
  ),
};

export const ArticleDivider4: Story = {
  name: 'Divider.Article.hr4',
  render: () => (
    <>
      content before
      <Divider.Article item={{ type: 'hr4' }} />
      content after
    </>
  ),
};

export const ArticleDivider5: Story = {
  name: 'Divider.Article.hr5',
  render: () => (
    <>
      content before
      <Divider.Article item={{ type: 'hr5' }} />
      content after
    </>
  ),
};
