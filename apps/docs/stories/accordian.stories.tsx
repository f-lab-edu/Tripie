import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, Container, useAppTheme } from '@tripie-pyotato/design-system';

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

export const Default: Story = {
  name: 'Default',
  render: () => {
    return (
      <Accordion>
        <Accordion.Header>
          <Container margin="m" applyMargin="top">
            Default <Accordion.Icon />
          </Container>
        </Accordion.Header>
        <Accordion.Divider />
        <Container applyMargin="top-bottom">
          <Accordion.Body>default content</Accordion.Body>
        </Container>
      </Accordion>
    );
  },
};

export const MultipleAccordion: Story = {
  name: 'Multiple',
  render: () => {
    return (
      <>
        <Accordion>
          <Accordion.Header>
            <Container margin="m" applyMargin="top">
              Accordion 1 <Accordion.Icon />
            </Container>
          </Accordion.Header>
          <Accordion.Divider />
          <Container applyMargin="top-bottom">
            <Accordion.Body>Accordion content 1</Accordion.Body>
          </Container>
        </Accordion>
        <Accordion>
          <Accordion.Header>
            <Container margin="m" applyMargin="top">
              Accordion 2<Accordion.Icon />
            </Container>
          </Accordion.Header>
          <Accordion.Divider />
          <Container applyMargin="top-bottom">
            <Accordion.Body>Accordion content 2</Accordion.Body>
          </Container>
        </Accordion>
      </>
    );
  },
};
