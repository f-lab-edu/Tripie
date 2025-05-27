import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '@tripie-pyotato/design-system/@components';
import { Text } from '@tripie-pyotato/design-system/@core';

import { useAppTheme } from '@tripie-pyotato/design-system/@hooks';

const meta: Meta<typeof Card> = {
  title: 'tripie-design@components/Card',
  component: Card,
  tags: ['autodocs'],
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
  name: 'Card',
  args: {
    children: 'Default',
  },
};

export const CardContent: Story = {
  name: 'Card.Content',

  render: () => <Card.Content> Card Content</Card.Content>,
};

export const CardWithCoverImage: Story = {
  name: 'Card.WithCoverImage',
  render: () => (
    <Card.WithImage
      src={'https://media.triple.guide/triple-cms/c_fill,f_auto,h_256,w_256/54e3594d-1087-43ff-b760-7231d4103edf.jpeg'}
      alt={
        'https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/54e3594d-1087-43ff-b760-7231d4103edf.jpeg의 이미지일 수도 있음'
      }
      cover={true}
    >
      <Card.Header size="h3">여름 제주 인생샷 명소 BEST 7</Card.Header>
      <Card.Divider />
      <Card.Content>대자연부터 감성 카페까지, 인생샷을 남길 수 있는 곳</Card.Content>
    </Card.WithImage>
  ),
};

export const CardWithImage: Story = {
  name: 'Card.WithImage',
  render: () => (
    <Card.WithImage
      src={'https://media.triple.guide/triple-cms/c_fill,f_auto,h_256,w_256/54e3594d-1087-43ff-b760-7231d4103edf.jpeg'}
      alt={
        'https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/54e3594d-1087-43ff-b760-7231d4103edf.jpeg의 이미지일 수도 있음'
      }
    >
      <Card.Header size="h3">여름 제주 인생샷 명소 BEST 7</Card.Header>
      <Card.Content>대자연부터 감성 카페까지, 인생샷을 남길 수 있는 곳</Card.Content>
    </Card.WithImage>
  ),
};

export const CardWithContent: Story = {
  name: 'Card.WithContent',
  render: () => (
    <Card>
      <Text size="h2">여름 제주 인생샷 명소 BEST 7</Text>
      <Text>대자연부터 감성 카페까지, 인생샷을 남길 수 있는 곳</Text>
    </Card>
  ),
};
