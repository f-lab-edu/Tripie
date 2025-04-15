import type { Meta, StoryObj } from '@storybook/react';

import { TextUnderLineAnimation } from '@tripie-pyotato/design-system/@components';
import { useAppTheme } from '@tripie-pyotato/design-system/@hooks';

const meta: Meta<typeof TextUnderLineAnimation> = {
  title: 'tripie-design/Text/UnderlineAnimation',
  component: TextUnderLineAnimation,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '호버 시 텍스트 밑줄 애니메이션이 동작하는 컴포넌트입니다.',
      },
    },
  },
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
  name: 'TextUnderlineAnimation',
  args: { children: 'hover to activate text underline animation' },
};
