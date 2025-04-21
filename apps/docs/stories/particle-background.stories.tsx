import type { Meta, StoryObj } from '@storybook/react';

import { ParticleBackground } from '@tripie-pyotato/design-system';
import { useAppTheme } from '@tripie-pyotato/design-system/@hooks';

const meta: Meta<typeof ParticleBackground> = {
  title: 'tripie-design/Particle/Background',
  component: ParticleBackground,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (story, context) => {
      const { mode } = useAppTheme();
      context.globals.theme = mode;
      return <div className={`${mode}`}>{story()}</div>;
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
