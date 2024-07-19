import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "./text";

const meta: Meta<typeof Text> = {
  title: "tripie-ui/Text",
  component: Text,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Text를 표현할때 사용하는 뷰 컴포넌트입니다.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
  args: {
    children: "텍스트",
  },
};

export const Custom: Story = {
  name: "custom",
  args: {
    //   bold: true,
    //   color: "my-color",
    //   size: 20,
    children: "텍스트",
  },
};

export const StrikeThrough: Story = {
  name: "strike-through",
  args: {
    // strikethrough: true,
    // bold: true,
    // color: "my-color",
    // size: 20,
    children: "텍스트",
  },
};

export const MaxLines: Story = {
  args: {
    // maxLines: 2,

    children: (
      <>
        각급 선거관리위원회는 선거인명부의 작성등 선거사무와 국민투표사무에
        관하여 관계 행정기관에 필요한 지시를 할 수 있다. 모든 국민의 재산권은
        보장된다. 그 내용과 한계는 법률로 정한다. 국회의원은 현행범인인 경우를
        제외하고는 회기중 국회의 동의없이 체포 또는 구금되지 아니한다. 대법원과
        각급법원의 조직은 법률로 정한다. 대한민국의 경제질서는 개인과 기업의
        경제상의 자유와 창의를 존중함을 기본으로 한다.
      </>
    ),
  },
};
