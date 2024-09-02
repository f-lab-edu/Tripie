import type { Meta, StoryObj } from '@storybook/react';
import { useEffect } from 'react';
import { useAppTheme } from '../../../hooks';
import Image from './_image';

const meta: Meta<typeof Image> = {
  title: 'tripie-ui/Image',
  component: Image,
  tags: ['autodocs'],
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
  name: 'Image',
  args: {
    src: 'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/b1685ba5-797a-40f2-98a5-c5480e32742d.jpeg',
    alt: 'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/b1685ba5-797a-40f2-98a5-c5480e32742d.jpeg',
  },
};

export const NoImage: Story = {
  name: 'No Image',
  args: {},
};

export const DefaultProfile: Story = {
  name: 'Default Profile',
  args: {
    variant: 'profile',
    src: 'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/b1685ba5-797a-40f2-98a5-c5480e32742d.jpeg',
    alt: 'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/b1685ba5-797a-40f2-98a5-c5480e32742d.jpeg',
  },
};

export const NoProfileImage: Story = {
  name: 'No Profile Image',
  decorators: [
    story => {
      return story().type.Profile({ userName: '하나' });
    },
  ],
};

export const LargeProfile: Story = {
  name: 'Large Profile',
  args: {
    variant: 'profile',
    sizes: 'l',
    src: 'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/b1685ba5-797a-40f2-98a5-c5480e32742d.jpeg',
    alt: 'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/b1685ba5-797a-40f2-98a5-c5480e32742d.jpeg',
  },
};

export const SmallProfile: Story = {
  name: 'Small Profile',
  args: {
    variant: 'profile',
    sizes: 'sm',
    src: 'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/b1685ba5-797a-40f2-98a5-c5480e32742d.jpeg',
    alt: 'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/b1685ba5-797a-40f2-98a5-c5480e32742d.jpeg',
  },
};
