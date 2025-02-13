'use client';
import { TripieContainer } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import Markdown from 'markdown-to-jsx';
import { decodeUnicodes } from 'utils/string';
import Style from './text.module.scss';

export type ArticleTextProps = { type: 'text'; value: TextValue & Partial<RichTextValue> };
export type TextValue = { text: string };

// html 혹은 markdown 형식으로 데이터가 주어진다면 해당 형식으로 데이터 보여주기
export type RichTextValue = {
  rich: boolean;
  markdownText: string;
  rawHTML: string;
} & TextValue;

const cx = classNames.bind(Style);

const ArticleText = ({ item }: { item: ArticleTextProps }) => {
  if (item.value.text == null) {
    return null;
  }
  const decodedStr = decodeUnicodes(item.value.text);

  return (
    <TripieContainer applyMargin="top-bottom" key={decodedStr} className={cx('text-container')}>
      {item.value.markdownText != null ? (
        <Markdown>{item.value.markdownText.replaceAll('트리플', 'Tripie')}</Markdown>
      ) : (
        decodedStr
      )}
    </TripieContainer>
  );
};

export default ArticleText;
