'use client';
import { Container, Headings, Stack, Text } from '@tripie-pyotato/design-system/@core';
import { NoteProps } from 'models/Props';

import decodeUnicodes from 'utils/string/decodeUnicodes';

const ArticleNote = ({ item }: { item: NoteProps }) => {
  const decodedStr = decodeUnicodes(item.value.body);
  return (
    <Container key={item.value.body} withBorder={true} padding="m" applyMargin="top-bottom">
      <Headings.H3>{item.value.title}</Headings.H3>
      <Stack applyMargin="top-bottom" alignItems="start" direction="column" gap="sm">
        <Text display="block">{decodedStr}</Text>
      </Stack>
    </Container>
  );
};

export default ArticleNote;
