import type { Meta, StoryObj } from "@storybook/react";
import MyButton from "./myButton";

const meta: Meta<typeof MyButton> = {
  title: "tripie-ui/MyButton",
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

export const Custom: Story = {
  name: "Button",
  args: {
    children: "button.",
    type: "button",
    style: {
      // color: "blue",
      // border: "1px solid gray",
      // padding: 10,
      // borderRadius: 10,
    },
  },
};
