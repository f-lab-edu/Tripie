import type { Meta, StoryObj } from '@storybook/react';
import { COLORS, TextFillAnimation, useAppTheme } from '@tripie-pyotato/design-system';

const meta: Meta<typeof TextFillAnimation> = {
  title: 'tripie-design/Text/FillAnimation',
  component: TextFillAnimation,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: '텍스트 색상이 채워지는 애니메이션 효과를 지닌 컴포넌트입니다.',
      },
    },
  },
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
  render: () => <TextFillAnimation text={'Text fill animation'} />,
};

export const CustomStart_COLORS40: Story = {
  name: 'TextFillAnimation.START_#858585',
  render: () => <TextFillAnimation text={'Text fill animation'} baseColor={COLORS['40']} />,
};

export const CustomEnd_COLORS40: Story = {
  name: 'TextFillAnimation.END_#858585',
  render: () => <TextFillAnimation text={'Text fill animation'} endColor={COLORS['40']} />,
};

export const CustomStart_COLORS50End_COLOR40: Story = {
  name: 'TextFillAnimation.START_#d3ffca.END_#858585',
  render: () => <TextFillAnimation text={'Text fill animation'} baseColor={COLORS['50']} endColor={COLORS['40']} />,
};

export const TitleTextFillAnimation: Story = {
  name: 'TextFillAnimation.Title',
  render: () => <TextFillAnimation.Title repeat={Infinity}>Title text fill animation</TextFillAnimation.Title>,
};
