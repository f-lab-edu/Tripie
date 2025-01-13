import type { Meta, StoryObj } from '@storybook/react';
import { useEffect } from 'react';
import { useAppTheme } from '../../hooks';
import Headings from '../typography/headings';
import Text from '../typography/text';
import { default as Card } from './_card';

const meta: Meta<typeof Card> = {
  title: 'tripie-ui/Card',
  component: Card,
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

export const Post5: Story = {
  name: 'Gallery image count 5',
  decorators: [
    Story => {
      return Story().type.Post({
        children: (
          <>
            <Text dim={true}>xxx님의 일정</Text>
            <Headings.H3>제목</Headings.H3>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit suscipit, tempora iure, sed assumenda
              consequuntur doloremque culpa officia deleniti quos dolores at, ab corporis illum amet. Possimus unde
              dolores omnis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe deleniti natus animi
              tempora ratione doloremque veniam est, ducimus provident consequuntur minus at reprehenderit nisi adipisci
              delectus minima velit maiores nemo?
            </Text>
          </>
        ),
        coverImage: [
          'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg',
          'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg',
          'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg',
          'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg',
          'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg',
        ],
        userName: '하나',
        href: '',
      });
    },
  ],
};

export const Post4: Story = {
  name: 'Gallery image count 4',
  decorators: [
    Story => {
      return Story().type.Post({
        children: (
          <>
            <Text dim={true}>xxx님의 일정</Text>
            <Headings.H3>제목</Headings.H3>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit suscipit, tempora iure, sed assumenda
              consequuntur doloremque culpa officia deleniti quos dolores at, ab corporis illum amet. Possimus unde
              dolores omnis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe deleniti natus animi
              tempora ratione doloremque veniam est, ducimus provident consequuntur minus at reprehenderit nisi adipisci
              delectus minima velit maiores nemo?
            </Text>
          </>
        ),
        coverImage: [
          'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg',
          'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg',
          'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg',
          'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg',
        ],
        userName: '하나',
        href: '',
      });
    },
  ],
};

export const Post3: Story = {
  name: 'Gallery image count 3',
  decorators: [
    Story => {
      return Story().type.Post({
        children: (
          <>
            <Text dim={true}>xxx님의 일정</Text>
            <Headings.H3>제목</Headings.H3>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit suscipit, tempora iure, sed assumenda
              consequuntur doloremque culpa officia deleniti quos dolores at, ab corporis illum amet. Possimus unde
              dolores omnis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe deleniti natus animi
              tempora ratione doloremque veniam est, ducimus provident consequuntur minus at reprehenderit nisi adipisci
              delectus minima velit maiores nemo?
            </Text>
          </>
        ),
        coverImage: [
          'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg',
          'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg',
          'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg',
        ],
        userName: '하나',
        href: '',
      });
    },
  ],
};
export const Post2: Story = {
  name: 'Gallery image count 2',
  decorators: [
    Story => {
      return Story().type.Post({
        children: (
          <>
            <Text dim={true}>xxx님의 일정</Text>
            <Headings.H3>제목</Headings.H3>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit suscipit, tempora iure, sed assumenda
              consequuntur doloremque culpa officia deleniti quos dolores at, ab corporis illum amet. Possimus unde
              dolores omnis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe deleniti natus animi
              tempora ratione doloremque veniam est, ducimus provident consequuntur minus at reprehenderit nisi adipisci
              delectus minima velit maiores nemo?
            </Text>
          </>
        ),
        coverImage: [
          'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg',
          'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg',
        ],
        userName: '하나',
        href: '',
      });
    },
  ],
};

export const Post1: Story = {
  name: 'Gallery image count 1',
  decorators: [
    Story => {
      return Story().type.Post({
        children: (
          <>
            <Text dim={true}>xxx님의 일정</Text>
            <Headings.H3>제목</Headings.H3>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit suscipit, tempora iure, sed assumenda
              consequuntur doloremque culpa officia deleniti quos dolores at, ab corporis illum amet. Possimus unde
              dolores omnis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe deleniti natus animi
              tempora ratione doloremque veniam est, ducimus provident consequuntur minus at reprehenderit nisi adipisci
              delectus minima velit maiores nemo?
            </Text>
          </>
        ),
        userName: '하나',
        coverImage: [
          'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg',
        ],
        href: '',
      });
    },
  ],
};
