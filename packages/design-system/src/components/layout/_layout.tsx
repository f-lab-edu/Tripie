import classNames from "classnames/bind";
import { PropsWithChildren } from "react";
import Style from "./_layout.module.scss";

interface LayoutProps extends PropsWithChildren {
  className?: string;
  align?: "center" | "right";
}

const style = classNames.bind(Style);

const Layout = ({ children, className, align, ...props }: LayoutProps) => {
  return (
    <div
      className={style(["layout", className, align ? style(align) : ""])}
      {...props}
    >
      {children}
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
