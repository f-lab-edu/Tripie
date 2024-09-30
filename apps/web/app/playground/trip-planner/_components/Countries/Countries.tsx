import { Container } from '@tripie-pyotato/design-system';
import Loading from 'app/home/_components/loading/loading';
import classNames from 'classnames/bind';
import ROUTES from 'constants/routes';
import useContinentl from 'hooks/useContinentl';
import useCountries, { ContinentIds } from 'hooks/useCountries';
import { useState } from 'react';
import AnimatedButton from 'shared/components/Button/AnimatedButton';
import Icon from 'shared/components/Icon/Icon';
import CountryDetail from './CountryDetail';
import { CountryList } from './List/CountryList';
import Style from './countries.module.scss';

interface Props {
  continent: ContinentIds;
  onNext: (country: string) => void;
}

const cx = classNames.bind(Style);

export function Countries({ continent, onNext }: Props) {
  const { data, isLoading } = useCountries(continent);
  const [selectedCountry, setSelectedCountry] = useState('');
  const { data: continentl } = useContinentl(selectedCountry);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Container margin="none">
        <Container margin="none">
          <Icon.Navigate src={ROUTES.RESOURCE.ARROW['src']} />
        </Container>
        <h2>
          떠나고 싶은 <span className={cx('accented')}>나라</span>는?
        </h2>
      </Container>

      <CountryDetail selectedCountry={selectedCountry} data={continentl} />

      <CountryList countries={data} setSelectedCountry={setSelectedCountry} selectedCountry={selectedCountry} />
      <Container margin="none">
        <AnimatedButton withBorder={true} onClick={() => onNext(selectedCountry)} className={cx('submit-button')}>
          <Container margin="none" className={cx('flex')}>
            "{selectedCountry}"로 보기 <Icon src={ROUTES.RESOURCE.ARROW['src']} />
          </Container>
        </AnimatedButton>
      </Container>
    </>
  );
}
