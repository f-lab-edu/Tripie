'use server';
import ArticleDivider from 'app/regions/_components/Elements/Divider';
import ArticleHeading from 'app/regions/_components/Elements/Header';
import ArticleText from 'app/regions/_components/Elements/Text';
import { AttractionArticle } from 'models/Attraction';

const TipDescription = ({ tips }: { tips: AttractionArticle['source']['tips'] }) => {
  return (
    <>
      <ArticleDivider item={{ type: 'hr2' }} />
      <ArticleHeading item={{ type: 'heading3', value: { text: '이곳의 이용팁' } }} />
      {tips.map(tip => (
        <ArticleText item={{ type: 'text', value: { text: tip } }} key={tip} />
      ))}
    </>
  );
};

export default TipDescription;
