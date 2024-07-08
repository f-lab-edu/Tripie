import { Button } from "@repo/ui/button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
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
      color: "blue",
      border: "1px solid gray",
      padding: 10,
      borderRadius: 10,
    },
  },
};
export const Secondary: Story = {
  name: "Pink Button",
  args: {
    appName: "Pink Button",
    children: "I am a Secondary button.",
    type: "submit",
    style: {
      color: "pink",
      border: "1px solid pink",
      padding: 10,
      backgroundColor: "#fefefe",
      borderRadius: 10,
    },
  },
};
// export const Normal: Story = {
//   name: "Normal Button",
//   args: {
//     appName: "Normal Button",
//     children: "I am a Normal button.",
//     type: "submit",
//     className:
//   },
// };
