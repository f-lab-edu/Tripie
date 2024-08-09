import classNames from "classnames/bind";
import { ReactNode } from "react";
import { useDrawer } from "../../hooks";
import Container from "../container";
import MyButton from "../myButton";
import Style from "./_drawer.module.scss";

export type DrawerProps = {
  children?: ReactNode;
  overlay?: boolean;
} & Omit<React.ComponentProps<"div">, "children">;

const style = classNames.bind(Style);

const Drawer = ({ children, overlay = true }: DrawerProps) => {
  const { isOpen, toggle, close } = useDrawer();

  return (
    <>
      <MyButton onClick={toggle}>Open</MyButton>
      {overlay ? (
        <div
          className={style(isOpen ? "is-open" : null)}
          onClick={() => close()}
        />
      ) : null}

      <aside className={style("drawer-menu", !isOpen && "is-closed")}>
        <nav className={style("menu")}>
          <Container className={style("menu-item")}>
            <Container align="right" margin="none">
              <MyButton onClick={() => close()}>Close</MyButton>
              {/* !! 아이콘으로 변경하기 */}
            </Container>
            {children}
          </Container>
        </nav>
      </aside>
    </>
  );
};

export default Drawer;
