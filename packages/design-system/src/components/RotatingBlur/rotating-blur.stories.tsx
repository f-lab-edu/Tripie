import type { Meta, StoryObj } from '@storybook/react';

import { useEffect } from 'react';
import { useAppTheme } from '../../hooks';
import RotatingBlur from './RotatingBlur';

const meta: Meta<typeof RotatingBlur> = {
  title: 'tripie-ui/RotatingBlur',
  component: RotatingBlur,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: '회전하며 크기가 줄었다 늘어나는 애니메이션 오브젝트입니다.',
      },
    },
  },
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
  render: () => {
    return (
      <div style={{ height: '100vh' }}>
        <RotatingBlur />
      </div>
    );
  },
};
