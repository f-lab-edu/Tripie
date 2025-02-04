'use client';
import { Container, Divider, List, TextUnderLineAnimation } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import { LANDING_SECTION } from 'constants/routes';
import { useRouter } from 'next/navigation';

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
          <li>mail@tripie-pyotato.com</li>
        </List>
        <Divider />
        <List>
          {LANDING_SECTION.map(({ label, href }) => (
            <li key={href}>
              <button onClick={() => router.push(href)} className={cx('button')}>
                <TextUnderLineAnimation className={cx('list-item')}>{label}</TextUnderLineAnimation>
              </button>
            </li>
          ))}
        </List>
      </Container>
    </footer>
  );
}
