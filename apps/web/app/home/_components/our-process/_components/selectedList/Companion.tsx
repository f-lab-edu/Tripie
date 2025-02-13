'use client';
import { Chip, TripieContainer } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import Style from './shared/selected-list.module.scss';

import COMPANION_LIST from 'constants/companions';
import RESOURCE from 'constants/resources';

import NextButton from 'shared/components/Button/Animated';
import Icon from 'shared/components/Icon/Icon';
import { SELECTED_COMPANION } from './constants/selected';

const cx = classNames.bind(Style);

const CompanionSelect = () => {
  return (
    <TripieContainer margin="none">
      <TripieContainer margin="none" className={cx('card-region-wrap')}>
        <TripieContainer className={cx('wrap')} applyMargin="bottom">
          {Object.values(COMPANION_LIST).map((tagName, index) => (
            <Chip
              key={tagName.tag}
              className={cx('button-chip')}
              selected={new Set(SELECTED_COMPANION).has(
                Object.keys(COMPANION_LIST)[index] as keyof typeof COMPANION_LIST
              )}
            >
              {tagName.tag}
            </Chip>
          ))}
        </TripieContainer>
      </TripieContainer>

      <NextButton>
        다음 <Icon src={RESOURCE.ARROW} />
      </NextButton>
    </TripieContainer>
  );
};

export default CompanionSelect;
