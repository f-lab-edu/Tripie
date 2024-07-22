import type { Meta, StoryObj } from "@storybook/react";
import { useAppTheme } from "@tripie/hooks";
import { useEffect } from "react";
import Body from "./_body";

const meta: Meta<typeof Body> = {
  title: "tripie-ui/Body",
  tags: ["autodocs"],
  component: Body,
  argTypes: { style: { height: "30rem" } },
  decorators: [
    (story, context) => {
      const { mode, setMode } = useAppTheme();
      const selectedTheme = context.globals.theme || mode;

      useEffect(() => {
        setMode(selectedTheme);
      }, [selectedTheme]);

      return (
        <div className={`${mode} ${context.args.className}`}>
          body component
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
    children: "default theme",
    style: {
      width: "100%",
    },
  },
};
