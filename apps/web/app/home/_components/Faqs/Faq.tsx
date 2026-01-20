'use client';

import Accordion from '@tripie-pyotato/design-system/@components/Accordion';
import Container from '@tripie-pyotato/design-system/@core/Container';
import Text from '@tripie-pyotato/design-system/@core/Text';
import API from 'constants/api-routes';

const FaqItem = ({ tag, header, details }: { tag: string; header: string; details: string }) => {
  return (
    <Container key={tag} applyMargin="top-bottom" padding="sm" applyPadding="bottom">
      <Accordion>
        <Accordion.Header>
          <Container justifyContent="start" margin="none" gap="sm">
            <Accordion.Icon cloudinaryUrl={API.MEDIA_URL} />
            {header}
          </Container>
        </Accordion.Header>
        <Accordion.Divider />
        <Accordion.Body padding={'sm'} applyPadding="top-bottom">
          <Container margin="l" applyMargin="top">
            <Text preserveWhiteSpace={'xl'}>{details}</Text>
          </Container>
        </Accordion.Body>
      </Accordion>
    </Container>
  );
};

export default FaqItem;
