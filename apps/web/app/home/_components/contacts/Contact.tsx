'use client';

import { Container, Text } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import Divider from 'shared/components/Divider/Divider';
import TextUnderLineAnimation from '../../../../shared/components/TextUnderlineAnimation/TextUnderlineAnimation';
import Style from './contacts.module.scss';

const cx = classNames.bind(Style);

const Contact = ({ sectionName, content }: { sectionName: string; content: JSX.Element }) => {
  return (
    <Container margin="none">
      <Container margin="none" className={cx('wrap')}>
        <Text size="tiny" className={cx('small')}>
          {sectionName}
        </Text>
        <TextUnderLineAnimation>{content}</TextUnderLineAnimation>
        <Divider />
      </Container>
    </Container>
  );
};
export default Contact;
