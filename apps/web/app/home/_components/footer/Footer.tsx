'use client';
import {
  Container,
  Divider,
  Headings,
  List,
  NoStyleButton,
  TextUnderLineAnimation,
} from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import { LANDING_SECTION } from 'constants/routes';
import { useRouter } from 'next/navigation';

import Style from './footer.module.scss';

const cx = classNames.bind(Style);

export default function Footer() {
  const router = useRouter();
  return (
    <footer className={cx('footer-wrap')}>
      <Container margin="m" applyMargin="left-right-bottom">
        <Container applyMargin="bottom" margin="sm" align="left">
          <TextUnderLineAnimation>
            <Headings.H3>
              mail <span className={cx('accented')}>@</span>tripie.com
            </Headings.H3>
          </TextUnderLineAnimation>
        </Container>
        <Divider />
        <List>
          <li>
            <Headings.H3>© 2024</Headings.H3>
          </li>
          <li>
            <Headings.H3>mail@tripie-pyotato.com</Headings.H3>
          </li>
        </List>
        <Divider />
        <List>
          {LANDING_SECTION.map(({ label, href }) => (
            <li key={href}>
              <NoStyleButton action={() => router.push(href)}>
                <TextUnderLineAnimation>{label}</TextUnderLineAnimation>
              </NoStyleButton>
            </li>
          ))}
        </List>
      </Container>
    </footer>
  );
}
