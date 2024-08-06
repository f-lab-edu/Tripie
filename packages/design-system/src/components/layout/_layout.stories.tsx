import type { Meta, StoryObj } from "@storybook/react";
import { useEffect } from "react";
import { useAppTheme } from "../../hooks";
import Layout from "./_layout";

const meta: Meta<typeof Layout> = {
  title: "tripie-ui/Layout",
  component: Layout,
  tags: ["autodocs"],
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
    children: "default layout",
  },
};

export const Centred: Story = {
  name: "Centred",
  decorators: [
    (story) => {
      return story().type.Center({
        children: <div>center layout</div>,
      });
    },
  ],
};

export const Right: Story = {
  name: "Right",
  decorators: [
    (story) => {
      return story().type.Right({
        children: <div>right layout</div>,
      });
    },
  ],
};
