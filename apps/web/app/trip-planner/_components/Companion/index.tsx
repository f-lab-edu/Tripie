'use client';
import { AnimatedButton, TripieContainer } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import Icon from 'shared/components/Icon/Icon';

import COMPANION_LIST from 'constants/companions';
import RESOURCE from 'constants/resources';
import { ContinentKeys } from 'models/Continent';
import { useCallback, useState } from 'react';
import CompanionList from './List';
import Style from './companion.module.scss';

const cx = classNames.bind(Style);

interface Props {
  context?: {
    continent: ContinentKeys;
    country: string;
    city: { all: string[]; selected: string[] };
    duration: string;
    companion?: string;
  };
  onNext: (companion: string) => void;
}

export type Companion = keyof typeof COMPANION_LIST;

const CompanionStep = ({ context, onNext }: Props) => {
  const [selected, setSelected] = useState<Array<Companion> | []>(
    context?.companion == null ? [] : (context.companion.split(',') as Array<Companion>)
  );

  const handleSubmit = useCallback(() => {
    onNext(selected.join(','));
  }, [selected]);

  return (
    <>
      <TripieContainer margin="none">
        <TripieContainer margin="none">
          <Icon.Navigate src={RESOURCE.ARROW} />
        </TripieContainer>
        <h2>
          <span className={cx('accented')}>누구</span>와 떠나나요?
        </h2>
      </TripieContainer>
      <TripieContainer className={cx('cloud-wrap')}>
        {Array.from({ length: 30 }, (_, index) => (
          <Icon.Cloud key={index} index={index} />
        ))}

        <Icon.Plane />
      </TripieContainer>
      <CompanionList context={context} selected={selected} setSelected={setSelected} />
      <TripieContainer margin="l" applyMargin="top">
        <AnimatedButton
          withBorder={true}
          disabled={selected.length === 0}
          onClick={handleSubmit}
          className={cx('submit-button')}
        >
          <TripieContainer margin="none" className={cx('flex')}>
            {selected.length === 0 ? (
              '다중 선택이 가능해요.'
            ) : (
              <>
                다음 <Icon src={RESOURCE.ARROW} />
              </>
            )}
          </TripieContainer>
        </AnimatedButton>
      </TripieContainer>
    </>
  );
};

export default CompanionStep;
