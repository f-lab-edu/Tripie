import type { Meta, StoryObj } from '@storybook/react';
import { useEffect } from 'react';
import { useAppTheme } from '../../hooks';
import Gallery from './_gallery';

const meta: Meta<typeof Gallery.Post> = {
  title: 'tripie-ui/Gallery/Post',
  component: Gallery.Post,
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
  name: 'Default',
  args: {
    urls: [
      'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg',
    ],
  },
};

export const ImageCount2: Story = {
  name: 'ImageCount2',
  args: {
    urls: [
      'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg',
      'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg',
    ],
  },
};

export const ImageCount3: Story = {
  name: 'ImageCount3',
  args: {
    urls: [
      'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg',
      'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg',
      'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg',
    ],
  },
};

export const ImageCount4: Story = {
  name: 'ImageCount4',
  args: {
    urls: [
      'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg',
      'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg',
      'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg',
      'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg',
    ],
  },
};

export const MaxImage5: Story = {
  name: 'MaxImage5',
  args: {
    urls: [
      'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg',
      'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg',
      'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg',
      'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg',
      'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg',
    ],
  },
};

export const OverMaxImageWithCount: Story = {
  name: 'OverMaxImageWithCount - displayLeftOverImgCount',
  args: {
    displayLeftOverImgCount: true,
    urls: [
      'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg',
      'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg',
      'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg',
      'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg',
      'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg',
      'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg',
      'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg',
    ],
  },
};

export const OverMaxImageWithoutCount: Story = {
  name: 'OverMaxImageWithout Count',
  args: {
    displayLeftOverImgCount: false,
    urls: [
      'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg',
      'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg',
      'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg',
      'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg',
      'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg',
      'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg',
      'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg',
    ],
  },
};
