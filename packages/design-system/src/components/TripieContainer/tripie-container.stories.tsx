import type { Meta, StoryObj } from '@storybook/react';
import { useEffect } from 'react';
import { useAppTheme } from '../../hooks';
import TripieContainer from './TripieContainer';

const meta: Meta<typeof TripieContainer> = {
  title: 'tripie-ui/Container',
  component: TripieContainer,
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
  name: 'Margin-Default',
  args: {
    children: 'default container',
  },
};

export const PreserveWhiteSpace: Story = {
  name: 'PreserveWhiteSpace',
  args: {
    children: 'preserve white space =true 설정 시 \n 줄바꿈 이스케이프 문자열 줄바꿈이 유지됩니다.',
    preserveWhiteSpace: true,
  },
};

export const AllDefault: Story = {
  name: 'Margin-m',
  args: {
    children: 'MarginAll m container',
    margin: 'm',
  },
};

export const AllXsm: Story = {
  name: 'Margin-xm',
  args: {
    children: 'm container',
    margin: 'xsm',
  },
};

export const AllSm: Story = {
  name: 'Margin-sm',
  args: {
    children: 'sm container',

    margin: 'sm',
  },
};

export const AllL: Story = {
  name: 'Margin-l',
  args: {
    children: ' l container',
    margin: 'l',
  },
};

export const AllXl: Story = {
  name: 'Margin-xl',
  args: {
    children: ' xl container',
    margin: 'xl',
  },
};
