'use client';

import { TripieContainer } from '@tripie-pyotato/design-system';
import RESOURCE from 'constants/resources';
import Icon from 'shared/components/Icon/Icon';

const Navigation = () => {
  return (
    <TripieContainer margin="none">
      <Icon.Navigate src={RESOURCE.ARROW} />
    </TripieContainer>
  );
};

export default Navigation;
