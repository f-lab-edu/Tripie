import type { Meta, StoryObj } from '@storybook/react';

import { useEffect } from 'react';
import { useAppTheme } from '../../hooks';
import useCycle from '../../hooks/useCycle';
import Switch from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'tripie-ui/Switch',
  component: Switch,
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
  name: 'Particle',
  render: () => {
    const [current, cycle] = useCycle('off', 'on');
    return <Switch current={current} cycle={cycle} text={current} />;
  },
};
