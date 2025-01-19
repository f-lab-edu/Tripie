import { useQueryClient } from '@tanstack/react-query';
import getContinentlList from 'app/api/firebase/getContinentl';
import classNames from 'classnames/bind';
import useContinentl from 'hooks/query/useContinentl';
import { Country } from 'models/Country';
import { Dispatch, MutableRefObject, SetStateAction } from 'react';
import Chip from 'shared/components/Chip/Chip';
import List from 'shared/components/List/List';
import AnimatedText from 'shared/components/Text/Text';
import { regionNameToLocal } from 'utils/lang';
import Style from './country-list.module.scss';

interface Props {
  countries?: Country[];
  bottomRef: MutableRefObject<HTMLDivElement | null>;
  selectedCountry: string;
  setSelectedCountry: Dispatch<SetStateAction<string>>;
}

const cx = classNames.bind(Style);

export function CountryList({ countries, selectedCountry, setSelectedCountry, bottomRef }: Readonly<Props>) {
  const queryClient = useQueryClient();

  // 이전 단계 Continents에서 선택했던 대륙/지역에 속한 국가들 정보 가져오기
  const prefetch = (country: string) => {
    queryClient.prefetchQuery({
      queryKey: useContinentl.queryKey(country),
      queryFn: () =>
        getContinentlList().then(countries => {
          if (country === 'all') {
            return countries;
          } else {
            return countries?.filter(place => place.id === country);
          }
        }),
    });
  };

  if (countries == null) {
    return null;
  }

  return (
    <List.Grid className={cx('grid-wrap')}>
      {countries.map((country: Country) => (
        <Chip
          className={cx('chip-wrap')}
          selected={selectedCountry === country.name}
          key={country.id}
          onClick={() => {
            setSelectedCountry(country.name);
            prefetch(country.name);
            if (bottomRef.current) {
              bottomRef.current.scrollIntoView({ behavior: 'smooth' }); // 다음 버튼으로 이동
            }
          }}
        >
          <AnimatedText className={cx('animated-text', 'chip')} withBorder={false} otherChild={country.name}>
            {country?.code != null && regionNameToLocal({ regionCode: country?.code })}
          </AnimatedText>
        </Chip>
      ))}
    </List.Grid>
  );
}
