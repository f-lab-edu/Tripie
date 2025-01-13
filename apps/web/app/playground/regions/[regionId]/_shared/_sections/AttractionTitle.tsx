'use server';
import { AttractionArticle } from 'models/Attraction';

const AttractionTitle = ({ primary }: { primary: AttractionArticle['source']['names']['primary'] }) => {
  return <h2>{primary}</h2>;
};
export default AttractionTitle;
