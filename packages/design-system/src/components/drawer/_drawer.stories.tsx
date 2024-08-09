import type { Meta, StoryObj } from "@storybook/react";
import { useEffect } from "react";
import { useAppTheme } from "../../hooks";
import Drawer from "./_drawer";

const meta: Meta<typeof Drawer> = {
  title: "tripie-ui/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  decorators: [
    (story, context) => {
      const { mode, setMode } = useAppTheme();
      const selectedTheme = context.globals.theme || mode;

      useEffect(() => {
        setMode(selectedTheme);
      }, [selectedTheme]);

      return (
        <div
          className={`${context.globals.theme}`}
          style={{ height: "100vh", overflow: "hidden" }}
        >
          {story()}
        </div>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  args: {
    children: "default Drawer",
  },
};

export const NoOverLayDrawer: Story = {
  name: "No OverLay",
  args: {
    children: "Drawer No OverLay",
    overlay: false,
  },
};
