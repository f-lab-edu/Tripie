'use server';

import { Divider } from '@tripie-pyotato/design-system';
import ArticleHeading from 'app/regions/_components/Elements/Header';
import { AttractionArticle } from 'models/Attraction';

const AttractionDescription = ({ comment }: { comment: AttractionArticle['source']['comment'] }) => {
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

export default AttractionDescription;
