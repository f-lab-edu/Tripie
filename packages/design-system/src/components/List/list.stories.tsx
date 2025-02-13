import type { Meta, StoryObj } from '@storybook/react';

import { useEffect } from 'react';
import { useAppTheme } from '../../hooks';
import Card from '../TripieCard/Card';
import List from './List';

const meta: Meta<typeof List> = {
  title: 'tripie-ui/List',
  component: List,
  tags: ['autodocs'],
  argTypes: {},
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

const Children = () =>
  Array.from({ length: 6 }, (_, index) => (
    <Card.WithCoverImage
      src={'https://media.triple.guide/triple-cms/c_fill,f_auto,h_256,w_256/54e3594d-1087-43ff-b760-7231d4103edf.jpeg'}
      alt={
        'https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/54e3594d-1087-43ff-b760-7231d4103edf.jpeg의 이미지일 수도 있음'
      }
      summary={'대자연부터 감성 카페까지, 인생샷을 남길 수 있는 곳'}
      title={'여름 제주 인생샷 명소 BEST 7'}
      key={index}
    />
  ));

export const Default: Story = {
  name: 'Default',
  args: {
    children: Children(),
  },
};

export const AccentedChip: Story = {
  name: 'List.Grid',
  render: () => (
    <List.Grid>
      <Children />
    </List.Grid>
  ),
};

export const RowList: Story = {
  name: 'List.Row',
  render: () => (
    <List rowView={true}>
      <Children />
    </List>
  ),
};
