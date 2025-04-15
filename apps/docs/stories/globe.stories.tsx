import type { Meta, StoryObj } from '@storybook/react';
import { Globe } from '@tripie-pyotato/design-system/@components';
import { useAppTheme } from '@tripie-pyotato/design-system';

const meta: Meta<typeof Globe> = {
  title: 'tripie-design/Globe',
  component: Globe,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: '드래그, 줌인, 줌아웃 등이 가능한 지구 모양 매쉬 오브젝트',
      },
    },
  },
  decorators: [
    story => {
      const { mode } = useAppTheme();
      return <div className={`${mode}`}>{story()}</div>;
    },
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  render: () => {
    return <Globe />;
  },
};
