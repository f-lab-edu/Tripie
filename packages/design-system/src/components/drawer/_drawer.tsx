import classNames from 'classnames/bind';
import { ReactNode } from 'react';
import { useDrawerOutput } from '../../hooks';
import Button from '../button/_button';
import Container from '../container';
import Style from './_drawer.module.scss';

export type DrawerProps = {
  children?: ReactNode;
  overlay?: boolean;

  withCloseButton?: boolean;
} & Omit<React.ComponentProps<'div'>, 'children'> &
  Partial<useDrawerOutput>;

const style = classNames.bind(Style);

const Drawer = ({ children, overlay = true, withCloseButton = true, isOpen, className, close }: DrawerProps) => {
  return (
    <>
      {overlay ? <div className={style(isOpen ? 'is-open' : null)} onClick={close} /> : null}

      <aside className={style(className, 'drawer-menu', !isOpen && 'is-closed')}>
        <nav className={style('menu')}>
          <Container className={style('menu-item')} margin="none">
            {withCloseButton && close != null ? (
              <Container align="right" margin="none">
                <Button onClick={() => close()}>Close</Button>
                {/* !! 아이콘으로 변경하기 */}
              </Container>
            ) : null}
            {children}
          </Container>
        </nav>
      </aside>
    </>
  );
};

export default Drawer;
