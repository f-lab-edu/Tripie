import 'maplibre-gl/dist/maplibre-gl.css';
import 'shared/components/AwsMap/Marker/marker.scss';

import { useQueryClient } from '@tanstack/react-query';
import { AnimatedButton, Icon } from '@tripie-pyotato/design-system/@components';
import { Container, Text } from '@tripie-pyotato/design-system/@core';
import firestoreService from 'app/api/firebase';

import useContinentl from 'hooks/query/useContinentl';
import useCountries from 'hooks/query/useCountries';
import { ContinentKeys } from 'models/Continent';
import { Continentl } from 'models/Continentl';
import { Country } from 'models/Country';
import { ReactNode, useMemo, useState } from 'react';
import Loading from 'shared/components/Loading';
import { classNames } from 'wrapper';
import Layout from '../Layout/Layout';
import Style from './countries.module.scss';
import { CountryList } from './CountryList';
import CountryName from './CountryName';
import CountryDetail from './CountyDetail';

const cx = classNames.bind(Style);
interface Props {
  context: { continent: ContinentKeys; country?: string; city?: { all: string[]; selected: string[] } };
  onNext: (country: {
    continent?: ContinentKeys;
    country?: string;
    city?: { all: string[]; selected: string[] };
    duration?: string;
  }) => void;
  progress: ReactNode;
  onPrev: (country: { country: string }) => void;
}

export default function CountryStep({ context, onNext, onPrev, progress }: Readonly<Props>) {
  const { data, isLoading } = useCountries(context.continent ?? 'all');
  const [selectedCountry, setSelectedCountry] = useState(() =>
    context?.country == null || data == null || data.filter(country => country.name === context.country).length == 0
      ? ''
      : context.country
  );

  const queryClient = useQueryClient();

  // 국가 내의 도시/시 정보 가져오기
  const getCitys = (country: string) => {
    return queryClient.ensureQueryData({
      queryKey: useContinentl.queryKey(country),
      queryFn: () =>
        firestoreService.getListWithIds('continentl').then(countries => {
          return country === 'all' ? countries : countries?.filter((place: Continentl) => place.id === country);
        }),
    });
  };

  const { data: selectedCountryData, isLoading: isLoadingSelectedCountry } = useContinentl(selectedCountry);
  const countryDetail = useMemo(
    () => (selectedCountryData != null ? selectedCountryData[0] : null),
    [selectedCountry, selectedCountryData]
  );

  if (isLoading || data == null) {
    return <Loading />;
  }

  return (
    <Layout
      navigateIcon={
        <Icon.Navigate
          sizes="large"
          onTapStart={() => {
            onPrev({ country: selectedCountry });
          }}
        />
      }
      heading={
        <>
          떠나고 싶은 <Text.Accented isButtonText={true}>나라</Text.Accented>는? {progress}
        </>
      }
      listItems={
        <CountryList countries={data} setSelectedCountry={setSelectedCountry} selectedCountry={selectedCountry} />
      }
      submitButton={
        <Container applyMargin="top">
          <AnimatedButton
            isFullSize={true}
            withBorder={true}
            onClick={async () => {
              const states = await getCitys(selectedCountry);
              if (states != null) {
                onNext({ country: selectedCountry, city: { all: states?.[0]?.states, selected: [] } });
              }
            }}
            disabled={selectedCountry === ''}
          >
            {selectedCountry === '' ? (
              <>여행할 나라를 선택해주세요.</>
            ) : (
              <>
                "{selectedCountry}"로 보기 <Icon />
              </>
            )}
          </AnimatedButton>
        </Container>
      }
    >
      {isLoadingSelectedCountry ? (
        <>loading...</>
      ) : (
        <CountryName name={countryDetail.name} code={countryDetail.code} flagImage={countryDetail['flag-image']} />
      )}
      <Container margin="none" className={cx('map-wrap')}>
        <CountryDetail
          selectedCountry={
            // 선택한 나라가 없을 경우
            selectedCountry === '' || !data.some((country: Country) => country.name === selectedCountry)
              ? data[0].name
              : selectedCountry
          }
        />
      </Container>
    </Layout>
  );
}
