import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from '@tripie-pyotato/design-system';
import { useAppTheme, useCycle } from '@tripie-pyotato/design-system/@hooks';

const meta: Meta<typeof Switch> = {
  title: 'tripie-design/Switch',
  component: Switch,
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
  name: 'Particle',
  render: () => {
    const [current, cycle] = useCycle('off', 'on');
    return <Switch current={current} cycle={cycle} text={current} />;
  },
};
