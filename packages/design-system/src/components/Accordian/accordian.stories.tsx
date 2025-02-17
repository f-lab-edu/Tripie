import type { Meta, StoryObj } from '@storybook/react';

import { useEffect } from 'react';
import { Container } from '..';
import { useAppTheme } from '../../hooks';
import Accordion from './Accordian';

const meta: Meta<typeof Accordion> = {
  title: 'tripie-ui/Accordion',
  component: Accordion,
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
