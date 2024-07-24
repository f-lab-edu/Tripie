import type { Meta, StoryObj } from "@storybook/react";
import { useAppTheme } from "@tripie/hooks";
import { useEffect } from "react";
import Body from "./_body";

const meta: Meta<typeof Body> = {
  title: "tripie-ui/Body",
  tags: ["autodocs"],
  component: Body,

  decorators: [
    (story, context) => {
      const { mode, setMode, setControl } = useAppTheme();
      const selectedTheme = context.globals.theme || mode;

      useEffect(() => {
        setMode(selectedTheme);
        setControl("user");
      }, [selectedTheme]);

      return <div className={`${context.globals.theme}`}>body component</div>;
    },
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  args: {
    children: "default theme",
    style: {
      width: "100%",
    },
  },
};
