"use client";

import classNames from "classnames/bind";
import Style from "./_text.module.scss";

const style = classNames.bind(Style);

export interface TextProps {
  children: string[] | string;
  preLine?: boolean;
  dim?: boolean;
  isTitle?: boolean;
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
  color?: "primary" | "secondary" | "danger" | "warning" | "gray";
  hasHeadline?: boolean;
  emphasize?: boolean;
  bold?: boolean;
}

const Text = ({
  children,
  preLine = true,
  dim = false,
  color = "primary",
  isTitle = false,
  size = "text",
  emphasize = false,
  bold = false,
  hasHeadline = false,
}: TextProps) => {
  return (
    <p
      className={style(
        size,
        color,
        isTitle ? "title" : "text",
        preLine ?? "full",
        dim && "dim",
        bold ? "bold" : null,
        emphasize && "emphasize",
        hasHeadline && "has-headline"
      )}
    >
      {children}
    </p>
  );
};

const Paragraph = ({ children }: { children: string[] | string }) => {
  return <p className={style("text", "full")}>{children}</p>;
};

Text.Paragraph = Paragraph;

export default Text;
