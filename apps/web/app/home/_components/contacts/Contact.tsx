'use client';

import { Container, Divider, Headings, Icon, Link, Text } from '@tripie-pyotato/design-system/@components';
import { ReactNode } from 'react';

const Contact = ({
  sectionName,
  content: { link, child },
}: {
  sectionName: string;
  content: { link: string; child: ReactNode };
}) => {
  return (
    <>
      <Text size="tiny">{sectionName}</Text>
      <Container applyMargin="bottom">
        <Container margin="none" align="left" justifyContent="flex-start">
          <Headings.H2>
            <Link href={link}>{child}</Link>
          </Headings.H2>
          <Icon sizes={'large'} />
        </Container>
      </Container>
      <Divider />
    </>
  );
};
export default Contact;
