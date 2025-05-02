'use client';
import { Card } from '@tripie-pyotato/design-system';
import { Headings, Stack, Text } from '@tripie-pyotato/design-system/@core';
import { NoteProps } from 'models/Props';

import decodeUnicodes from 'utils/string/decodeUnicodes';

const ArticleNote = ({ item }: { item: NoteProps }) => {
  const decodedStr = decodeUnicodes(item.value.body);
  return (
    <Card.Content key={item.value.body}>
      <Headings.H3>{item.value.title}</Headings.H3>
      <Stack applyMargin="top-bottom" alignItems="start" direction="column" gap="sm">
        <Text display="block">{decodedStr}</Text>
      </Stack>
    </Card.Content>
  );
};

export default ArticleNote;
