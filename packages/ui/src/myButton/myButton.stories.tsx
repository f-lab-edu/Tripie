import type { Meta, StoryObj } from "@storybook/react";
import MyButton from "./myButton";

const meta: Meta<typeof MyButton> = {
  title: "Example/MyButton",
  component: MyButton,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["button", "submit", "reset"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: "Button",
  args: {
    appName: "Button",
    children: "I am a primary button.",
    type: "button",
    style: {
      // color: "blue",
      // border: "1px solid gray",
      // padding: 10,
      // borderRadius: 10,
    },
  },
};
