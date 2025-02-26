'use client';
import { Headings } from '@tripie-pyotato/design-system';
import { AttractionArticle } from 'models/Attraction';
import { getPreferredTitle } from 'utils/string';

const AttractionTitle = ({ names }: { names: AttractionArticle['source']['names'] }) => {
  return <Headings.H2>{getPreferredTitle({ names })}</Headings.H2>;
};
export default AttractionTitle;
