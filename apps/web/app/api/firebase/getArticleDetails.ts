import { collection, getDocs } from 'firebase/firestore';
import db from 'firebase/store';

type MetaDataContents = {
  image: TripieMetaImage;
};

type TripieMetaImage = {
  cloudinaryBucket: 'triple-cms';
  type: 'image';
  source: {};
  sourceUrl: 'shutterstock.com';
  // metadata
  ogTitle?: string;
  title: string;
  requireLogin?: boolean;
  geotags: [];
  relatedLinks?: null;
  ogImage?: null;
  description: string;
  readonly: null;
  template: { items: [] };
  exposedAt: string;
  author?: string;
  __typename: 'ArticleMetadata';
  tags: [];
  destinationTags: [];
};

type Metadata = { scrapsCount: number; __typename: 'Metadata'; reviewsCount?: number };

type SeoMetaData = {
  description: string;

  __typename: 'ArticleSeoMetadata';
};
type TripieArticle = {
  body: string;
  id: string;
  metadataContents: MetaDataContents;
  seoMetadata: SeoMetaData;
  placeId: string;
  metadata: Metadata;
  header?: string;
  articleId?: string;
};

const getArticleDetails = async (docName: string, id: string, articleId: string) => {
  try {
    const querySnapshot = await getDocs(collection(db, docName));
    const countryArticles = querySnapshot.docs.map(doc => doc.data());

    // !! 링크 추출
    // const parsed = countryArticles.map(({ articles }) =>
    //   articles
    //     .map(item => {
    //       let str = `${item.body}`;
    //       if (str.startsWith("'") && str.endsWith("'")) {
    //         str = str.slice(1, -1); // Remove the surrounding single quotes
    //       }
    //       const parsedJson = JSON.parse(str);
    //       return parsedJson;
    //     })
    //     .map(v => v.filter(item => item.type == 'links'))
    //     .flat()
    // );
    // const hrefs = new Set(
    //   parsed
    //     .flat()
    //     .map(item => item.value.links.flat())
    //     .flat()
    //     .map(v => v.href)
    // );
    // // const regex = /\/regions\/([^\/]+)\/(articles)\/([^\/]+)/g;
    // const regex = /\/regions\/([^\/]+)\/(attractions)\/([^\/]+)/g;
    // const innerHrefs = [...hrefs].filter(v => v.match(regex) != null);

    // const manilaRegex = /\/regions\/765cc008-e4f7-49c6-85c5-173676829009\/(attractions)\/([^\/]+)/g;
    // console.log(innerHrefs.filter(v => v.match(manilaRegex)));

    // !!

    const { articles } = countryArticles.filter(article => article.id === id)[0];

    const filtered = articles.filter((article: TripieArticle) => article.placeId === articleId)?.[0];
    if (filtered != null) {
      const { body, ...others } = filtered;
      return { body: JSON.parse(body), ...others };
    } else {
      const filtered = articles.filter((item: TripieArticle) => item.articleId === articleId)?.[0];
      const { body, ...others } = filtered;
      return { body: JSON.parse(body), ...others };
    }
  } catch (e) {
    console.error('Error listing document: ', e);
  }
};

export default getArticleDetails;
