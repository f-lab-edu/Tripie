"use client";

import classNames from "classnames/bind";
import Text from "./text";
import { TextProps } from "./text/_text";
import Style from "./text/_text.module.scss";

interface HeadingProps extends TextProps {
  emphasize?: boolean;
}

const style = classNames.bind(Style);

const Heading = ({
  children,
  emphasize,
  bold,
  size = "h1",
  multiLine,
}: HeadingProps) => {
  return (
    <Text
      color={emphasize ? "emphasize" : "primary"}
      size={size}
      bold={bold}
      multiLine={multiLine}
    >
      {children}
    </Text>
  );
};

const Headline = ({ children }: HeadingProps) => {
  return (
    <Text size="default" color="secondary" dim={true} bold={true}>
      {children}
    </Text>
  );
};

const H1 = ({ children, emphasize }: HeadingProps) => {
  return (
    <Heading
      color={emphasize ? "emphasize" : "primary"}
      size="h1"
      multiLine={false}
    >
      {children}
    </Heading>
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
  return (
    <Heading size="h2" color="gray">
      {children}
    </Heading>
  );
};

const H3 = ({ children }: { children: string[] | string }) => {
  return (
    <Heading bold={true} color={"gray"} size="h3">
      {children}
    </Heading>
  );
};

const H4 = ({ children }: { children: string[] | string }) => {
  return (
    <Heading color={"secondary"} bold={true} size="h4">
      {children}
    </Heading>
  );
};

Heading.Headline = Headline;
Heading.H0 = H0;
Heading.H1 = H1;
Heading.H2 = H2;
Heading.H3 = H3;
Heading.H4 = H4;

export default Heading;
