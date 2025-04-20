import type { Meta, StoryObj } from '@storybook/react';
import { Headings } from '@tripie-pyotato/design-system/@components/core';
import { useAppTheme } from '@tripie-pyotato/design-system/@hooks';

const meta: Meta<typeof Headings> = {
  title: 'tripie-design/Typography/Headings',
  tags: ['autodocs'],
  component: Headings,
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

export const H1: Story = {
  name: 'H1',
  decorators: [
    story => {
      return story().type.H1({
        children: 'Heading 1',
      });
    },
  ],
};

export const H2: Story = {
  name: 'H2',
  decorators: [
    story => {
      return story().type.H2({
        children: 'Heading 2',
      });
    },
  ],
};

export const H3: Story = {
  name: 'H3',
  decorators: [
    story => {
      return story().type.H3({
        children: 'Heading 3',
      });
    },
  ],
};
export const H4: Story = {
  name: 'H4',
  decorators: [
    story => {
      return story().type.H4({
        children: 'Heading 4',
      });
    },
  ],
};

export const Headline: Story = {
  name: 'Headline',
  decorators: [
    story => {
      return story().type.H4({
        children: 'Headline',
      });
    },
  ],
};

export const HeadlineSecondary: Story = {
  name: 'Headline secondary',
  decorators: [
    story => {
      return story().type.H4({
        children: 'Headline',
        className: 'secondary',
      });
    },
  ],
};
