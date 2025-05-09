'use client';

import { Stack, Text } from '@tripie-pyotato/design-system/@core';
import { ArticleTextProps } from 'models/Props';
import decodeUnicodes from 'utils/string/decodeUnicodes';
import { Markdown } from 'wrapper';

const ArticleText = ({ item }: { item: ArticleTextProps }) => {
  if (item.value.text == null) {
    return null;
  }
  const decodedStr = decodeUnicodes(item.value.text);

  return (
    <Stack applyMargin="top-bottom" key={decodedStr} direction={'column'} margin="none">
      {item.value.markdownText != null ? (
        <Markdown>{item.value.markdownText.replaceAll('트리플', 'Tripie')}</Markdown>
      ) : (
        <Text display={'block'}>{decodedStr}</Text>
      )}
    </Stack>
  );
};

export default ArticleText;
