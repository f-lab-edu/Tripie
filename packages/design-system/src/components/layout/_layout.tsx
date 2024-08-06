import classNames from "classnames/bind";
import { PropsWithChildren } from "react";
import Style from "./_layout.module.scss";

interface LayoutProps extends PropsWithChildren {
  className?: string;
}

const style = classNames.bind(Style);

const Layout = ({ children, className, ...props }: LayoutProps) => {
  return (
    <div className={style(["layout", className])} {...props}>
      {children}
    </div>
  );
};

const LayoutCenter = ({ children, className, ...props }: LayoutProps) => {
  return (
    <div className={style(["layout", className, "center"])} {...props}>
      {children}
    </div>
  );
};

const LayoutRight = ({ children, className, ...props }: LayoutProps) => {
  return (
    <div className={style(["layout", className, "right"])} {...props}>
      {children}
    </div>
  );
};

Layout.Center = LayoutCenter;
Layout.Right = LayoutRight;

export default Layout;
