"use client";

import classNames from "classnames/bind";
import Text from "./text";
import { TextProps } from "./text/_text";
import Style from "./text/_text.module.scss";

interface HeadingProps extends TextProps {
  emphasize?: boolean;
  headline?: string[] | null | string;
}

const style = classNames.bind(Style);

const Heading = ({
  children,
  headline = null,
  emphasize,
  bold,
  isTitle = true,
  size = "h1",
}: HeadingProps) => {
  return (
    <>
      {headline && (
        <Text
          size="default"
          color="secondary"
          dim={true}
          bold={true}
          hasHeadline={true}
        >
          {headline}
        </Text>
      )}
      <Text
        color={"primary"}
        hasHeadline={true}
        size={size}
        bold={bold}
        isTitle={isTitle}
        emphasize={emphasize}
      >
        {children}
      </Text>
    </>
  );
};

const H1 = ({ children, headline }: HeadingProps) => {
  return (
    <>
      {headline && (
        <Text
          size="default"
          color="secondary"
          dim={true}
          bold={true}
          hasHeadline={true}
        >
          {headline}
        </Text>
      )}
      <h1
        className={style(
          "primary",
          "h1",
          "bold",
          "hasHeadline",
          "title",
          "emphasize"
        )}
      >
        {children}
      </h1>
    </>
  );
};

const H0 = ({ children }: { children: string[] | string }) => {
  return (
    <Heading color={"gray"} size={"h0"}>
      {children}
    </Heading>
  );
};

const H2 = ({ children }: { children: string[] | string }) => {
  return <h3 className={style("title", "gray", "h2")}>{children}</h3>;
};

const H3 = ({ children }: { children: string[] | string }) => {
  return <h3 className={style("title", "bold", "gray", "h3")}>{children}</h3>;
};

const H4 = ({ children }: { children: string[] | string }) => {
  return <h4 className={style("title", "bold", "secondary")}>{children}</h4>;
};

Heading.H0 = H0;
Heading.H1 = H1;
Heading.H2 = H2;
Heading.H3 = H3;
Heading.H4 = H4;

export default Heading;
