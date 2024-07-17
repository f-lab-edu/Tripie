import type { Meta, StoryObj } from "@storybook/react";
import Fonts from "./fonts";

const meta: Meta<typeof Fonts> = {
  title: "Example/Fonts",
  component: Fonts,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: "Fonts",
  args: {
    children: "시험 텍스트를 입력해 보세요.",
    style: {
      // color: "blue",
      // border: "1px solid gray",
      // padding: 10,
      // borderRadius: 10,
    },
  },
};
