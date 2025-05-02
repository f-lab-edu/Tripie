'use client';
import { Divider, TextUnderLineAnimation } from '@tripie-pyotato/design-system/@components';
import { Container, Headings, List, Text } from '@tripie-pyotato/design-system/@core';
import { LANDING_SECTION } from 'constants/routes';
import { useRouter } from 'next/navigation';

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
    <footer>
      <Container margin="m" applyMargin="left-right-bottom" applyPadding="bottom" padding="m">
        <Container applyMargin="bottom" margin="sm" alignItems="start">
          <TextUnderLineAnimation>
            <Headings.H3>
              mail <Text.Accented>@</Text.Accented>tripie.com
            </Headings.H3>
          </TextUnderLineAnimation>
        </Container>
        <Divider />
        <List view="column" gap="l">
          {footerItems.map(({ label, content }) => (
            <List.Item key={label}>
              <Headings.H3>{content}</Headings.H3>
            </List.Item>
          ))}
        </List>
        <Divider />
        <List view="column" gap="l">
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
