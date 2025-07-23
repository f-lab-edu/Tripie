import { useQueryClient } from '@tanstack/react-query';
import { classNames } from '@tripie-pyotato/design-system/@wrappers';

import { AnimatedText, Icon, NavigationButton } from '@tripie-pyotato/design-system/@components';
import { Container, Text } from '@tripie-pyotato/design-system/@core';
import { FunnelProps, FunnelSteps } from 'app/trip-planner/page';
import API from 'constants/api-routes';
import useContinentl from 'hooks/query/useContinentl';
import useCountries from 'hooks/query/useCountries';
import { ContinentKeys } from 'models/Continent';
import { Country } from 'models/Country';
import { useState } from 'react';
import Layout from '../Layout/Layout';
import Style from './countries.module.scss';
import { CountryList } from './CountryList';
import CountryDetail from './CountyDetail';

const cx = classNames.bind(Style);

export default function CountryStep({
  context,
  onNext,
  onPrev,
  progress,
}: FunnelProps & {
  context: FunnelSteps['COUNTRY'];
  onNext: (country: {
    continent?: ContinentKeys;
    country?: string;
    city?: { all: string[]; selected: string[] };
    duration?: string;
  }) => void;
  onPrev: (country: { country: string }) => void;
}) {
  const { data, isLoading } = useCountries(context.continent ?? 'all');
  const queryClient = useQueryClient();
  const [selectedCountry, setSelectedCountry] = useState(() => context?.country ?? '');

  // 국가 내의 도시/시 정보 가져오기
  const getCitys = (country: string) => {
    return queryClient.ensureQueryData({
      queryKey: useContinentl.queryKey(country),
      queryFn: async () => {
        const data = await fetch(`${API.BASE_URL}/api/continentl?country=${country}`).then(res => res.json());
        console.log('data', data);
        return data;
      },
    });
  };

  const onNextAction = async () => {
    const states = await getCitys(selectedCountry);
    if (states != null) {
      onNext({ country: selectedCountry, city: { all: states?.[0]?.states, selected: [] } });
    }
  };

  if (!isLoading && data == null) {
    return <>data is null..</>;
  }

  return (
    <Layout
      navigateIcon={
        <NavigationButton
          sizes={'large'}
          onTapStart={() => {
            onPrev({ country: selectedCountry });
          }}
        />
      }
      heading={
        <>
          떠나고 싶은 <Text.Accented noGapUnderText={true}>나라</Text.Accented>는? {progress}
        </>
      }
      listItems={
        isLoading ? (
          <AnimatedText.Jump>로딩 중...</AnimatedText.Jump>
        ) : (
          <CountryList countries={data} setSelectedCountry={setSelectedCountry} selectedCountry={selectedCountry} />
        )
      }
      disabled={selectedCountry === ''}
      submitButtonChildren={
        <>
          {selectedCountry === '' ? (
            <>여행할 나라를 선택해주세요.</>
          ) : (
            <>
              "{selectedCountry}"로 보기 <Icon />
            </>
          )}
        </>
      }
      clickAction={onNextAction}
    >
      <Container margin="none" className={cx('map-wrap')}>
        {isLoading ? (
          <AnimatedText.Jump>로딩 중...</AnimatedText.Jump>
        ) : (
          <CountryDetail
            selectedCountry={
              selectedCountry === '' || !data.some((country: Country) => country.name === selectedCountry)
                ? data[0]?.name // 선택한 나라가 없을 경우
                : selectedCountry
            }
          />
        )}
      </Container>
    </Layout>
  );
}
