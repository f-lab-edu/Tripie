"use client";

import { useAppTheme } from "@tripie/hooks";
import classNames from "classnames";
import { HTMLProps, ReactNode } from "react";
import "./_body.scss";

export interface BodyProps extends HTMLProps<BodyProps> {
  children: ReactNode;
}

const Body = ({ children, className, ...props }: BodyProps) => {
  const { mode } = useAppTheme();

  return <div className={classNames(className, "body", mode)}>{children}</div>;
};
export default Body;
