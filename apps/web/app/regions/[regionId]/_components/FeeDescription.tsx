'use client';
import { Divider } from '@tripie-pyotato/design-system';
import ArticleHeading from 'app/regions/[regionId]/_components/Elements/Header';
import ArticleText from 'app/regions/[regionId]/_components/Elements/Text';
import { AttractionArticle } from 'models/Attraction';

const FeeDescription = ({ feeComment }: { feeComment: AttractionArticle['source']['feeComment'] }) => {
  if (feeComment == null || feeComment === '') {
    return null;
  }
  return (
    <>
      <Divider.Article item={{ type: 'hr2' }} />
      <ArticleHeading item={{ type: 'heading3', value: { text: '이용료' } }} />
      <ArticleText item={{ type: 'text', value: { text: feeComment.replaceAll('n', '\n') } }} />
    </>
  );
};
export default FeeDescription;
