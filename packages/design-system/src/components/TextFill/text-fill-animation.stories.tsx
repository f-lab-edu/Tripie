import type { Meta, StoryObj } from '@storybook/react';

import { useEffect } from 'react';

import { useAppTheme } from '../../hooks';
import TextFillAnimation from './TextFillAnimation';

const meta: Meta<typeof TextFillAnimation> = {
  title: 'tripie-ui/TextFillAnimation',
  component: TextFillAnimation,
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
  name: 'TextFillAnimation',
  args: { children: 'Text fill animation' },
};

export const TitleTextFillAnimation: Story = {
  name: 'TextFillAnimation.Title',
  render: () => <TextFillAnimation.Title>Title text underline animation</TextFillAnimation.Title>,
};
