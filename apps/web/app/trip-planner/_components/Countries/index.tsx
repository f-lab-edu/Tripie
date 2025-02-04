import 'maplibre-gl/dist/maplibre-gl.css';
import 'shared/components/AwsMap/Marker/marker.scss';

import { useQueryClient } from '@tanstack/react-query';
import { Container } from '@tripie-pyotato/design-system';
import firestoreService from 'app/api/firebase';
import classNames from 'classnames/bind';
import RESOURCE from 'constants/resources';
import useContinentl from 'hooks/query/useContinentl';
import useCountries from 'hooks/query/useCountries';
import { ContinentKeys } from 'models/Continent';
import { Continentl } from 'models/Continentl';
import { Country } from 'models/Country';
import { useState } from 'react';
import AnimatedButton from 'shared/components/Button/Animated';
import Icon from 'shared/components/Icon/Icon';
import Loading from 'shared/components/Loading';
import { CountryList } from './CountryList';
import CountryDetail from './CountyDetail';
import Style from './countries.module.scss';

interface Props {
  context: { continent: ContinentKeys; country?: string; city?: { all: string[]; selected: string[] } };
  onNext: (country: {
    continent?: ContinentKeys;
    country?: string;
    city?: { all: string[]; selected: string[] };
    duration?: string;
  }) => void;
}

const cx = classNames.bind(Style);

export function CountryStep({ context, onNext }: Readonly<Props>) {
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

  if (isLoading || data == null) {
    return <Loading />;
  }

  return (
    <>
      <Container margin="none">
        <Container margin="none">
          <Icon.Navigate src={RESOURCE.ARROW} />
        </Container>
        <h2>
          떠나고 싶은 <span className={cx('accented')}>나라</span>는?
        </h2>
      </Container>

      {data == null ? null : (
        <>
          <CountryDetail
            selectedCountry={
              // 선택한 나라가 없을 경우
              selectedCountry === '' || !data.some((country: Country) => country.name === selectedCountry)
                ? data[0].name
                : selectedCountry
            }
          />
          <CountryList countries={data} setSelectedCountry={setSelectedCountry} selectedCountry={selectedCountry} />
          <Container margin="none">
            <AnimatedButton
              withBorder={true}
              onClick={async () => {
                const states = await getCitys(selectedCountry);
                if (states != null) {
                  onNext({ country: selectedCountry, city: { all: states?.[0]?.states, selected: [] } });
                }
              }}
              disabled={selectedCountry === ''}
              className={cx('submit-button')}
            >
              <Container margin="none" className={cx('flex')}>
                {selectedCountry === '' ? (
                  <>여행할 나라를 선택해주세요.</>
                ) : (
                  <>
                    "{selectedCountry}"로 보기 <Icon src={RESOURCE.ARROW} />
                  </>
                )}
              </Container>
            </AnimatedButton>
          </Container>
        </>
      )}
    </>
  );
}
