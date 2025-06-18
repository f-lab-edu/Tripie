'use client';

import { Stack, Text } from '@tripie-pyotato/design-system/@core';
import { classNames } from '@tripie-pyotato/design-system/@wrappers';

import { ArticleTextProps } from 'models/Props';
import decodeUnicodes from 'utils/string/decodeUnicodes';
import { Markdown } from 'wrapper/markdown-to-jsx';

import Style from './text.module.scss';

const cx = classNames.bind(Style);

const ArticleText = ({ item }: { item: ArticleTextProps }) => {
  if (item.value.text == null) {
    return null;
  }
  const decodedStr = decodeUnicodes(item.value.text);

  return (
    <Stack
      className={cx('text-break-line')}
      applyMargin="top-bottom"
      key={decodedStr}
      direction={'column'}
      margin="none"
    >
      <Text display={'block'}>
        {item.value.markdownText != null ? (
          <Markdown>{item.value.markdownText.replaceAll('트리플', 'Tripie')}</Markdown>
        ) : (
          decodedStr
        )}
      </Text>
    </Stack>
  );
};

export default ArticleText;
