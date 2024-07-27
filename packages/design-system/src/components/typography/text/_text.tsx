"use client";

import classNames from "classnames/bind";
import Style from "./_text.module.scss";

const style = classNames.bind(Style);

export interface TextProps {
  children: string[] | string;
  dim?: boolean;
  size?:
    | "default"
    | "h0"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "text"
    | "small"
    | "tiny";
  color?: "primary" | "secondary" | "danger" | "warning" | "gray" | "emphasize";
  bold?: boolean;
  multiLine?: boolean;
}

const Text = ({
  children,
  dim = false,
  color = "primary",
  size = "text",
  bold = false,
  multiLine = true,
}: TextProps) => {
  console.log(children);
  return (
    <div
      className={style(
        "text",
        size,
        color,
        dim && "dim",
        bold ? "bold" : null,
        multiLine === false && "oneLine"
      )}
    >
      {`${children}`}
    </div>
  );
};

const Paragraph = ({ children }: { children: string[] | string }) => {
  return <p className={style("text", "full")}>{`${children}`}</p>;
};

Text.Paragraph = Paragraph;

export default Text;
