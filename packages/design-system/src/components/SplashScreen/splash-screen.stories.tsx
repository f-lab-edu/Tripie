import type { Meta, StoryObj } from '@storybook/react';
import { useEffect } from 'react';
import { useAppTheme } from '../../hooks';
import { default as SplashScreen } from './SplashScreen';

const meta: Meta<typeof SplashScreen> = {
  title: 'tripie-ui/SplashScreen',
  component: SplashScreen,
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
      <SplashScreen isLoading={true}>splash</SplashScreen>
    </div>
  ),
};
