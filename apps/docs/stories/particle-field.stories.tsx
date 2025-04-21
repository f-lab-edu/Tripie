import type { Meta, StoryObj } from '@storybook/react';
import { ParticleField } from '@tripie-pyotato/design-system';
import { useAppTheme } from '@tripie-pyotato/design-system/@hooks';

const meta: Meta<typeof ParticleField> = {
  title: 'tripie-design/Particle/Field',
  component: ParticleField,
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
  render: () => {
    return (
      <div style={{ height: '100vh' }}>
        <ParticleField />
      </div>
    );
  },
};
