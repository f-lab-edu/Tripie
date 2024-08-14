import type { Meta, StoryObj } from "@storybook/react";
import { useEffect } from "react";
import { useAppTheme } from "../../hooks";
import Card from "../card";
import Headings from "../typography/headings";
import Text from "../typography/text";
import Grid from "./_grid";

const meta: Meta<typeof Grid> = {
  title: "tripie-ui/Grid",
  component: Grid,
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
  name: "Default Grid",
  args: {
    children: (
      <>
        <Card.Post
          coverImage={[
            "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg",
            "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg",
            "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg",
            "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg",
            "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg",
          ]}
          userName="하나"
          href=""
        >
          <>
            <Text dim={true}>xxx님의 일정</Text>
            <Headings.H3>제목</Headings.H3>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
              suscipit, tempora iure, sed assumenda consequuntur doloremque
              culpa officia deleniti quos dolores at, ab corporis illum amet.
              Possimus unde dolores omnis! Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Saepe deleniti natus animi tempora
              ratione doloremque veniam est, ducimus provident consequuntur
              minus at reprehenderit nisi adipisci delectus minima velit maiores
              nemo?
            </Text>
          </>
        </Card.Post>
        <Card.Post
          coverImage={[
            "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg",
            "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg",
            "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg",
            "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg",
            "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg",
          ]}
          userName="하나"
          href=""
        >
          <>
            <Text dim={true}>xxx님의 일정</Text>
            <Headings.H3>제목</Headings.H3>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
              suscipit, tempora iure, sed assumenda consequuntur doloremque
              culpa officia deleniti quos dolores at, ab corporis illum amet.
              Possimus unde dolores omnis! Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Saepe deleniti natus animi tempora
              ratione doloremque veniam est, ducimus provident consequuntur
              minus at reprehenderit nisi adipisci delectus minima velit maiores
              nemo?
            </Text>
          </>
        </Card.Post>
        <Card.Post
          coverImage={[
            "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg",
            "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg",
            "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg",
            "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg",
            "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f4208212-7c76-4d0b-9872-9651faa1a735.jpeg",
          ]}
          userName="하나"
          href=""
        >
          <>
            <Text dim={true}>xxx님의 일정</Text>
            <Headings.H3>제목</Headings.H3>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
              suscipit, tempora iure, sed assumenda consequuntur doloremque
              culpa officia deleniti quos dolores at, ab corporis illum amet.
              Possimus unde dolores omnis! Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Saepe deleniti natus animi tempora
              ratione doloremque veniam est, ducimus provident consequuntur
              minus at reprehenderit nisi adipisci delectus minima velit maiores
              nemo?
            </Text>
          </>
        </Card.Post>
      </>
    ),
  },
};
