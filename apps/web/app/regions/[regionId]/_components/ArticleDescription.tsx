'use client';
import { Divider } from '@tripie-pyotato/design-system';
import ArticleHeading from 'app/regions/[regionId]/_components/Elements/Header';
import { AttractionArticle } from 'models/Attraction';

const ArticleDescription = ({ comment }: { comment: AttractionArticle['source']['comment'] }) => {
  if (comment == null) {
    return null;
  }
  return (
    <>
      <ArticleHeading item={{ type: 'heading2', value: { text: comment } }} />
      <Divider.Article item={{ type: 'hr2' }} />
    </>
  );
};

export default ArticleDescription;
