import type { Meta, StoryObj } from '@storybook/react';

import { useEffect } from 'react';
import { useAppTheme } from '../../../hooks';
import ParticleBackground from './ParticleBackground';

const meta: Meta<typeof ParticleBackground> = {
  title: 'tripie-ui/Particle/Background',
  component: ParticleBackground,
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
  render: () => (
    <div style={{ height: '100vh', width: '100vw' }}>
      <ParticleBackground>default</ParticleBackground>
    </div>
  ),
};
