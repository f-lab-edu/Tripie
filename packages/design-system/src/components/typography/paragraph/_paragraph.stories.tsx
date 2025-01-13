import type { Meta, StoryObj } from '@storybook/react';
import { useEffect } from 'react';
import { useAppTheme } from '../../../hooks';
import Paragraph from './_paragraph';

const meta: Meta<typeof Paragraph> = {
  title: 'tripie-ui/Typography/Paragraph',
  tags: ['autodocs'],
  component: Paragraph,
  decorators: [
    (story, context) => {
      const { mode, setMode } = useAppTheme();
      const [selectedTheme] = context.globals.theme || mode;

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
    children: 'default 기본',
  },
};

export const PreserveLine: Story = {
  name: 'PreserveLine',
  args: {
    children: '안녕하세요.\n줄바꿈이되나요?',
  },
};

export const SuperLongText: Story = {
  name: 'SuperLongText/Ellipsis',
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ea libero itaque sunt corrupti, nulla asperiores nesciunt distinctio sint ad harum quia minus soluta eveniet eius vero ducimus? Eum, quae? orem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ea libero itaque sunt corrupti, nulla asperiores nesciunt distinctio sint ad harum quia minus soluta eveniet eius vero ducimus? Eum, quae? orem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ea libero itaque sunt corrupti, nulla asperiores nesciunt distinctio sint ad harum quia minus soluta eveniet eius vero ducimus? Eum, quae? orem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ea libero itaque sunt corrupti, nulla asperiores nesciunt distinctio sint ad harum quia minus soluta eveniet eius vero ducimus? Eum, quae? orem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ea libero itaque sunt corrupti, nulla asperiores nesciunt distinctio sint ad harum quia minus soluta eveniet eius vero ducimus? Eum, quae? orem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ea libero itaque sunt corrupti, nulla asperiores nesciunt distinctio sint ad harum quia minus soluta eveniet eius vero ducimus? Eum, quae? orem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ea libero itaque sunt corrupti, nulla asperiores nesciunt distinctio sint ad harum quia minus soluta eveniet eius vero ducimus? Eum, quae? orem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ea libero itaque sunt corrupti, nulla asperiores nesciunt distinctio sint ad harum quia minus soluta eveniet eius vero ducimus? Eum, quae?',
  },
};
