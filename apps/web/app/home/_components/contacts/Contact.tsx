'use client';

import { Container, Divider, Headings, Icon, Text } from '@tripie-pyotato/design-system';
import Link from 'next/link';
import { ReactNode } from 'react';
import classNames from 'wrapper';
import Style from './contacts.module.scss';

const cx = classNames.bind(Style);

const Contact = ({
  sectionName,
  content: { link, child },
}: {
  sectionName: string;
  content: { link: string; child: ReactNode };
}) => {
  return (
    <Container margin="none">
      <Container margin="none">
        <Text size="tiny">{sectionName}</Text>
        <Container applyMargin="bottom">
          <Container margin="none" align="left" className={cx('flex')}>
            <Headings.H2>
              <Link href={link}>{child}</Link>
            </Headings.H2>
            <Icon sizes={'large'} />
          </Container>
        </Container>
        <Divider />
      </Container>
    </Container>
  );
};
export default Contact;
