'use client';
import { Divider } from '@tripie-pyotato/design-system/@components';
import { AttractionArticle } from 'models/Attraction';
import ArticleHeading from '../ArticleLayout/Header';

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
