import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '@tripie-pyotato/design-system';
import { List, Text } from '@tripie-pyotato/design-system/@core';
import { useAppTheme } from '@tripie-pyotato/design-system/@hooks';

const meta: Meta<typeof List> = {
  title: 'tripie-design@core/List',
  component: List,
  tags: ['autodocs'],
  decorators: [
    (story, context) => {
      const { mode } = useAppTheme();
      context.globals.theme = mode;
      return <div className={`${mode}`}>{story()}</div>;
    },
  ],
  render: args => {
    return <List {...args}></List>;
  },
  args: {
    alignItems: 'normal',
    justifyContent: 'flex-start',
    gap: 'default',
  },
  argTypes: {
    alignItems: {
      control: 'select',
      defaultValue: 'normal',
      description: 'flex 속성 align-items과 유사하게 동작, 직계 자식들을 교차축에 따라 정렬',
      table: {
        type: { summary: "'normal' | 'center' |'start' | 'stretch' | 'end'" },
        defaultValue: { summary: 'normal' },
      },
    },
    justifyContent: {
      control: 'select',
      defaultValue: 'flex-start',
      description:
        'flex 속성 justify-content과 유사하게 동작, "flex-start" 설정 시 플렉스 항목들을 축의 시작 부분에 정렬, "center" 설정 시 항목들을 축의 중심 부분에 정렬, "flex-end" 정렬 시 플렉스 항목들을 축의 끝 부분에 정렬',
      table: {
        type: { summary: "'flex-start' | 'center' | 'flex-end'" },
        defaultValue: { summary: 'flex-start' },
      },
    },
    gap: {
      control: 'select',
      defaultValue: 'default',
      description: 'flex gap 속성을 "default"로 설정시 0.5rem, "l"로 설정 시 1rem',
      table: {
        type: { summary: "'none' | 'sm' | 'default' | 'l'" },
        defaultValue: { summary: 'default' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// const Children = () =>
//   Array.from({ length: 6 }, (_, index) => (
//     <Card.WithCoverImage
//       src={'https://media.triple.guide/triple-cms/c_fill,f_auto,h_256,w_256/54e3594d-1087-43ff-b760-7231d4103edf.jpeg'}
//       alt={
//         'https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/54e3594d-1087-43ff-b760-7231d4103edf.jpeg의 이미지일 수도 있음'
//       }
//       summary={'대자연부터 감성 카페까지, 인생샷을 남길 수 있는 곳'}
//       withBorder={false}
//       title={'여름 제주 인생샷 명소 BEST 7'}
//       key={index}
//     />
//   ));

// export const Default: Story = {
//   name: 'Default',
//   args: {
//     children: Children(),
//   },
// };

const Lis = () =>
  Array.from({ length: 6 }, (_, index) => (
    <List.Item key={index}>
      <Icon /> <Text>{'item ' + index}</Text>
    </List.Item>
  ));

export const Default: Story = {
  name: 'Default',
  args: {
    children: Lis(),
  },
};
