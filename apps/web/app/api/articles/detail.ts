import API from 'constants/api-routes';
import { ArticleData } from 'models/Article';
import { AttractionArticle, ParsedAttractionResponse } from 'models/Attraction';
import { RestaurantData } from 'models/Restaurant';
import api from 'utils/ky';
import addImage from '../cloudinary/addImage';
import firestoreService from '../firebase';

type DetailResponse<T> = {
  blurredThumbnail: { data: string };
  data: T | null;
};

const getArticleDetail = async <T extends 'article' | 'attraction' | 'retaurant'>(
  db: T,
  regionId: string,
  articleId: string
): Promise<T extends 'article' ? DetailResponse<ArticleData> : DetailResponse<AttractionArticle>> => {
  let blurredThumbnail: { url: string } | null = null;
  let detailWithBlurData: ArticleData | AttractionArticle | null = null;
  const DB_NAME = `${db}-details`;

  if (db === 'article') {
    let data = (await firestoreService.getArticleDetails(DB_NAME, regionId, articleId)) as ArticleData;

    blurredThumbnail = await fetch(
      API.BASE_URL + API.BASE + API.BLUR_IMAGE + `?url=${data?.metadataContents?.image?.sizes?.full?.url}`
    ).then(v => v.json());

    // const dynamicBlurDataUrl = await Promise.all(
    //   data?.body.map(async v => {
    //     if (v.type === 'images') {
    //       return {
    //         ...v,
    //         value: {
    //           images: await Promise.all(
    //             v.value.images.map(async image => {
    //               const imageUrl = image?.sizes?.full?.url;
    //               if (imageUrl != null && !imageUrl?.startsWith('https://res.cloudinary.com/dbzzletpw/image/upload')) {
    //   await api
    //     .post(`cloudinary`, {
    //       json: {
    //         imageUrl,
    //       },
    //     })
    //     .json();
    // }

    //               return {
    //                 ...image,
    //                 blurData: await fetch(
    //                   `${API.BASE_URL}${API.BASE}${API.BLUR_IMAGE}?url=${image.sizes.small_square?.url}`
    //                 ).then(res => res.json()),
    //               };
    //             })
    //           ),
    //         },
    //       };
    //     }
    //     return v;
    //   })
    // );

    const dynamicBlurDataUrl = await Promise.all(
      data?.body.map(async v => {
        if (v.type === 'images') {
          return {
            ...v,
            value: {
              images: await Promise.all(
                v.value.images.map(async image => {
                  const imageUrl = image?.sizes?.full?.url;
                  if (imageUrl != null && !imageUrl?.startsWith('https://res.cloudinary.com/dbzzletpw/image/upload')) {
                    await api
                      .post(`cloudinary`, {
                        json: {
                          imageUrl,
                        },
                      })
                      .json();
                  }

                  return {
                    ...image,
                    blurData: await fetch(
                      `${API.BASE_URL}${API.BASE}${API.BLUR_IMAGE}?url=${image.sizes.small_square?.url}`
                    ).then(res => res.json()),
                  };
                })
              ),
            },
          };
        }
        return v;
      })
    );

    return { blurredThumbnail, data: { ...data, body: dynamicBlurDataUrl } } as any;
  }

  // attraction과 restaurant 데이터
  // article 데이터는 nested obj arr 라서 firebase에 넣기 어려움..따라서 JSON.stringify한 값을 넣어줘서 데이터 형식이 다르다.
  const { data } =
    db === 'attraction'
      ? ((await firestoreService.getAttractionDetails(DB_NAME, regionId, articleId)) as ParsedAttractionResponse)
      : ((await firestoreService.getRestaurantDetails(DB_NAME, regionId, articleId)) as RestaurantData);

  if (data != null) {
    blurredThumbnail = await fetch(
      API.BASE_URL + API.BASE + API.BLUR_IMAGE + `?url=${data.source.image.sizes.full.url}`
    ).then(v => v.json());

    detailWithBlurData = {
      ...data,
      source: {
        ...data.source,
        recommendations: await Promise.all(
          data.source.recommendations.map(async recommendation => {
            const imageUrl = recommendation.image.sizes?.full.url;
            // if (imageUrl != null && !imageUrl?.startsWith('https://res.cloudinary.com/dbzzletpw/image/upload')) {
            //   await api
            //     .post(`cloudinary`, {
            //       json: {
            //         imageUrl,
            //       },
            //     })
            //     .json();
            // }
            console.log(imageUrl);
            return {
              ...recommendation,
              image: {
                ...recommendation.image,
                blurData: await fetch(
                  API.BASE_URL + API.BASE + API.BLUR_IMAGE + `?url=${recommendation.image.sizes.small_square.url}`
                ).then(v => v.json()),
              },
            };
          })
        ),
        externalLinks: await Promise.all(
          data.source?.externalLinks.map(async externalLink => {
            const imageUrl = externalLink?.imageUrl;
            console.log(imageUrl);
            await addImage(imageUrl);
            // if (imageUrl != null && !imageUrl?.startsWith('https://res.cloudinary.com/dbzzletpw/image/upload')) {
            //   await api
            //     .post(`cloudinary`, {
            //       json: {
            //         imageUrl,
            //       },
            //     })
            //     .json();
            // }
            return {
              ...externalLink,
              blurData: await fetch(API.BASE_URL + API.BASE + API.BLUR_IMAGE + `?url=${externalLink.imageUrl}`).then(
                v => v.json()
              ),
            };
          })
        ),
      },
    };
  }

  return { blurredThumbnail, data: detailWithBlurData } as any;
};

export default getArticleDetail;
