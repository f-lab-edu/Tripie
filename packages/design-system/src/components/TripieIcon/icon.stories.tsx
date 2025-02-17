import type { Meta, StoryObj } from '@storybook/react';
import { useEffect } from 'react';

import { useAppTheme } from '../../hooks';
import Icon from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'tripie-ui/Icon',
  component: Icon,
  tags: ['autodocs'],
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
  name: 'Icon.Default',
};

export const LargeNavigateIcon: Story = {
  name: 'Icon.Navigate.Large',
  render: () => <Icon.Navigate sizes="large" />,
};

export const NavigateIcon: Story = {
  name: 'Icon.Navigate',
  render: () => <Icon.Navigate />,
};

export const RefreshIcon: Story = {
  name: 'Icon.Refresh',
  render: () => <Icon.Refresh />,
};

export const PlaneIcon: Story = {
  name: 'Icon.Plane',
  render: () => <Icon.Plane />,
};

export const CloudIcon: Story = {
  name: 'Icon.Cloud',
  render: () => <Icon.Cloud index={0} />,
};

export const CursorIcon: Story = {
  name: 'Icon.Cursor',
  render: () => <Icon.Cursor />,
};

export const ScrollIcon: Story = {
  name: 'Icon.Scroll',
  render: () => <Icon.Scroll />,
};

export const XIcon: Story = {
  name: 'Icon.X',
  render: () => <Icon.X />,
};
export const CheckIcon: Story = {
  name: 'Icon.Check',
  render: () => <Icon.Check />,
};
