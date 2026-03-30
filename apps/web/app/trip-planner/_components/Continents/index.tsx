import { CONTINENTS } from 'constants/continents';

import { ContinentKeys } from 'models/Continent';
import { useMemo, useRef, useState } from 'react';

import { useInView } from '@tripie-pyotato/design-system/@wrappers';
import { FunnelProps, FunnelSteps } from 'app/trip-planner/page';

import { Container } from '@tripie-pyotato/design-system/@core';
import TripieGlobe from 'shared/components/TripieGlobe';
import TripieIcon from 'shared/components/TripieIcon/TripieIcon';
import Layout from '../Layout/Layout';
import { ContinentList } from './ContinentLIst';

export default function ContinentStep({
  context,
  onNext,
  progress,
}: Readonly<{
  context: FunnelSteps['CONTINENT'];
  continent: ContinentKeys;
  onNext: (country: { continent?: ContinentKeys }) => void;
}> &
  Omit<FunnelProps, 'onPrev'>) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0 });
  const [selectedContinent, setSelectedContinent] = useState<ContinentKeys | 'ALL'>(() =>
    context?.continent == null
      ? 'ALL'
      : Object.values(CONTINENTS).reduce((acc, continent, index) => {
          if (continent.id === context?.continent) return Object.keys(CONTINENTS)[index] as ContinentKeys;
          return acc;
        }, 'ALL' as ContinentKeys)
  );

  const selectedContinentName = useMemo(() => {
    const continentName = Object.keys(CONTINENTS).find(continent => continent === selectedContinent);
    return CONTINENTS[continentName as ContinentKeys];
  }, [selectedContinent]);

  return (
    <Layout
      heading={{ text: '지역', particle: '은' }}
      progress={progress}
      listItems={<ContinentList selectedContinent={selectedContinent} action={setSelectedContinent} />}
      submitButtonChildren={
        <>
          "{selectedContinentName?.name}"{selectedContinentName?.name === '유럽' ? '으' : null}로 보기 <TripieIcon />
        </>
      }
      clickAction={() => onNext({ continent: CONTINENTS[selectedContinent]['id'] as ContinentKeys })}
    >
      <Container
        margin={'l'}
        applyMargin="bottom"
        padding="none"
        ref={ref}
        dimension={[
          {
            apply: 'w',
            size: 300,
            unit: 'pixel',
          },
          {
            apply: 'h',
            size: 250,
            unit: 'pixel',
          },
        ]}
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
      >
        {inView ? <TripieGlobe /> : <></>}
      </Container>
    </Layout>
  );
}
