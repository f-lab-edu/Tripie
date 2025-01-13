'use client';

import { Container } from '@tripie-pyotato/design-system';
import RESOURCE from 'constants/resources';
import Icon from 'shared/components/Icon/Icon';

const Navigation = () => {
  return (
    <Container margin="none">
      <Icon.Navigate src={RESOURCE.ARROW} />
    </Container>
  );
};

export default Navigation;
