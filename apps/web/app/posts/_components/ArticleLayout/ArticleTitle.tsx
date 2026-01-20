'use client';
import { Headings } from '@tripie-pyotato/design-system/@core';
import { AttractionArticle } from 'models/Attraction';
import { useEffect } from 'react';
import getPreferredTitle from 'utils/string/getPreferredTitle';

const ArticleTitle = ({ names }: { names?: AttractionArticle['source']['names'] | string }) => {
  useEffect(() => {
    if (globalThis) {
      window?.scrollTo({ top: 0 });
    }
  }, []);
  return <Headings.H2>{typeof names === 'string' ? names : getPreferredTitle({ names })}</Headings.H2>;
};
export default ArticleTitle;
