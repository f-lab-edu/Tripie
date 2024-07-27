import type { Meta, StoryObj } from "@storybook/react";
import { useEffect } from "react";
import { useAppTheme } from "../../hooks";
import Heading from "./_typography";

const meta: Meta<typeof Heading> = {
  title: "tripie-ui/Typography/Headings",
  tags: ["autodocs"],
  component: Heading,
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
  name: "Default",
  args: {
    children: "default 기본",
    emphasize: false,
  },
};

export const H1Emphasized: Story = {
  name: "H1Emphasized",
  args: {
    children: "Lorem ipsum dolor sit",
    emphasize: true,
  },
};

export const H0: Story = {
  name: "H0",
  decorators: [
    (story) => {
      return story().type.H0({
        children: "Lorem ipsum dolor sit",
      });
    },
  ],
};

export const H1WithHeadline: Story = {
  name: "H1WithHeadline",

  decorators: [
    (story) => {
      return (
        <>
          <Heading.Headline>headline of h1</Heading.Headline>
          {story().type.H1({
            children:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n Nihil ea libero itaque sunt corrupti, nulla asperiores nesciunt distinctio sint ad harum quia minus soluta eveniet eius vero ducimus? Eum, quae? orem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ea libero itaque sunt corrupti, nulla asperiores nesciunt distinctio sint ad harum quia minus soluta eveniet eius vero ducimus? Eum, quae? \n\n orem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ea libero itaque sunt corrupti, nulla asperiores nesciunt distinctio sint ad harum quia minus soluta eveniet eius vero ducimus? Eum, quae? \n orem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ea libero itaque sunt corrupti, nulla asperiores nesciunt distinctio sint ad harum quia minus soluta eveniet eius vero ducimus? Eum, quae? orem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ea libero itaque sunt corrupti, nulla asperiores nesciunt distinctio sint ad harum quia minus soluta eveniet eius vero ducimus? Eum, quae? orem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ea libero itaque sunt corrupti, nulla asperiores nesciunt distinctio sint ad harum quia minus soluta eveniet eius vero ducimus? Eum, quae? orem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ea libero itaque sunt corrupti, nulla asperiores nesciunt distinctio sint ad harum quia minus soluta eveniet eius vero ducimus? Eum, quae? orem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ea libero itaque sunt corrupti, nulla asperiores nesciunt distinctio sint ad harum quia minus soluta eveniet eius vero ducimus? Eum, quae?",
          })}
        </>
      );
    },
  ],
};

export const H2: Story = {
  name: "H2",
  decorators: [
    (story) => {
      return story().type.H2({
        children: "Lorem ipsum dolor sit",
      });
    },
  ],
};

export const H3: Story = {
  name: "H3",
  decorators: [
    (story) => {
      return story().type.H3({
        children: "Lorem ipsum dolor sit",
      });
    },
  ],
};
export const H4: Story = {
  name: "H4",
  decorators: [
    (story) => {
      return story().type.H4({
        children: "Lorem ipsum dolor sit",
      });
    },
  ],
};
