'use client';
import { Chip, Container, Icon } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import Style from './shared/selected-list.module.scss';

import COMPANION_LIST from 'constants/companions';

import NextButton from 'app/home/_components/shared/NextAnimatedButton';
// import Icon from 'shared/components/Icon/Icon';
import { SELECTED_COMPANION } from './constants/selected';

const cx = classNames.bind(Style);

const CompanionSelect = () => {
  return (
    <Container margin="none">
      <Container margin="none" className={cx('card-region-wrap')}>
        <Container className={cx('wrap')} applyMargin="bottom">
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
        </Container>
      </Container>

      <NextButton>
        다음 <Icon />
        {/* <Icon src={RESOURCE.ARROW} /> */}
      </NextButton>
    </Container>
  );
};

export default CompanionSelect;
