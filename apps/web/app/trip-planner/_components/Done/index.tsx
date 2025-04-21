'use client';
import { AnimatedText, Icon } from '@tripie-pyotato/design-system';
import { Container } from '@tripie-pyotato/design-system/@core';
import { randomIntBtw } from '@tripie-pyotato/utils/@number';
import { TripPlanner } from 'models/Aws';
import { classNames } from 'wrapper';
import Style from './trip-planner.module.scss';

const cx = classNames.bind(Style);

const DoneStep = ({ context }: { context: TripPlanner }) => {
  const {
    preference,
    continent,
    city: { selected },
    country,
    companion,
    duration,
  } = context;
  const selectedOptions = [
    ...preference.split(','),
    continent,
    selected,
    country,
    ...companion.split(','),
    duration,
  ].flat();

  return (
    <Container margin="none" className={cx('background', 'title-wrap')}>
      <Container className={cx('cloud-wrap')}>
        {Array.from({ length: 17 }, (_, index) => (
          <Icon.Cloud key={index} index={index} />
        ))}
        <Icon.Plane />
      </Container>
      <Container margin="none">
        {selectedOptions.map(text => (
          <AnimatedText.Slide animate="fly" duration={randomIntBtw()} key={text}>
            <div className={cx('text-color')}>{text}</div>
          </AnimatedText.Slide>
        ))}
      </Container>
      <Container className={cx('cloud-wrap')}>
        {Array.from({ length: 13 }, (_, index) => (
          <Icon.Cloud key={index} index={index} />
        ))}
      </Container>
    </Container>
  );
};

export default DoneStep;
