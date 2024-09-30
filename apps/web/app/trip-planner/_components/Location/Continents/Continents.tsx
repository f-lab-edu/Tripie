import { Container } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import { CONTINENTS } from 'constants/continents';
import ROUTES from 'constants/routes';
import { ContinentKeys } from 'hooks/useCountries';
import { useEffect, useState } from 'react';
import AnimatedButton from 'shared/components/Button/AnimatedButton';
import RotatingGlobe from 'shared/components/Globe/RotatingGlobe';
import Icon from 'shared/components/Icon/Icon';
import { ContinentList } from './List/ContinentList';
import Style from './continents.module.scss';

const cx = classNames.bind(Style);

interface Props {
  context: any;
  continent?: ContinentKeys;
  onNext: (country: ContinentKeys) => void;
}

export function ContinentStep({ context, continent = 'ALL', onNext }: Props) {
  const [selectedContinent, setSelectedContinent] = useState(continent);

  useEffect(() => {
    console.log(context);
  }, []);

  return (
    <>
      <Container margin="none">
        <Container margin="none">
          <Icon.Navigate src={ROUTES.RESOURCE.ARROW['src']} />
        </Container>
        <h2>
          떠나고 싶은 <span className={cx('accented')}>지역</span>은?
        </h2>
      </Container>
      <Container className={cx('globe-wrap')} margin="none">
        <RotatingGlobe />
      </Container>
      <ContinentList selectedContinent={selectedContinent} setSelectedContinent={setSelectedContinent} />
      <Container margin="none">
        <AnimatedButton
          withBorder={true}
          onClick={() => onNext(CONTINENTS[selectedContinent]['id'] as ContinentKeys)}
          className={cx('submit-button')}
        >
          <Container margin="none" className={cx('flex')}>
            "{CONTINENTS[selectedContinent].name}"{CONTINENTS[selectedContinent].name === '유럽' ? '으' : null}로 보기{' '}
            <Icon src={ROUTES.RESOURCE.ARROW['src']} />
          </Container>
        </AnimatedButton>
      </Container>
    </>
  );
}
