'use client';
import { Card, Headings, Text, TripieContainer } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import { decodeUnicodes } from 'utils/string';
import Style from './note.module.scss';

export type NoteProps = {
  type: 'note';
  value: { body: string; title: string };
};

const cx = classNames.bind(Style);

const ArticleNote = ({ item }: { item: NoteProps }) => {
  const decodedStr = decodeUnicodes(item.value.body);
  return (
    <Card.Content className={cx('fit-content')} key={item.value.body}>
      <Headings.H3>{item.value.title}</Headings.H3>
      <TripieContainer applyMargin="top-bottom">
        <Text>{decodedStr}</Text>
      </TripieContainer>
    </Card.Content>
  );
};

export default ArticleNote;
