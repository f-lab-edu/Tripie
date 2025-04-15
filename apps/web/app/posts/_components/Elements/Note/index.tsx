'use client';
import { Card, Container, Headings, Text } from '@tripie-pyotato/design-system';
import { NoteProps } from 'models/Props';

import decodeUnicodes from 'utils/string/decodeUnicodes';
import { classNames } from 'wrapper';
import Style from './note.module.scss';

const cx = classNames.bind(Style);

const ArticleNote = ({ item }: { item: NoteProps }) => {
  const decodedStr = decodeUnicodes(item.value.body);
  return (
    <Card.Content className={cx('fit-content')} key={item.value.body}>
      <Headings.H3>{item.value.title}</Headings.H3>
      <Container applyMargin="top-bottom">
        <Text className={cx('note')}>{decodedStr}</Text>
      </Container>
    </Card.Content>
  );
};

export default ArticleNote;
