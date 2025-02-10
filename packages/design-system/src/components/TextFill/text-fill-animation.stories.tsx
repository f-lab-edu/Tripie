import type { Meta, StoryObj } from '@storybook/react';

import { useEffect } from 'react';

import { useAppTheme } from '../../hooks';
import COLORS from '../../shared/colors';
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
  name: 'Default',
  render: () => <TextFillAnimation text={'Text fill animation'} />,
};

export const TextFillAnimationWithCustomStartEndColor: Story = {
  name: 'Default',
  render: () => (
    <TextFillAnimation
      text={'Text fill animation starting with #ffffff and with end color #d3ffca'}
      startColor={COLORS[0]}
      endColor={COLORS[50]}
    />
  ),
};

export const TitleTextFillAnimation: Story = {
  name: 'TextFillAnimation.Title',
  render: () => <TextFillAnimation.Title repeat={Infinity}>Title text fill animation</TextFillAnimation.Title>,
};
