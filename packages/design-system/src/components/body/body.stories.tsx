import type { Meta, StoryObj } from "@storybook/react";
import Body from "./body";

const meta: Meta<typeof Body> = {
  title: "tripie-ui/Body",
  tags: ["autodocs"],
  component: Body,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  args: {
    children: "default theme",
  },
};

export const Light: Story = {
  name: "Light",
  args: {
    children: "light theme",
    className: "light",
  },
};

export const Dark: Story = {
  name: "Dark",
  args: {
    children: "dark theme",
    className: "dark",
  },
};
