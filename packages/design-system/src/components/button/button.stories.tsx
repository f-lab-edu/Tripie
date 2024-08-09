import type { Meta, StoryObj } from "@storybook/react";
import { useEffect } from "react";
import { useAppTheme } from "../../hooks";
import Button from "./button";

const meta: Meta<typeof Button> = {
  title: "tripie-ui/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["button", "submit", "reset"],
    },
  },
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
  name: "Button",
  args: {
    children: "Default",
    type: "button",
    size: "m",
  },
};

export const XL: Story = {
  name: "XlButton",
  args: {
    children: "Xlarge button",
    type: "button",
    size: "xl",
  },
};

export const L: Story = {
  name: "LButton",
  args: {
    children: "large button",
    type: "button",
    size: "l",
  },
};

export const M: Story = {
  name: "MButton",
  args: {
    children: "medium",
    type: "button",
    size: "m",
  },
};
export const Sm: Story = {
  name: "SmButton",
  args: {
    children: "small",
    type: "button",
    size: "sm",
  },
};

export const Xsm: Story = {
  name: "XsmButton",
  args: {
    children: "xs",
    type: "button",
    size: "xsm",
  },
};

export const Icon: Story = {
  name: "Icon",
  decorators: [
    (story) => {
      return story().type.ToolTip({
        iconOnClick:
          "M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z",
        icon: "M2.43.265c-.3 0-.548.236-.573.53h-.328a.74.74 0 0 0-.735.734v3.822a.74.74 0 0 0 .735.734H4.82a.74.74 0 0 0 .735-.734V1.529a.74.74 0 0 0-.735-.735h-.328a.58.58 0 0 0-.573-.53zm0 .529h1.49c.032 0 .049.017.049.049v.431c0 .032-.017.049-.049.049H2.43c-.032 0-.05-.017-.05-.049V.843c0-.032.018-.05.05-.05zm-.901.53h.328c.026.292.274.528.573.528h1.49a.58.58 0 0 0 .573-.529h.328a.2.2 0 0 1 .206.206v3.822a.2.2 0 0 1-.206.205H1.53a.2.2 0 0 1-.206-.205V1.529a.2.2 0 0 1 .206-.206z",
      });
    },
  ],
};

export const ToolTipIcon: Story = {
  name: "TooltipIcon",
  decorators: [
    (story) => {
      return story().type.ToolTip({
        iconOnClick:
          "M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z",
        icon: "M2.43.265c-.3 0-.548.236-.573.53h-.328a.74.74 0 0 0-.735.734v3.822a.74.74 0 0 0 .735.734H4.82a.74.74 0 0 0 .735-.734V1.529a.74.74 0 0 0-.735-.735h-.328a.58.58 0 0 0-.573-.53zm0 .529h1.49c.032 0 .049.017.049.049v.431c0 .032-.017.049-.049.049H2.43c-.032 0-.05-.017-.05-.049V.843c0-.032.018-.05.05-.05zm-.901.53h.328c.026.292.274.528.573.528h1.49a.58.58 0 0 0 .573-.529h.328a.2.2 0 0 1 .206.206v3.822a.2.2 0 0 1-.206.205H1.53a.2.2 0 0 1-.206-.205V1.529a.2.2 0 0 1 .206-.206z",
        tooltipContentOnHover: "hovered!",
        tooltipContentOnClick: "clicked!",
      });
    },
  ],
};
