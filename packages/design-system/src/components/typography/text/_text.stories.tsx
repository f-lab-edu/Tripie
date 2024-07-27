import type { Meta, StoryObj } from "@storybook/react";
import { useEffect } from "react";
import { useAppTheme } from "../../../hooks";
import Text from "./_text";

const meta: Meta<typeof Text> = {
  title: "tripie-ui/Typography/Text",
  tags: ["autodocs"],
  component: Text,
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
  name: "Default",
  args: {
    children: "default 기본",
  },
};

export const PreserveLine: Story = {
  name: "PreserveLine",
  args: {
    children: "안녕하세요.\n줄바꿈이되나요?",
  },
};

export const SuperLongText: Story = {
  name: "SuperLongText/Ellipsis",
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ea libero itaque sunt corrupti, nulla asperiores nesciunt distinctio sint ad harum quia minus soluta eveniet eius vero ducimus? Eum, quae? orem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ea libero itaque sunt corrupti, nulla asperiores nesciunt distinctio sint ad harum quia minus soluta eveniet eius vero ducimus? Eum, quae? orem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ea libero itaque sunt corrupti, nulla asperiores nesciunt distinctio sint ad harum quia minus soluta eveniet eius vero ducimus? Eum, quae? orem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ea libero itaque sunt corrupti, nulla asperiores nesciunt distinctio sint ad harum quia minus soluta eveniet eius vero ducimus? Eum, quae? orem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ea libero itaque sunt corrupti, nulla asperiores nesciunt distinctio sint ad harum quia minus soluta eveniet eius vero ducimus? Eum, quae? orem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ea libero itaque sunt corrupti, nulla asperiores nesciunt distinctio sint ad harum quia minus soluta eveniet eius vero ducimus? Eum, quae? orem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ea libero itaque sunt corrupti, nulla asperiores nesciunt distinctio sint ad harum quia minus soluta eveniet eius vero ducimus? Eum, quae? orem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ea libero itaque sunt corrupti, nulla asperiores nesciunt distinctio sint ad harum quia minus soluta eveniet eius vero ducimus? Eum, quae?",
  },
};

export const SuperLongTextPreserveLin: Story = {
  name: "SuperLongText/PreserveLine",
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n Nihil ea libero itaque sunt corrupti, nulla asperiores nesciunt distinctio sint ad harum quia minus soluta eveniet eius vero ducimus? Eum, quae? orem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ea libero itaque sunt corrupti, nulla asperiores nesciunt distinctio sint ad harum quia minus soluta eveniet eius vero ducimus? Eum, quae? \n\n orem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ea libero itaque sunt corrupti, nulla asperiores nesciunt distinctio sint ad harum quia minus soluta eveniet eius vero ducimus? Eum, quae? \n orem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ea libero itaque sunt corrupti, nulla asperiores nesciunt distinctio sint ad harum quia minus soluta eveniet eius vero ducimus? Eum, quae? orem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ea libero itaque sunt corrupti, nulla asperiores nesciunt distinctio sint ad harum quia minus soluta eveniet eius vero ducimus? Eum, quae? orem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ea libero itaque sunt corrupti, nulla asperiores nesciunt distinctio sint ad harum quia minus soluta eveniet eius vero ducimus? Eum, quae? orem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ea libero itaque sunt corrupti, nulla asperiores nesciunt distinctio sint ad harum quia minus soluta eveniet eius vero ducimus? Eum, quae? orem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ea libero itaque sunt corrupti, nulla asperiores nesciunt distinctio sint ad harum quia minus soluta eveniet eius vero ducimus? Eum, quae?",
  },
  decorators: [
    (story) => {
      return story().type.Paragraph({
        children:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n Nihil ea libero itaque sunt corrupti, nulla asperiores nesciunt distinctio sint ad harum quia minus soluta eveniet eius vero ducimus? Eum, quae? orem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ea libero itaque sunt corrupti, nulla asperiores nesciunt distinctio sint ad harum quia minus soluta eveniet eius vero ducimus? Eum, quae? \n\n orem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ea libero itaque sunt corrupti, nulla asperiores nesciunt distinctio sint ad harum quia minus soluta eveniet eius vero ducimus? Eum, quae? \n orem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ea libero itaque sunt corrupti, nulla asperiores nesciunt distinctio sint ad harum quia minus soluta eveniet eius vero ducimus? Eum, quae? orem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ea libero itaque sunt corrupti, nulla asperiores nesciunt distinctio sint ad harum quia minus soluta eveniet eius vero ducimus? Eum, quae? orem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ea libero itaque sunt corrupti, nulla asperiores nesciunt distinctio sint ad harum quia minus soluta eveniet eius vero ducimus? Eum, quae? orem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ea libero itaque sunt corrupti, nulla asperiores nesciunt distinctio sint ad harum quia minus soluta eveniet eius vero ducimus? Eum, quae? orem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ea libero itaque sunt corrupti, nulla asperiores nesciunt distinctio sint ad harum quia minus soluta eveniet eius vero ducimus? Eum, quae?",
      });
    },
  ],
};
