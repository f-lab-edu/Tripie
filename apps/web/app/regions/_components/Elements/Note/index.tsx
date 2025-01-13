'use client';
import { Container, Headings, Text } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import Card from 'shared/components/Card/Card';
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
      <Container>
        <Text>{decodedStr}</Text>
      </Container>
    </Card.Content>
  );
};

export default ArticleNote;
