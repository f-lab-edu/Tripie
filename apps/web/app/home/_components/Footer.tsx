'use client';

import { TextUnderLineAnimation } from '@tripie-pyotato/design-system/@components/data-display';
import Divider from '@tripie-pyotato/design-system/@components/Divider';
import { List } from '@tripie-pyotato/design-system/@core';
// import TextUnderLineAnimation from '@tripie-pyotato/design-system/@components/TextUnderlineAnimation';
import Container from '@tripie-pyotato/design-system/@core/Container';
import Headings from '@tripie-pyotato/design-system/@core/Headings';
// import {List} from '@tripie-pyotato/design-system/@core/List';
import Text from '@tripie-pyotato/design-system/@core/Text';

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
        <Headings.H2>
          <TextUnderLineAnimation>
            <Text noGapUnderText={true}>
              mail <Text.Accented noGapUnderText={true}>@</Text.Accented>tripie.com
            </Text>
          </TextUnderLineAnimation>
        </Headings.H2>
        <Divider />
        <List view="column" gap="l">
          {footerItems.map(({ label, content }) => (
            <List.Item key={label}>
              <Text size={'h4'} noGapUnderText={true}>
                {content}
              </Text>
            </List.Item>
          ))}
        </List>
        <Divider />
        <List view="column" gap="l">
          {LANDING_SECTION.map(({ label, href }) => (
            <List.Item key={href}>
              {label}
              <TextUnderLineAnimation onClick={() => router.push(href)}>{label}</TextUnderLineAnimation>
            </List.Item>
          ))}
        </List>
      </Container>
    </footer>
  );
}
