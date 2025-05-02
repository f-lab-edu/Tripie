'use client';
import { Text } from '@tripie-pyotato/design-system/@core';
import Title from './Title';

const RegionTitle = ({ city, regionId }: { regionId?: string; city?: string | null }) => {
  return (
    <Title>
      도시 별 <Text.Accented>여행</Text.Accented> 정보
      {regionId == null ? (
        ''
      ) : (
        <>
          {`\n > `} <Text.Accented>{regionId}</Text.Accented>
        </>
      )}
      {city == null ? (
        ''
      ) : (
        <>
          {` > `}
          <Text.Accented>{city}</Text.Accented>
        </>
      )}
    </Title>
  );
};

export default RegionTitle;
