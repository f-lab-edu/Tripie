'use client';
import { Headings } from '@tripie-pyotato/design-system';
import { AttractionArticle } from 'models/Attraction';

const AttractionTitle = ({ names }: { names: AttractionArticle['source']['names'] }) => {
  if (names?.primary != null) {
    return <Headings.H2>{names?.primary}</Headings.H2>;
  }
  if (names?.ko != null) {
    return <Headings.H2>{names?.ko}</Headings.H2>;
  }
  if (names?.en != null) {
    return <Headings.H2>{names?.en}</Headings.H2>;
  }
  if (names?.local != null) {
    return <Headings.H2>{names?.local}</Headings.H2>;
  }
};
export default AttractionTitle;
