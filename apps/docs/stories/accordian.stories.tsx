import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, Container } from '@tripie-pyotato/design-system/@components';
import { useAppTheme } from '@tripie-pyotato/design-system/@hooks';

const meta: Meta<typeof Accordion> = {
  title: 'tripie-design/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: '<더보기>와 같이 클릭 시 상세 내용이 펼쳐지는 아코디언 컴포넌트입니다.',
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

const dummyContents = [
  {
    header: 'title 1',
    content: 'content 1',
  },
  {
    header: 'title 2',
    content: 'content 2',
  },
];

export const Default: Story = {
  name: 'Default',
  render: () => {
    return (
      <>
        {dummyContents.map(({ header, content }: { header: string; content: string }) => (
          <Accordion key={header}>
            <Accordion.Header>
              <Container margin="m" applyMargin="top">
                {header} <Accordion.Icon />
              </Container>
            </Accordion.Header>
            <Accordion.Divider />
            <Container applyMargin="top-bottom">
              <Accordion.Body>{content}</Accordion.Body>
            </Container>
          </Accordion>
        ))}
      </>
    );
  },
};
