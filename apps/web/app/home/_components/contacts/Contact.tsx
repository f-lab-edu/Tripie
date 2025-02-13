'use client';

import { Divider, Text, TextUnderLineAnimation, TripieContainer } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';

import Style from './contacts.module.scss';

const cx = classNames.bind(Style);

const Contact = ({ sectionName, content }: { sectionName: string; content: JSX.Element }) => {
  return (
    <TripieContainer margin="none">
      <TripieContainer margin="none" className={cx('wrap')}>
        <Text size="tiny" className={cx('small')}>
          {sectionName}
        </Text>
        <TextUnderLineAnimation>{content}</TextUnderLineAnimation>
        <Divider />
      </TripieContainer>
    </TripieContainer>
  );
};
export default Contact;
