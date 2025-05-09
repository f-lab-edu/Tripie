import { Divider, Icon, Link } from '@tripie-pyotato/design-system/@components';
import { Container, Text } from '@tripie-pyotato/design-system/@core';
import { ReactNode } from 'react';

const Contact = ({
  sectionName,
  content: { link, child },
}: {
  sectionName: string;
  content: { link: string; child: ReactNode };
}) => {
  return (
    <Container padding="sm" applyPadding="top-bottom" margin="none">
      <Text size="tiny">{sectionName}</Text>
      <Container applyMargin="bottom">
        <Container margin="none" justifyContent="flex-start" alignItems="start">
          <Text size="h2" isButtonText={true}>
            <Link href={link}>{child}</Link>
          </Text>
          <Icon sizes={'large'} />
        </Container>
      </Container>
      <Divider />
    </Container>
  );
};
export default Contact;
