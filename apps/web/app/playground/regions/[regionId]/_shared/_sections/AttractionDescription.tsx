'use server';
import ArticleDivider from 'app/regions/_components/Elements/Divider';
import ArticleHeading from 'app/regions/_components/Elements/Header';
import { AttractionArticle } from 'models/Attraction';

const AttractionDescription = ({ comment }: { comment: AttractionArticle['source']['comment'] }) => {
  return (
    <>
      <ArticleHeading item={{ type: 'heading2', value: { text: comment } }} />
      <ArticleDivider item={{ type: 'hr2' }} />
    </>
  );
};

export default AttractionDescription;
