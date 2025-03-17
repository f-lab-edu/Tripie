'use client';
import { Container, Divider, Headings, List, Text, TextUnderLineAnimation } from '@tripie-pyotato/design-system';
import { LANDING_SECTION } from 'constants/routes';
import { useRouter } from 'next/navigation';
import classNames from 'wrapper';

import Style from './footer.module.scss';

const cx = classNames.bind(Style);

const footerItems = [
  { label: 'year', content: '© 2024' },
  {
    label: 'contacts',
    content: (
      <>
        mail
        <Text.Accented>@</Text.Accented>tripie-pyotato.com
      </>
    ),
  },
];

export default function Footer() {
  const router = useRouter();
  return (
    <footer className={cx('footer-wrap')}>
      <Container margin="m" applyMargin="left-right-bottom">
        <Container applyMargin="bottom" margin="sm" align="left">
          <TextUnderLineAnimation>
            <Headings.H3>
              mail <Text.Accented>@</Text.Accented>tripie.com
            </Headings.H3>
          </TextUnderLineAnimation>
        </Container>
        <Divider />
        <List>
          {footerItems.map(({ label, content }) => (
            <List.Item key={label}>
              <Headings.H3>{content}</Headings.H3>
            </List.Item>
          ))}
        </List>
        <Divider />
        <List>
          {LANDING_SECTION.map(({ label, href }) => (
            <List.Item key={href}>
              <TextUnderLineAnimation onClick={() => router.push(href)}>{label}</TextUnderLineAnimation>
            </List.Item>
          ))}
        </List>
      </Container>
    </footer>
  );
}
