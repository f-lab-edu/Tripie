'use client';
import { Container } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import ROUTES from 'constants/routes';
import Icon from 'shared/components/Icon/Icon';
import Calendar from './Calendar';

import { ContinentKeys } from 'models/Continent';
import Style from './duration.module.scss';

const cx = classNames.bind(Style);

interface Props {
  context: {
    continent: ContinentKeys;
    country: string;
    city: { all: string[]; selected: string[] };
    duration?: string;
    companion?: string;
    preference?: string;
  };
  onNext: (b: string) => void;
}

const DurationFunnel = ({ context, onNext }: Props) => {
  return (
    <>
      <Container margin="none">
        <Container margin="none">
          <Icon.Navigate src={ROUTES.RESOURCE.ARROW['src']} />
        </Container>
        <h2>
          여행 <span className={cx('accented')}>기간</span>은?
        </h2>
      </Container>

      <Calendar onNext={onNext} context={context} />
    </>
  );
};

export default DurationFunnel;
