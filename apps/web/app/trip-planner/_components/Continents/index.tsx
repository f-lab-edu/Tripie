import { Globe } from '@tripie-pyotato/design-system/@components';
import { Text } from '@tripie-pyotato/design-system/@core';
import { CONTINENTS } from 'constants/continents';

import { ContinentKeys } from 'models/Continent';
import { useMemo, useState } from 'react';

import { FunnelProps, FunnelSteps } from 'app/trip-planner/page';
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
      heading={
        <>
          떠나고 싶은 <Text.Accented noGapUnderText>지역</Text.Accented>은? {progress}
        </>
      }
      listItems={<ContinentList selectedContinent={selectedContinent} action={setSelectedContinent} />}
      submitButtonChildren={
        <>
          "{selectedContinentName?.name}"{selectedContinentName?.name === '유럽' ? '으' : null}로 보기 <TripieIcon />
        </>
      }
      clickAction={() => onNext({ continent: CONTINENTS[selectedContinent]['id'] as ContinentKeys })}
    >
      <Globe cloudinaryUrl={'https://media.tripie-api.shop'} width={300} height={300} />
    </Layout>
  );
}
