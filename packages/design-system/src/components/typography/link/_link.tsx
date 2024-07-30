"use client";

import classNames from "classnames/bind";
import Link from "next/link";
import Text from "../text";
import Style from "./_link.module.scss";

const style = classNames.bind(Style);

export interface LinkProps extends React.RefAttributes<HTMLAnchorElement> {
  href: string;
  children: string;
  className?: string;
  "aria-selected"?: boolean;
}

function UnstyledLink({ children, className, href, ...props }: LinkProps) {
  return (
    <Link href={href} className={style("link", className)} {...props}>
      <Text>{children}</Text>
    </Link>
  );
}

export default UnstyledLink;
