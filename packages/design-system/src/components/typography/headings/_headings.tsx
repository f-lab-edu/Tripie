"use client";

import classNames from "classnames/bind";
import Text, { TextProps } from "../text/_text";
import Style from "../text/_text.module.scss";

interface HeadingProps extends TextProps {
  emphasize?: boolean;
}

const style = classNames.bind(Style);

const Heading = ({ children, className }: HeadingProps) => (
  <Text className={style("default")}>{children}</Text>
);

const H1 = ({ children, emphasize }: HeadingProps) => {
  return <h1 className={style(emphasize ?? "emphasize")}>{children}</h1>;
};

const H2 = ({ children }: { children: string[] | string }) => {
  return <h2 className={style("gray", "h2")}>{children}</h2>;
};

const H3 = ({ children }: { children: string[] | string }) => {
  return <h3 className={style("gray", "h2", "bold")}>{children}</h3>;
};

const H4 = ({ children }: { children: string[] | string }) => {
  return <h4 className={style("secondary", "bold", "h4")}>{children}</h4>;
};

Heading.H1 = H1;
Heading.H2 = H2;
Heading.H3 = H3;
Heading.H4 = H4;

export default Heading;
