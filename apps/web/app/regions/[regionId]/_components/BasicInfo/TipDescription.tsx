'use client';
import { Divider } from '@tripie-pyotato/design-system';
import ArticleHeading from 'app/regions/[regionId]/_components/ArticleLayout/Elements/Header';
import ArticleText from 'app/regions/[regionId]/_components/ArticleLayout/Elements/Text';
import { AttractionArticle } from 'models/Attraction';

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
