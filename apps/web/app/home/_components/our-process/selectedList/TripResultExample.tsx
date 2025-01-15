'use client';
import { Container } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import Style from './all-info.module.scss';

import AwsMap from 'app/trip-planner/_components/Chat/AwsMap';
import ChatTab from 'app/trip-planner/_components/Chat/Tab';
import { AI_PLAN } from './constants/selected';

const cx = classNames.bind(Style);

const TripResultExample = () => {
  return (
    <Container margin="none" className={cx('map-wrap')}>
      <ChatTab data={AI_PLAN.plans} scrollIntoView={false} />
      <AwsMap
        interactive={false}
        style={{ width: '100%' }}
        places={AI_PLAN.places}
        plans={AI_PLAN.plans}
        locations={AI_PLAN.locations}
        initialViewState={{ zoom: 8 }}
        focusAfterOpen={false}
      />
    </Container>
  );
};
export default TripResultExample;
