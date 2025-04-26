'use client';

import { Container, Text } from '@tripie-pyotato/design-system/@core';
import { ArticleTextProps } from 'models/Props';
import decodeUnicodes from 'utils/string/decodeUnicodes';
import { classNames, Markdown } from 'wrapper';
import Style from './text.module.scss';

const cx = classNames.bind(Style);

const ArticleText = ({ item }: { item: ArticleTextProps }) => {
  if (item.value.text == null) {
    return null;
  }
  const decodedStr = decodeUnicodes(item.value.text);

  return (
    <Container applyMargin="top-bottom" key={decodedStr} className={cx('text-container')} justifyContent="start">
      {item.value.markdownText != null ? (
        <Markdown>{item.value.markdownText.replaceAll('트리플', 'Tripie')}</Markdown>
      ) : (
        <Text>{decodedStr}</Text>
      )}
    </Container>
  );
};

export default ArticleText;
