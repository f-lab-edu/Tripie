import classNames from "classnames/bind";
import { PropsWithChildren } from "react";
import Style from "./_layout.module.scss";

export interface LayoutProps extends PropsWithChildren {
  className?: string;
  align?: "left" | "center" | "right";
}

const style = classNames.bind(Style);

const Layout = ({
  children,
  className,
  align = "left",
  ...props
}: LayoutProps) => {
  return (
    <div
      className={style([
        "layout",
        className,
        align == "left" ? "" : style(align),
      ])}
      {...props}
    >
      <div>{children}</div>
    </div>
  );
};

const LayoutCenter = (props: LayoutProps) => (
  <Layout {...props} align="center" />
);
const LayoutRight = (props: LayoutProps) => <Layout {...props} align="right" />;

Layout.Center = LayoutCenter;
Layout.Right = LayoutRight;

export default Layout;
