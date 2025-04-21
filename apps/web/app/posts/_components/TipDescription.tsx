'use client';
import { Divider } from '@tripie-pyotato/design-system';

import { AttractionArticle } from 'models/Attraction';
import ArticleHeading from './Elements/Header';
import ArticleText from './Elements/Text';

const TipDescription = ({ tips }: { tips: AttractionArticle['source']['tips'] }) => {
  if (tips == null || tips.length === 0) {
    return null;
  }
  return (
    <>
      <Divider.Article item={{ type: 'hr2' }} />
      <ArticleHeading item={{ type: 'heading3', value: { text: '이곳의 이용팁' } }} />
      {tips.map(tip => (
        <ArticleText item={{ type: 'text', value: { text: tip } }} key={tip} />
      ))}
    </>
  );
};

export default TipDescription;
