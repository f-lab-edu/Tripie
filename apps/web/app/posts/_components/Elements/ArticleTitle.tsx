'use client';
import { Headings } from '@tripie-pyotato/design-system';
import { AttractionArticle } from 'models/Attraction';
import getPreferredTitle from 'utils/string/getPreferredTitle';

const ArticleTitle = ({ names }: { names: AttractionArticle['source']['names'] | string }) => {
  return <Headings.H2>{typeof names === 'string' ? names : getPreferredTitle({ names })}</Headings.H2>;
};
export default ArticleTitle;
