import type { Meta, StoryObj } from '@storybook/react';
import { AwsMap } from '@tripie-pyotato/design-system';
import { Calendar } from '@tripie-pyotato/design-system/@components';
import { useAppTheme } from '@tripie-pyotato/design-system/@hooks';

const meta: Meta<typeof AwsMap> = {
  title: 'tripie-design@Components/x/AwsMap',
  component: Calendar,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: '지도',
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
  render: args => {
    return (
      <AwsMap
        {...args}
        apiKey={'put-your-AWS_MAP_ACTIONS_KEY-here'}
        locationMarker={[
          { parent: '0', info: 'Seoul', lat: 37.715133, lng: 126.734086, label: 'attraction', index: '0-0' },
        ]}
        center={{ latitude: 37.715133, longitude: 126.734086 }}
      />
    );
  },
};
