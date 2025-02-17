import type { Meta, StoryObj } from '@storybook/react';
import { useEffect } from 'react';

import { useAppTheme } from '../../hooks';
import Icon from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'tripie-ui/Icon/Transport',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '교통 수단 관련 아이콘 컴포넌트들입니다.',
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

export const TransportIcon: Story = {
  name: 'Icon.Transport',
  render: () => <Icon.Transport />,
};

export const TransportBusIcon: Story = {
  name: 'Icon.Transport.Bus',
  render: () => <Icon.Transport type={'BUS'} />,
};

export const TransportActiveBusIcon: Story = {
  name: 'Icon.Transport.Bus.Active',
  render: () => <Icon.Transport active={true} type={'BUS'} />,
};

export const TransportCarIcon: Story = {
  name: 'Icon.Transport.Car',
  render: () => <Icon.Transport type={'CAR'} />,
};

export const TransportActiveCarIcon: Story = {
  name: 'Icon.Transport.Car.Active',
  render: () => <Icon.Transport active={true} type={'CAR'} />,
};

export const TransportFlagIcon: Story = {
  name: 'Icon.Transport.Flag',
  render: () => <Icon.Transport type={'FLAG'} />,
};

export const TransportActiveFlagIcon: Story = {
  name: 'Icon.Transport.Flag.Active',
  render: () => <Icon.Transport active={true} type={'FLAG'} />,
};

export const TransportShipIcon: Story = {
  name: 'Icon.Transport.Ship',
  render: () => <Icon.Transport type={'SHIP'} />,
};

export const TransportActiveShipIcon: Story = {
  name: 'Icon.Transport.Ship.Active',
  render: () => <Icon.Transport active={true} type={'SHIP'} />,
};

export const TransportTrainIcon: Story = {
  name: 'Icon.Transport.Train',
  render: () => <Icon.Transport type={'TRAIN'} />,
};

export const TransportActiveTrainIcon: Story = {
  name: 'Icon.Transport.Train.Active',
  render: () => <Icon.Transport active={true} type={'TRAIN'} />,
};

export const TransportTramIcon: Story = {
  name: 'Icon.Transport.Tram',
  render: () => <Icon.Transport type={'TRAM'} />,
};

export const TransportActiveTramIcon: Story = {
  name: 'Icon.Transport.Tram.Active',
  render: () => <Icon.Transport active={true} type={'TRAM'} />,
};

export const TransportWalkIcon: Story = {
  name: 'Icon.Transport.Walk',
  render: () => <Icon.Transport type={'WALK'} />,
};

export const TransportActiveWalkIcon: Story = {
  name: 'Icon.Transport.Walk.Active',
  render: () => <Icon.Transport active={true} type={'WALK'} />,
};
