'use client';

import { Container } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';

import { ContinentKeys } from 'hooks/useCountries';
import useFunnel from 'hooks/useFunnel';
import DurationFunnel from './_components/Duration/Duration';
import { LocationFunnel } from './_components/Location/LocationFunnel';
import Style from './trip-planner.module.scss';

const cx = classNames.bind(Style);

const TripPlanner = () => {
  const funnel = useFunnel<{
    LOCATION: { continent?: ContinentKeys; country?: string; city?: string; duration?: string };
    DURATION: { continent: ContinentKeys; country: string; city: string; duration: string };
  }>({
    id: 'trip-plan',
    initial: {
      step: 'LOCATION',
      context: {},
    },
  });

  return (
    <Container margin="none" className={cx('background')}>
      <funnel.Render
        LOCATION={({ context, history }) => (
          <LocationFunnel
            country={context.country}
            onNext={location => history.push('DURATION', { country: location })}
          />
        )}
        DURATION={({ context }) => (
          <div>
            <h1>Result</h1>
            <p> {context.continent}</p>
            <p> {context.country}</p>
            <p> {context.city}</p>

            <DurationFunnel />
          </div>
        )}
      />
    </Container>
  );
};

export default TripPlanner;
