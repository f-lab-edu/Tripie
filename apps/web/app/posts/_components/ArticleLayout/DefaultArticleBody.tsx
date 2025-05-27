'use client';

import { Divider } from '@tripie-pyotato/design-system/@components';

import { BodyItemProps } from 'models/Props';
import ArticleImages from './ArticleImages';
import ArticleEmbedded from './Embedded';
import ArticleHeading from './Header';
import ArticleItinerary from './Itinerary';
import ArticleLink from './Link';
import ArticleNote from './Note';
import PoiList from './PoiList';
import ArticleText from './Text/Text';

const DefaultArticleBody = ({
  items,
  regionId,
  dataUrl,
}: {
  items: Array<BodyItemProps>;
  regionId: string;
  dataUrl: string;
}) => {
  return items.map((item: BodyItemProps, index: number) => {
    const { type } = item;
    switch (type) {
      case 'heading1':
      case 'heading2':
      case 'heading3':
      case 'heading4':
      case 'heading5':
        return <ArticleHeading item={item} key={index + JSON.stringify(item)} />;
      case 'text':
        return <ArticleText item={item} key={index + JSON.stringify(item)} />;
      case 'hr1':
      case 'hr2':
      case 'hr3':
        return <Divider.Article item={item} key={index + `divider-${item.type}-${index}`} />;
      case 'note':
        return <ArticleNote item={item} key={index + JSON.stringify(item)} />;
      case 'images':
        return <ArticleImages item={item} key={index + JSON.stringify(item)} />;
      case 'links':
        return (
          <ArticleLink
            key={index + JSON.stringify(item.value.links)}
            item={item}
            regionId={regionId}
            dataUrl={dataUrl}
          />
        );
      case 'embedded':
        return <ArticleEmbedded item={item} key={index + JSON.stringify(item)} regionId={regionId} dataUrl={dataUrl} />;
      case 'itinerary':
        return <ArticleItinerary item={item} key={index + JSON.stringify(item)} />;
      case 'pois':
        return <PoiList item={item} key={index + JSON.stringify(item)} />;
      default:
        return null;
    }
  });
};

export default DefaultArticleBody;
