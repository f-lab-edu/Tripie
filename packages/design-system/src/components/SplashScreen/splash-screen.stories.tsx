import type { Meta, StoryObj } from '@storybook/react';
import { useEffect } from 'react';
import { useAppTheme } from '../../hooks';
import { default as SplashScreen } from './SplashScreen';

const meta: Meta<typeof SplashScreen> = {
  title: 'tripie-ui/SplashScreen',
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
    <div style={{ height: '100vh' }}>
      <SplashScreen>splash</SplashScreen>
    </div>
  ),
};
