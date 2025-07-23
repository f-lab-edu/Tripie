import Divider from '@tripie-pyotato/design-system/@components/Divider';
import Icon from '@tripie-pyotato/design-system/@components/Icon';
import Link from '@tripie-pyotato/design-system/@components/Link';
import Container from '@tripie-pyotato/design-system/@core/Container';
import Text from '@tripie-pyotato/design-system/@core/Text';
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
        <Container display="inline-flex" margin="none" justifyContent="flex-start" alignItems="center">
          <Text size="h2" noGapUnderText={true}>
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
