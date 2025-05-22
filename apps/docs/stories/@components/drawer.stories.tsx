import type { Meta, StoryObj } from '@storybook/react';
import { Container } from '@tripie-pyotato/design-system';

import { Drawer } from '@tripie-pyotato/design-system/@components';
import { useAppTheme, useCycle } from '@tripie-pyotato/design-system/@hooks';
import meta from '../@core/container.stories';

const drawerMeta: Meta<typeof Drawer> = {
  title: 'tripie-design@components/navigation/Drawer',
  component: Drawer.Body,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
  decorators: [
    (story, context) => {
      const { mode } = useAppTheme();
      context.globals.theme = mode;
      return (
        <div className={`${mode}`} style={{ height: '10rem' }}>
          {story()}
        </div>
      );
    },
  ],
  argTypes: {
    ...meta['argTypes'],
    drawerContent: {
      position: {
        control: { type: 'radio' },
        options: ['top', 'bottom', 'left', 'right'],
        table: {
          type: {
            summary: "'top' | 'bottom' | 'left' | 'right'",
          },
          defaultValue: { summary: 'left' },
        },
      },
    },
    backDropFilter: {
      control: { type: 'number' },
      table: {
        type: {
          summary: "'number' value between 0 - 100. Applied opacity to content under the drawer component",
        },
        defaultValue: { summary: 0 },
      },
    },
    exposePercentage: {
      control: { type: 'number' },
      table: {
        type: {
          summary: "'number' value between 0 - 100. Applies to 'top' | 'bottom' position",
        },
        defaultValue: { summary: 100 },
      },
    },
    closeOutFocusedDrawer: {
      control: { type: 'boolean' },
      table: {
        type: {
          summary: "setting 'closeOutFocusedDrawer' as `true`closes drawer content on focusing drawer body",
        },
        defaultValue: { summary: true },
      },
    },
  },
  args: {
    drawerContent: {
      zIndex: 'modal',
      position: 'left',
      children: <Container> contents</Container>,
      margin: 'none',
      sizes: 'full',
      exposePercentage: 100,
      customDrawer: false,
      className: '',
    },
    drawerBody: {
      filter: 0,
      className: '',
      children: (
        <Container padding="none" margin="none" style={{ backgroundColor: 'grey', height: '-webkit-fill-available' }}>
          body
        </Container>
      ),
      zIndex: 'base',
    },
    initial: true,
    closeOutFocusedDrawer: true,
  },
};

export default drawerMeta;
type Story = StoryObj<typeof drawerMeta>;

export const Default: Story = {
  name: 'Default',
  render: (args: typeof Drawer) => {
    const [isOpen, toggleOpen] = useCycle(true, false);
    return <Drawer isOpen={isOpen} toggleOpen={() => toggleOpen()} {...args} />;
  },
};
