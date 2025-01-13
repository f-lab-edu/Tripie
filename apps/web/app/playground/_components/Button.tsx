'use client';

// import articles from '../manila_articles';

// import attractionFails from '../attraction-fails';

export default function PlaygroundButton() {
  // const getPage = async () => {
  //   const restaurantData = [];
  //   await Promise.all(
  //     restaurants.slice(350, restaurants.length).map(async restaurant => {
  //       const regex = /\/regions\/([^\/]+)\/(restaurants)\/([^\/]+)/g;
  //       const match = regex.exec(restaurant);
  //       if (match != null) {
  //         const [, regionId, , restaurantId] = match;
  //         await fetch(`/api/tripie?regionId=${regionId}&restaurantId=${restaurantId}`).then(async v => {
  //           const data = await v.text();

  //           const parser = new DOMParser();

  //           const doc = parser.parseFromString(data, 'text/html');
  //           const regex = /"__APOLLO_CACHE__\\":(.*)}<\/script>/g;

  //           const match2 = regex.exec(doc.body.innerHTML);

  //           if (match2 != null) {
  //             let str = match2[1] + '}';
  //             str = str.replaceAll(/\\"/g, '"').replaceAll('\\', '');
  //             str = str.slice(0, str.indexOf(',"ROOT_QUERY"')) + '}';
  //             try {
  //               restaurantData.push({ ...JSON.parse(str), regionId, restaurantId });
  //             } catch (e) {
  //               restaurantData.push({ regionId, restaurantId });
  //             }
  //           }
  //         });
  //       }
  //     })
  //   );

  //   restaurantData.forEach(async restaurant => {
  //     if (restaurant[`Poi:${restaurant.restaurantId}`] != null) {
  //       await addItem(
  //         { id: restaurant.regionId + '/restaurants/' + restaurant.restaurantId, ...restaurant },
  //         'retaurant-details'
  //       );
  //     } else {
  //       console.log(restaurant);
  //     }
  //   });
  // };

  // const getPage = async () => {
  //   const attractionData = [
  //     '/regions/84685a5a-a0ee-47b5-b84c-4d76dffad76d/attractions/7919b5de-4855-429b-9ec6-0a287503d045',
  //   ];
  //   await Promise.all(
  //     // attractions.slice(1500, attractions.length)
  //     // attractions.
  //     attractionData.map(async restaurant => {
  //       const regex = /\/regions\/([^\/]+)\/(attractions)\/([^\/]+)/g;
  //       const match = regex.exec(restaurant);
  //       if (match != null) {
  //         const [, regionId, , attractionId] = match;
  //         await fetch(`/api/tripie?regionId=${regionId}&attractionId=${attractionId}`).then(async v => {
  //           const data = await v.text();

  //           const parser = new DOMParser();

  //           const doc = parser.parseFromString(data, 'text/html');
  //           const regex = /"__APOLLO_CACHE__\\":(.*)}<\/script>/g;

  //           const match2 = regex.exec(doc.body.innerHTML);

  //           if (match2 != null) {
  //             let str = match2[1] + '}';
  //             str = str.replaceAll(/\\"/g, '"').replaceAll('\\', '');
  //             str = str.slice(0, str.indexOf(',"ROOT_QUERY"')) + '}';
  //             try {
  //               attractionData.push({ ...JSON.parse(str), regionId, attractionId });
  //             } catch (e) {
  //               try {
  //                 let str = match2[1] + '}';
  //                 str = str.slice(0, str.indexOf('ROOT_QUERY') - 3) + '}';
  //                 str = str.replaceAll(/\\\\"/g, "'").replaceAll(/\\"/g, '"').replaceAll('\\', '');
  //                 attractionData.push({ ...JSON.parse(str), regionId, attractionId });
  //               } catch (error) {
  //                 attractionData.push({ regionId, attractionId });
  //               }
  //             }
  //           }
  //         });
  //       }
  //     })
  //   );

  // console.log(attractionData);
  //   attractionData.forEach(async attraction => {
  //     if (attraction[`Poi:${attraction.attractionId}`] != null) {
  //       try {
  //         await addItem(
  //           {
  //             id: attraction.regionId + '/attractions/' + attraction.attractionId,
  //             data: JSON.stringify({ ...attraction[`Poi:${attraction.attractionId}`] }),
  //             attractionId: attraction.attractionId,
  //             regionId: attraction.regionId,
  //           },
  //           'attraction-details'
  //         );
  //       } catch (e) {
  //         console.log(e, attraction);
  //       }
  //     } else {
  //       console.log(attraction);
  //     }
  //   });
  // };

  // !! 실패한 attraction data
  // const getPage = async () => {
  //   const attractionData = [];
  //   await Promise.all(
  //     attractionFails.slice(1, attractionFails.length).map(async ({ regionId, attractionId }) => {
  //       await fetch(`/api/tripie?regionId=${regionId}&attractionId=${attractionId}`).then(async v => {
  //         const data = await v.text();

  //         const parser = new DOMParser();

  //         const doc = parser.parseFromString(data, 'text/html');
  //         const regex = /"__APOLLO_CACHE__\\":(.*)}<\/script>/g;

  //         const match2 = regex.exec(doc.body.innerHTML);

  //         if (match2 != null) {
  //           let str = match2[1] + '}';

  //           str = str.slice(0, str.indexOf('ROOT_QUERY') - 3) + '}';
  //           str = str.replaceAll(/\\\\"/g, "'").replaceAll(/\\"/g, '"').replaceAll('\\', '');

  //           // console.log(str);
  //           try {
  //             attractionData.push({ ...JSON.parse(str), regionId, attractionId });
  //           } catch (e) {
  //             attractionData.push({ regionId, attractionId });
  //           }
  //         }
  //       });
  //     })
  //   );

  //   const failed = [];

  //   attractionData.forEach(async attraction => {
  //     if (attraction[`Poi:${attraction.attractionId}`] != null) {
  //       try {
  // await addItem(
  //   {
  //     id: attraction.regionId + '/attractions/' + attraction.attractionId,
  //     data: JSON.stringify({ ...attraction[`Poi:${attraction.attractionId}`] }),
  //     attractionId: attraction.attractionId,
  //     regionId: attraction.regionId,
  //   },
  //   'attraction-details'
  // );
  //       } catch (e) {
  //         // console.log(e, attraction.regionId, attraction.attractionId);
  //         failed.push(attraction);
  //       }
  //     } else {
  //       failed.push(attraction);
  //     }
  //   });

  //   if (failed.length > 0) {
  //     console.log('failed', failed);
  //   }
  // };

  // !! failed restaurants
  // const getPage = async () => {
  //   const restaurantData = [];
  //   await Promise.all(
  //     restaurantFails.slice(1, restaurantFails.length).map(async ({ regionId, restaurantId }) => {
  //       await fetch(`/api/tripie?regionId=${regionId}&restaurantId=${restaurantId}`).then(async v => {
  //         const data = await v.text();

  //         const parser = new DOMParser();

  //         const doc = parser.parseFromString(data, 'text/html');
  //         const regex = /"__APOLLO_CACHE__\\":(.*)}<\/script>/g;

  //         const match2 = regex.exec(doc.body.innerHTML);

  //         if (match2 != null) {
  //           let str = match2[1] + '}';

  //           str = str.slice(0, str.indexOf('ROOT_QUERY') - 3) + '}';
  //           str = str.replaceAll(/\\\\"/g, "'").replaceAll(/\\"/g, '"').replaceAll('\\', '');

  //           // console.log(str);
  //           try {
  //             restaurantData.push({ ...JSON.parse(str), regionId, restaurantId });
  //           } catch (e) {
  //             restaurantData.push({ regionId, restaurantId });
  //           }
  //         }
  //       });
  //     })
  //   );

  //   // console.log(restaurantData);
  //   const failed = [];

  //   restaurantData.forEach(async restaurant => {
  //     if (restaurant[`Poi:${restaurant.restaurantId}`] != null) {
  //       try {
  //         await addItem(
  //           {
  //             id: restaurant.regionId + '/restaurants/' + restaurant.restaurantId,
  //             ...restaurant,
  //             // data: JSON.stringify({ ...restaurant[`Poi:${restaurant.restaurantId}`] }),
  //             restaurantId: restaurant.restaurantId,
  //             regionId: restaurant.regionId,
  //           },
  //           'retaurant-details'
  //         );
  //       } catch (e) {
  //         console.log(e);
  //         // console.log(e, attraction.regionId, attraction.attractionId);
  //         failed.push(restaurant);
  //       }
  //     } else {
  //       failed.push(restaurant);
  //     }
  //   });

  //   if (failed.length > 0) {
  //     console.log('failed', failed);
  //   }
  // };

  //!! articles
  // const getPage = async () => {
  // const arr = articles.map(v => `/regions/765cc008-e4f7-49c6-85c5-173676829009/articles/${v.id}`);
  // // console.log();
  // const articleData = [];
  // await Promise.all(
  //   arr.map(async str => {
  //     const regex = /\/regions\/([^\/]+)\/(articles)\/([^\/]+)/g;
  //     const match = regex.exec(str);
  //     if (match != null) {
  //       const [, regionId, , articleId] = match;
  //       await fetch(`/api/tripie?regionId=${regionId}&articleId=${articleId}`).then(async v => {
  //         const data = await v.text();
  //         const parser = new DOMParser();
  //         const doc = parser.parseFromString(data, 'text/html');
  //         const regex = /"__APOLLO_CACHE__\\":(.*)}<\/script>/g;
  //         const match2 = regex.exec(doc.body.innerHTML);
  //         if (match2 != null) {
  //           let str = match2[1] + '}';
  //           str = str.replaceAll(/\\"/g, '"').replaceAll('\\', '');
  //           str = str.slice(0, str.indexOf(',"ROOT_QUERY"')) + '}';
  //           try {
  //             const res = JSON.parse(str);
  //             const data = res[`Article:${articleId}`];
  //             const { source, ...others } = data;
  //             const { body, metadata, ...otherSource } = source;
  //             articleData.push({
  //               body: JSON.stringify(body),
  //               metadataContents: metadata,
  //               ...others,
  //               ...otherSource,
  //               regionId,
  //               articleId,
  //             });
  //             // articleData.push({ ..., regionId, articleId });
  //           } catch (e) {
  //             let str = match2[1] + '}';
  //             str = str.slice(0, str.indexOf('ROOT_QUERY') - 3) + '}';
  //             str = str.replaceAll(/\\\\"/g, "'").replaceAll(/\\"/g, '"').replaceAll('\\', '');
  //             try {
  //               const res = JSON.parse(str);
  //               const data = res[`Article:${articleId}`];
  //               const { source, ...others } = data;
  //               const { body, metadata, ...otherSource } = source;
  //               articleData.push({
  //                 body: JSON.stringify(body),
  //                 metadataContents: metadata,
  //                 ...others,
  //                 ...otherSource,
  //                 regionId,
  //                 articleId,
  //                 placeId: regionId,
  //               });
  //             } catch (error) {
  //               console.log(error, str);
  //               articleData.push({ regionId, articleId });
  //             }
  //           }
  //         }
  //       });
  //     }
  //   })
  // );
  // console.log({ articles: articleData, id: '765cc008-e4f7-49c6-85c5-173676829009' });
  // !!article-details/765cc008-e4f7-49c6-85c5-173676829009 추가
  // await addItem(
  //   {
  //     articles: articleData,
  //     id: '765cc008-e4f7-49c6-85c5-173676829009',
  //   },
  //   'article-details'
  // );
  // !!region-articles/765cc008-e4f7-49c6-85c5-173676829009 추가
  // await addItem(
  //   {
  //     regionId: '765cc008-e4f7-49c6-85c5-173676829009',
  //     data: articles,
  //     id: '765cc008-e4f7-49c6-85c5-173676829009',
  //   },
  //   'region-articles'
  // );
  // articleData.forEach(async article => {
  //   const { regionId, articleId, ...others } = article;
  //   await addItem(
  //     {
  //       id: regionId + '/articles/' + articleId,
  //       data: others,
  //       articleId,
  //       regionId,
  //     },
  //     'article-details'
  //   );
  // });
  // };

  const getPage = async () => {};

  return (
    <>
      <h1>this is playground</h1>

      {/* <button onClick={() => addRestaurant()}>add Restaurant</button> */}

      <button onClick={() => getPage()}>get page</button>
      {/* <AwsMap places={data.places} plans={data.plans} locations={data.locations} /> */}
    </>
  );
}
