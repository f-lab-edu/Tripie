import type { Meta, StoryObj } from "@storybook/react";
import { useEffect } from "react";
import { useAppTheme } from "../../../hooks";

import Video from "./_video";

const meta: Meta<typeof Video> = {
  title: "tripie-ui/Video",
  component: Video,
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
    src: "https://media.triple.guide/triple-cms/video/upload/c_limit,h_1024,w_1024/75f93e5d-0737-4f75-83a0-942f60e6d33e.mp4",
    fallback:
      "https://media.triple.guide/triple-cms/video/upload/c_limit,f_auto,h_1024,w_1024/75f93e5d-0737-4f75-83a0-942f60e6d33e.jpeg",
  },
};

export const Skeleton: Story = {
  name: "Skeleton",
  decorators: [
    (story) => {
      return story().type.Skeleton({});
    },
  ],
};
