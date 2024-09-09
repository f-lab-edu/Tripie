'use client';
import { Container } from '@tripie/design-system';
import classNames from 'classnames/bind';
import ROUTES from 'constants/routes';
import { useRouter } from 'next/navigation';
import Divider from 'shared/components/Divider/Divider';
import List from 'shared/components/List/List';
import TextUnderLineAnimation from 'shared/components/TextUnderlineAnimation/TextUnderlineAnimation';
import Style from './footer.module.scss';

const cx = classNames.bind(Style);

export default function Footer() {
  const router = useRouter();
  return (
    <footer className={cx('footer')}>
      <Container margin="m" applyMargin="left-right">
        <Container margin="none" className={cx('wrap')}>
          <TextUnderLineAnimation>
            mail<span className={cx('accented')}>@</span>tripie.com
          </TextUnderLineAnimation>
          <Divider />
        </Container>
        <List>
          <li>© 2024</li>
          <li>mail@tripie.com</li>
        </List>
        <Divider />
        <List>
          {ROUTES.PAGE.LANDING.map(page => (
            <li onClick={() => router.push(page.href)} key={page.label}>
              <TextUnderLineAnimation className={cx('list-item')}>{page.label}</TextUnderLineAnimation>
            </li>
          ))}
        </List>
      </Container>
    </footer>
  );
}
