// import { CLOUDINARY_URL } from '@tripie-pyotato/design-system/shared';
import { ArticleData } from 'models/Article';
import { AttractionArticle, ParsedAttractionResponse } from 'models/Attraction';
import { RestaurantData } from 'models/Restaurant';
import { backendApi } from 'utils/ky';
import firestoreService from '../firebase';

const CLOUDINARY_URL = 'https://res.cloudinary.com/dbzzletpw/image/upload/';

export const defaultBlurSize = CLOUDINARY_URL + 'f_auto,e_blur:2000,q_1,c_limit,f_auto,h_2048,w_2048/';

type DetailResponse<T> = {
  data: T | null;
};

export type CloudinaryPostResponse = {
  status: number;
  message: string;
};

const getArticleDetail = async <T extends 'article' | 'attraction' | 'retaurant'>(
  db: T,
  regionId: string,
  articleId: string
): Promise<T extends 'article' ? DetailResponse<ArticleData> : DetailResponse<AttractionArticle>> => {
  let articlewithCloudinaryImgs: ArticleData | AttractionArticle | null = null;
  const DB_NAME = `${db}-details`;

  if (db === 'article') {
    let data = (await firestoreService.getArticleDetails(DB_NAME, regionId, articleId)) as ArticleData;

    const articlewithCloudinaryImgs = await Promise.all(
      data?.body.map(async v => {
        if (v.type === 'images') {
          return {
            ...v,
            value: {
              images: await Promise.all(
                v.value.images.map(async image => {
                  const imageUrl = image?.sizes?.full?.url;
                  let articleCloudinaryImageUrl = defaultBlurSize;
                  const postRes: CloudinaryPostResponse = await backendApi
                    .post('cloudinary', { json: { imageUrl } })
                    .json();
                  articleCloudinaryImageUrl += postRes.message;

                  return {
                    ...image,
                    sizes: {
                      ...image.sizes,
                      full: {
                        ...image.sizes.full,
                        url: articleCloudinaryImageUrl,
                      },
                    },
                  };
                })
              ),
            },
          };
        } else if (v.type === 'pois') {
          return {
            ...v,
            value: {
              pois: await Promise.all(
                v.value.pois.map(async poi => {
                  const imageUrl = poi?.source?.image?.sizes.full.url;
                  let articleCloudinaryImageUrl = defaultBlurSize;
                  const postRes: CloudinaryPostResponse = await backendApi
                    .post('cloudinary', { json: { imageUrl } })
                    .json();
                  articleCloudinaryImageUrl += postRes.message;
                  return {
                    ...poi,
                    source: {
                      ...poi.source,
                      image: {
                        ...poi.source.image,
                        sizes: {
                          ...poi.source.image.sizes,
                          full: {
                            ...poi.source.image.sizes.full,
                            url: articleCloudinaryImageUrl,
                          },
                        },
                      },
                    },
                  };
                })
              ),
            },
          };
        } else if (v.type == 'itinerary') {
          return {
            ...v,
            value: {
              ...v.value,
              itinerary: {
                ...v.value.itinerary,
                items: await Promise.all(
                  v.value.itinerary.items.map(async itineraryItem => {
                    const imageUrl = itineraryItem.poi.source.image.sizes.full.url;
                    let articleCloudinaryImageUrl = defaultBlurSize;
                    const postRes: CloudinaryPostResponse = await backendApi
                      .post('cloudinary', { json: { imageUrl } })
                      .json();
                    articleCloudinaryImageUrl += postRes.message;
                    return {
                      ...itineraryItem,
                      poi: {
                        ...itineraryItem.poi,
                        source: {
                          ...itineraryItem.poi.source,
                          image: {
                            ...itineraryItem.poi.source.image,
                            sizes: {
                              ...itineraryItem.poi.source.image.sizes,
                              full: {
                                ...itineraryItem.poi.source.image.sizes.full,
                                url: articleCloudinaryImageUrl,
                              },
                            },
                          },
                        },
                      },
                    };
                  })
                ),
              },
            },
          };
        } else {
          return v;
        }
      })
    );

    return { data: { ...data, body: articlewithCloudinaryImgs } } as any;
  }

  // attraction과 restaurant 데이터
  // article 데이터는 nested obj arr 라서 firebase에 넣기 어려움..따라서 JSON.stringify한 값을 넣어줘서 데이터 형식이 다르다.
  const { data } =
    db === 'attraction'
      ? ((await firestoreService.getAttractionDetails(DB_NAME, regionId, articleId)) as ParsedAttractionResponse)
      : ((await firestoreService.getRestaurantDetails(DB_NAME, regionId, articleId)) as RestaurantData);

  if (data != null) {
    articlewithCloudinaryImgs = {
      ...data,
      source: {
        ...data.source,
        recommendations: await Promise.all(
          data.source.recommendations.map(async recommendation => {
            const imageUrl = recommendation.image.sizes?.full.url;
            let recommendationImageUrl = defaultBlurSize;
            // if (imageUrl != null && !imageUrl.startsWith(CLOUDINARY_URL)) {
            const postRes: CloudinaryPostResponse = await backendApi.post('cloudinary', { json: { imageUrl } }).json();
            recommendationImageUrl += postRes.message;
            // }
            return {
              ...recommendation,
              image: {
                ...recommendation.image,
                sizes: {
                  ...recommendation.image.sizes,
                  full: { ...recommendation.image.sizes.full, url: recommendationImageUrl },
                },
              },
            };
          })
        ),
        externalLinks: await Promise.all(
          data.source?.externalLinks.map(async externalLink => {
            const imageUrl = externalLink?.imageUrl;
            let externalLinkImageUrl = defaultBlurSize;
            // if (imageUrl != null && !imageUrl.startsWith(CLOUDINARY_URL)) {
            const postRes: CloudinaryPostResponse = await backendApi.post('cloudinary', { json: { imageUrl } }).json();
            externalLinkImageUrl += postRes.message;
            // }
            return { ...externalLink, imageUrl: externalLinkImageUrl };
          })
        ),
      },
    };
  }

  return { data: articlewithCloudinaryImgs } as any;
};

export default getArticleDetail;
