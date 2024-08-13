import type { Meta, StoryObj } from "@storybook/react";
import { useEffect } from "react";
import { useAppTheme } from "../../hooks";
import Drawer from "./_drawer";

const meta: Meta<typeof Drawer> = {
  title: "tripie-ui/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  decorators: [
    (Story, context) => {
      const { mode, setMode } = useAppTheme();
      const selectedTheme = context.globals.theme || mode;

      useEffect(() => {
        setMode(selectedTheme);
      }, [selectedTheme]);

      return (
        <div className={`${context.globals.theme}`}>
          <Story />
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
    isOpen: false,
  },
};

export const NoOverLayDrawer: Story = {
  name: "No OverLay",
  args: {
    children: "Drawer No OverLay",
    overlay: false,
  },
};

export const NoCloseButtonDrawer: Story = {
  name: "No Close Button",
  args: {
    children: "Drawer No Close Button",
    withCloseButton: false,
  },
};
