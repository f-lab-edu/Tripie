import type { Meta, StoryObj } from '@storybook/react';
import { SplashScreen, TextFillAnimation } from '@tripie-pyotato/design-system/@components';
import { useAppTheme } from '@tripie-pyotato/design-system/@hooks';

const meta: Meta<typeof SplashScreen> = {
  title: 'tripie-design/SplashScreen',
  component: SplashScreen,
  parameters: {
    docs: {
      description: {
        component: '로딩 시 화면 전체를 차지하며 스크롤업되는 splash screen 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
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
    <div style={{ height: '100vh' }}>
      <SplashScreen>splash</SplashScreen>
    </div>
  ),
};

export const Loading: Story = {
  name: 'Loading',
  render: () => (
    <div style={{ height: '100vh' }}>
      <SplashScreen>
        <TextFillAnimation.Title>Tripie.</TextFillAnimation.Title>
      </SplashScreen>
    </div>
  ),
};
