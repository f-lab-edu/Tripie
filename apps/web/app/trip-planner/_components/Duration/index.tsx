'use client';
import { Container } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import Icon from 'shared/components/Icon/Icon';
import Calendar from './Calendar';

import RESOURCE from 'constants/resources';
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
  onNext: (duration: string) => void;
}

const DurationFunnel = ({ context, onNext }: Props) => {
  return (
    <>
      <Container margin="none">
        <Container margin="none">
          <Icon.Navigate src={RESOURCE.ARROW} />
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
