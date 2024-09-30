'use client';

import { Container } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import { CONTINENTS } from 'constants/continents';

import { ContinentKeys } from 'hooks/useCountries';
import useFunnel from 'hooks/useFunnel';
import { ContinentStep } from './_components/Continents/Continents';
import { Countries } from './_components/Countries/Countries';
import Style from './trip-planner.module.scss';

const cx = classNames.bind(Style);

const Chat = () => {
  const funnel = useFunnel<{
    CONTINENT: { continent?: ContinentKeys; country?: string; city?: string };
    COUNTRY: { continent: ContinentKeys; country?: string; city?: string };
    CITY: { continent: ContinentKeys; country: string; city?: string };
    C: { continent: ContinentKeys; country: string; city: string };
  }>({
    id: 'main-funnel',
    initial: {
      step: 'CONTINENT',
      context: {},
    },
  });

  return (
    <Container margin="none" className={cx('background')}>
      <funnel.Render
        CONTINENT={({ context, history }) => (
          <ContinentStep
            context={funnel}
            continent={context.continent}
            onNext={(selected: keyof typeof CONTINENTS) => history.push('COUNTRY', { continent: selected })}
          />
        )}
        COUNTRY={({ context, history }) => (
          <Countries
            onNext={(selected: string) => history.push('CITY', { country: selected })}
            continent={context.continent}
          />
        )}
        CITY={({ context, history }) => (
          <div>
            <h1>City</h1>
            <p>country: {context.country}</p>
            <button onClick={() => history.push('C', { city: 'city' })}>next</button>
          </div>
        )}
        C={({ context }) => (
          <div>
            <h1>Result</h1>
            <p>country: {context.country}</p>
            <p>city: {context.city}</p>
          </div>
        )}
      />
    </Container>
  );
};

export default Chat;
