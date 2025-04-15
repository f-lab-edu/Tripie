// import Loading from 'shared/components/Loading';

import DurationSelect from 'app/home/_components/our-process/_components/selectedList/Duration';

// import PlaygroundButton from './_components/Button';

// import getRegionArticles from 'app/api/articles/region';
// import PlaygroundButton from './_components/Button';
export default async function Playground() {
  return <DurationSelect />;
  // return <Loading.SemiTransparent />;
  // return <PlaygroundButton />;
  // export default async function Playground() {
  // export default async function Playground() {
  //   const dynamicBlurDataUrl = await getRegionArticles('23c5965b-01ad-486b-a694-a2ced15f245c');

  // console.log('dynamicBlurDataUrl', dynamicBlurDataUrl);

  // const updatedUser = await prisma.gpt.update({
  //   where: { id: id, userId: userId },
  //   data: {
  //     usedGptToken: { increment: 1 },
  //   },
  //   select: {
  //     id: true,
  //     usedGptToken: true,
  //   },
  // });

  // const updatedUser = await prisma.gpt.findUnique({
  //   where: { userId: userId, id: id },
  //   select: {
  //     id: true,
  //     usedGptToken: true,
  //   },
  // });

  // const articles = await firestoreService.getList('article-details');
  // const article = await firestoreService.getList('article');

  // const blurredThumbnail = await fetch(
  //   'http://localhost:3000' + API.BASE + API.BLUR_IMAGE + `?url=${data?.metadataContents?.image?.sizes?.full?.url}`
  // ).then(v => v.json());

  // 0-82 83,86
  // const dynamicBlurDataUrl = articles.slice(0, 82).map(article => ({
  //   ...article,
  //   articles: article.articles.map(v => ({ ...v, body: JSON.parse(v.body) })),
  // }));

  // const dynamicBlurDataUrl = await Promise.all(
  //   articles?.map(async article => {
  //     article.map(async data => {
  //       const body = JSON.parse(data.body);
  //       body.map(async v => {
  //         if (v.type === 'embedded') {
  //           return {
  //             ...v,
  //             value: await Promise.all(
  //               v.value.entries.map(async entry => {
  //                 return await Promise.all(
  //                   entry.map(async item => {
  //                     if (item.type === 'images') {
  //                       return {
  //                         ...item,
  //                         value: await Promise.all(
  //                           item.value.images.map(async image => {
  //                             const blurData = await fetch(
  //                               `http://localhost:3000${API.BASE}${API.BLUR_IMAGE}?url=${image.sizes?.small_square?.url}`
  //                             ).then(res => res.json());

  //                             return {
  //                               ...image,
  //                               blurData,
  //                             };
  //                           })
  //                         ),
  //                       };
  //                     }
  //                     return item;
  //                   })
  //                 );
  //               })
  //             ),
  //           };
  //         }
  //         if (v.type === 'pois') {
  //           return {
  //             ...v,
  //             value: {
  //               pois: await Promise.all(
  //                 v.value.pois.map(async poi => {
  //                   return {
  //                     ...poi,
  //                     source: {
  //                       ...poi.source,
  //                       image: {
  //                         ...poi.source.image,
  //                         blurData: await fetch(
  //                           `http://localhost:3000${API.BASE}${API.BLUR_IMAGE}?url=${poi.source.image.sizes.small_square?.url}`
  //                         ).then(res => res.json()),
  //                       },
  //                     },
  //                   };
  //                 })
  //               ),
  //             },
  //           };
  //         }
  //         if (v.type === 'images') {
  //           return {
  //             ...v,
  //             value: {
  //               images: await Promise.all(
  //                 v.value.images.map(async image => {
  //                   return {
  //                     ...image,
  //                     blurData: await fetch(
  //                       `http://localhost:3000${API.BASE}${API.BLUR_IMAGE}?url=${image.sizes.small_square?.url}`
  //                     ).then(res => res.json()),
  //                   };
  //                 })
  //               ),
  //             },
  //           };
  //         }
  //         return v;
  //       });
  //       const blurredThumbnail = await fetch(
  //         'http://localhost:3000' +
  //           API.BASE +
  //           API.BLUR_IMAGE +
  //           `?url=${data?.metadataContents?.image?.sizes?.full?.url}`
  //       ).then(v => v.json());
  //       return {
  //         ...data,
  //         // 썸네일
  //         metadatContents: {
  //           ...data.metadatContents,
  //           image: { ...data.metadataContents.image, blurData: blurredThumbnail },
  //         },
  //       };
  //     });
  //   })
  // );

  // const dynamicBlurDataUrl = await Promise.all(
  //   data.body.map(async (v) => {
  //     if (v.type === 'embedded') {
  //       return {
  //         ...v,
  //         value: await Promise.all(
  //           v.value.entries.map(async entry => {
  //             return await Promise.all(
  //               entry.map(async item => {
  //                 if (item.type === 'images') {
  //                   return {
  //                     ...item,
  //                     value: await Promise.all(
  //                       item.value.images.map(async image => {
  //                         const blurData = await fetch(
  //                           `http://localhost:3000${API.BASE}${API.BLUR_IMAGE}?url=${image.sizes?.small_square?.url}`
  //                         ).then(res => res.json());

  //                         return {
  //                           ...image,
  //                           blurData,
  //                         };
  //                       })
  //                     ),
  //                   };
  //                 }
  //                 return item;
  //               })
  //             );
  //           })
  //         ),
  //       };
  //     }
  //     if (v.type === 'pois') {
  //       return {
  //         ...v,
  //         value: {
  //           pois: await Promise.all(
  //             v.value.pois.map(async poi => {
  //               return {
  //                 ...poi,
  //                 source: {
  //                   ...poi.source,
  //                   image: {
  //                     ...poi.source.image,
  //                     blurData: await fetch(
  //                       `http://localhost:3000${API.BASE}${API.BLUR_IMAGE}?url=${poi.source.image.sizes.small_square?.url}`
  //                     ).then(res => res.json()),
  //                   },
  //                 },
  //               };
  //             })
  //           ),
  //         },
  //       };
  //     }
  //     if (v.type === 'images') {
  //       return {
  //         ...v,
  //         value: {
  //           images: await Promise.all(
  //             v.value.images.map(async image => {
  //               return {
  //                 ...image,
  //                 blurData: await fetch(
  //                   `http://localhost:3000${API.BASE}${API.BLUR_IMAGE}?url=${image.sizes.small_square?.url}`
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

  // const blurDataURLs = await Promise.all(
  //   countries.map(async country => ({
  //     ...country,
  //     blurDataURL: await fetch(
  //       'http://localhost:3000' + API.BASE + API.BLUR_IMAGE + `?url=${country?.['flag-image'][0]}`
  //     ).then(v => v.json()),
  //   }))
  // );

  // const blurredThumbnail = await fetch(
  //   'http://localhost:3000' + API.BASE + API.BLUR_IMAGE + `?url=${data?.metadataContents?.image?.sizes?.full?.url}`
  // ).then(v => v.json());
  // console.log(articles);

  // const data = articles.map((article, index) => {
  //   if (index === 82) {
  //     const parsed = {
  //       ...article,
  //       articles: article.articles.map((v, innerIndex) => {
  //         if (innerIndex === article.articles.length - 1) {
  //           return { ...v, body: json };
  //         }
  //         return { ...v, body: JSON.parse(v.body) };
  //       }),
  //     };

  //     return parsed;
  //   }
  //   return {
  //     // const dynamicBlurDataUrl = data.slice(0, data.length).map(article => ({
  //     ...article,
  //     articles: article.articles.map(v => ({ ...v, body: JSON.parse(v.body) })),
  //   };
  // });

  // const blurDataURLs = await Promise.all(
  //   countries.map(async country => ({
  //     ...country,
  //     blurDataURL: await fetch(
  //       'http://localhost:3000' + API.BASE + API.BLUR_IMAGE + `?url=${country?.['flag-image'][0]}`
  //     ).then(v => v.json()),
  //   }))
  // );

  // const blurredThumbnail = await fetch(
  //   'http://localhost:3000' + API.BASE + API.BLUR_IMAGE + `?url=${data?.metadataContents?.image?.sizes?.full?.url}`
  // ).then(v => v.json());
  // console.log(articles);

  // console.log('article', article);

  // const blurDataURLs = await Promise.all(
  //   data.slice(70, 80).map(async contents => {
  //     const blurredThumbnail = await Promise.all(
  //       contents.articles.map(async content => {
  //         const url = await fetch(
  //           'http://localhost:3000' +
  //             API.BASE +
  //             API.BLUR_IMAGE +
  //             `?url=${content?.metadataContents?.image?.sizes?.full?.url}`
  //         ).then(v => v.json());

  //         return {
  //           ...content,
  //           metadataContents: {
  //             ...content.metadataContents,
  //             image: { ...content?.metadataContents?.image, blurDataURL: url },
  //           },
  //         };
  //       })
  //     );

  //     return { ...contents, articles: blurredThumbnail };
  //   })
  // );

  return <div>{/* <PlaygroundButton /> */}</div>;
}
