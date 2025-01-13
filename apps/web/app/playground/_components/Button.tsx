'use client';

// import articles from '../manila_articles';

// import attractionFails from '../attraction-fails';

const data = {
  plans: {
    name: 'Jeju Trip for PARTNER',
    trips: [
      {
        day: 1,
        date: '12/17/2024',
        activities: [
          {
            time: '08:00',
            activity: '한라산 국립공원 등산',
            comments: '한라산은 한국에서 가장 높은 산으로, 자연을 사랑하는 사람들에게 완벽한 장소입니다.',
            label: 'attraction',
            place: 'Hallasan National Park',
          },
          {
            time: '11:00',
            activity: '성산일출봉 방문',
            comments: '유네스코 세계자연유산으로 지정된 성산일출봉은 아름다운 일출로 유명합니다.',
            label: 'attraction',
            place: 'Seongsan Ilchulbong',
          },
          {
            time: '13:00',
            activity: '점심 식사 - 흑돼지 구이',
            comments: "제주에서 유명한 흑돼지 구이를 맛볼 수 있는 '돈사돈'을 추천합니다.",
            label: 'restaurant',
            place: 'Donsadon',
          },
          {
            time: '14:30',
            activity: '섭지코지 산책',
            comments: '바다와 절벽이 어우러진 아름다운 경관을 감상할 수 있는 곳입니다.',
            label: 'attraction',
            place: 'Seopjikoji',
          },
          {
            time: '16:00',
            activity: '제주 민속촌 방문',
            comments: '제주의 전통 문화를 체험할 수 있는 민속촌입니다.',
            label: 'attraction',
            place: 'Jeju Folk Village',
          },
          {
            time: '18:00',
            activity: '저녁 식사 - 해산물 뷔페',
            comments: "신선한 해산물을 즐길 수 있는 '해녀의 집'을 추천합니다.",
            label: 'restaurant',
            place: "Haenyeo's House",
          },
          {
            time: '19:00',
            activity: '호텔 체크인 및 휴식',
            comments: "제주 시내에 위치한 '롯데 호텔 제주'에서 편안한 휴식을 취하세요.",
            label: 'hotel',
            place: 'Lotte Hotel Jeju',
          },
        ],
      },
    ],
  },
  placeSet: [
    {
      name: 'Hallasan National Park',
      selectedCities: 'Jeju',
    },
    {
      name: 'Seongsan Ilchulbong',
      selectedCities: 'Jeju',
    },
    {
      name: 'Donsadon',
      selectedCities: 'Jeju',
    },
    {
      name: 'Seopjikoji',
      selectedCities: 'Jeju',
    },
    {
      name: 'Jeju Folk Village',
      selectedCities: 'Jeju',
    },
    {
      name: "Haenyeo's House",
      selectedCities: 'Jeju',
    },
    {
      name: 'Lotte Hotel Jeju',
      selectedCities: 'Jeju',
    },
  ],
  places: [
    [
      'Hallasan National Park',
      'Seongsan Ilchulbong',
      'Donsadon',
      'Seopjikoji',
      'Jeju Folk Village',
      "Haenyeo's House",
      'Lotte Hotel Jeju',
    ],
  ],
  locations: [
    {
      Summary: {
        Text: 'Hallasan National Park',
        FilterCountries: ['KOR'],
        MaxResults: 3,
        ResultBBox: [126.55769, 33.37183, 126.55769, 33.37183],
        DataSource: 'Esri',
      },
      Results: [
        {
          Place: {
            Label: 'Hallasan National Park, Sŏgwip’o-si, Jeju-do, KOR',
            Geometry: {
              Point: [126.55769, 33.37183],
            },
            Region: 'Jeju-do',
            Country: 'KOR',
            Interpolated: false,
            Categories: ['PointOfInterestType', 'Park'],
          },
          Relevance: 1,
        },
      ],
    },
    {
      Summary: {
        Text: 'Seongsan Ilchulbong',
        FilterCountries: ['KOR'],
        MaxResults: 3,
        ResultBBox: [126.925264359267, 33.454372890366, 126.93917, 33.462372625457],
        DataSource: 'Esri',
      },
      Results: [
        {
          Place: {
            Label: 'Seongsan Ilchulbong, Jeju-do, KOR',
            Geometry: {
              Point: [126.93917, 33.45917],
            },
            Region: 'Jeju-do',
            Country: 'KOR',
            Interpolated: false,
            Categories: ['PointOfInterestType'],
            SupplementalCategories: ['Hill'],
          },
          Relevance: 1,
        },
        {
          Place: {
            Label: 'Ilchul-ro, Goseong-ri, Seongsan-eup, Seogwipo-si, Jeju-do, KOR',
            Geometry: {
              Point: [126.92526, 33.45437],
            },
            Street: 'Ilchul-ro',
            Neighborhood: 'Seongsan-eup',
            Municipality: 'Seogwipo-si',
            Region: 'Jeju-do',
            Country: 'KOR',
            Interpolated: false,
            Categories: ['StreetType'],
          },
          Relevance: 0.7514,
        },
        {
          Place: {
            Label: 'Ilchul-ro, Seongsan-ri, Seongsan-eup, Seogwipo-si, Jeju-do, KOR',
            Geometry: {
              Point: [126.93677, 33.46237],
            },
            Street: 'Ilchul-ro',
            Neighborhood: 'Seongsan-eup',
            Municipality: 'Seogwipo-si',
            Region: 'Jeju-do',
            Country: 'KOR',
            Interpolated: false,
            Categories: ['StreetType'],
          },
          Relevance: 0.7514,
        },
      ],
    },
    {
      Summary: {
        Text: '제주특별자치도 제주시 노형동 3086-3 한식 고기구이 레스토랑 돈사돈 본점',
        FilterCountries: ['KOR'],
        MaxResults: 3,
        ResultBBox: [126.464110932529, 33.44848, 126.52194, 33.50972],
        DataSource: 'Esri',
      },

      Results: [
        {
          Place: {
            Label: '제주특별자치도 제주시 노형동 3086-3',
            Geometry: {
              Point: [126.46411, 33.47882],
            },
            AddressNumber: '3086-3',
            Neighborhood: '노형동',
            Municipality: '제주시',
            Region: '제주특별자치도',
            Country: 'KOR',
            Interpolated: false,
            Categories: ['AddressType'],
          },
          Relevance: 0.9545,
        },
      ],
    },
    {
      Summary: {
        Text: '제주특별자치도 서귀포시 성산읍 섭지코지로',
        FilterCountries: ['KOR'],
        MaxResults: 3,
        ResultBBox: [126.92135, 33.431800466968, 126.926299, 33.43847],
        DataSource: 'Esri',
      },
      Results: [
        {
          Place: {
            Label: '제주특별자치도 서귀포시 성산읍 고성리 섭지코지로',
            Geometry: {
              Point: [126.92522, 33.4318],
            },
            Street: '섭지코지로',
            Neighborhood: '성산읍',
            Municipality: '서귀포시',
            Region: '제주특별자치도',
            Country: 'KOR',
            Interpolated: false,
            Categories: ['StreetType'],
          },
          Relevance: 1,
        },
        {
          Place: {
            Label: '제주특별자치도 서귀포시 성산읍 고성리 섭지코지로',
            Geometry: {
              Point: [126.926299, 33.434321],
            },
            Neighborhood: '성산읍',
            Municipality: '서귀포시',
            Region: '제주특별자치도',
            Country: 'KOR',
            Interpolated: false,
            Categories: ['PointOfInterestType'],
            SupplementalCategories: ['Other Land Feature'],
          },
          Relevance: 1,
        },
        {
          Place: {
            Label: '제주특별자치도 서귀포시 성산읍 고성리 섭지코지로 43 섭지코지로',
            Geometry: {
              Point: [126.92135, 33.43847],
            },
            AddressNumber: '43',
            Street: '섭지코지로',
            Neighborhood: '성산읍',
            Municipality: '서귀포시',
            Region: '제주특별자치도',
            Country: 'KOR',
            Interpolated: false,
            Categories: ['PointOfInterestType'],
            SupplementalCategories: ['Korean Food'],
          },
          Relevance: 1,
        },
      ],
    },
    {
      Summary: {
        Text: '제주특별자치도 서귀포시 표선면 민속해안로 631-34 토속 박물관 제주민속촌',
        FilterCountries: ['KOR'],
        MaxResults: 3,
        ResultBBox: [126.838259799045, 33.324091, 126.842332, 33.325312650622],
        DataSource: 'Esri',
      },
      Results: [
        {
          Place: {
            Label: '제주특별자치도 서귀포시 표선면 표선리 민속해안로 631-34 제주민속촌',
            Geometry: {
              Point: [126.842332, 33.324091],
            },
            AddressNumber: '631-34',
            Street: '민속해안로',
            Neighborhood: '표선면',
            Municipality: '서귀포시',
            Region: '제주특별자치도',
            Country: 'KOR',
            Interpolated: false,
            Categories: ['PointOfInterestType'],
            SupplementalCategories: ['Historical Monument'],
          },
          Relevance: 0.9853000000000001,
        },
        {
          Place: {
            Label: '제주특별자치도 서귀포시 표선면 표선리 민속해안로 631-34',
            Geometry: {
              Point: [126.84213, 33.32455],
            },
            AddressNumber: '631-34',
            Street: '민속해안로',
            Neighborhood: '표선면',
            Municipality: '서귀포시',
            Region: '제주특별자치도',
            Country: 'KOR',
            PostalCode: '63629',
            Interpolated: false,
            Categories: ['AddressType'],
          },
          Relevance: 0.9706,
        },
        {
          Place: {
            Label: '제주특별자치도 서귀포시 표선면 표선리 민속해안로 631',
            Geometry: {
              Point: [126.83825, 33.32531],
            },
            AddressNumber: '631',
            Street: '민속해안로',
            Neighborhood: '표선면',
            Municipality: '서귀포시',
            Region: '제주특별자치도',
            Country: 'KOR',
            Interpolated: true,
            Categories: ['AddressType'],
          },
          Relevance: 0.9647,
        },
      ],
    },
    {
      Summary: {
        Text: '성산읍 오조리 3 한식 오조해녀의집',
        FilterCountries: ['KOR'],
        MaxResults: 3,
        ResultBBox: [126.922274, 33.46963641861, 126.922310184186, 33.469792],
        DataSource: 'Esri',
      },
      Results: [
        {
          Place: {
            Label: '제주특별자치도 서귀포시 성산읍 오조리 3',
            Geometry: {
              Point: [126.92231, 33.46963],
            },
            AddressNumber: '3',
            Neighborhood: '성산읍',
            Municipality: '서귀포시',
            Region: '제주특별자치도',
            Country: 'KOR',
            Interpolated: false,
            Categories: ['AddressType'],
          },
          Relevance: 0.9467,
        },
        {
          Place: {
            Label: '제주특별자치도 서귀포시 성산읍 오조리 한도로 141-13 오조해녀의집',
            Geometry: {
              Point: [126.922274, 33.469792],
            },
            AddressNumber: '141-13',
            Street: '한도로',
            Neighborhood: '성산읍',
            Municipality: '서귀포시',
            Region: '제주특별자치도',
            Country: 'KOR',
            Interpolated: false,
            Categories: ['PointOfInterestType'],
            SupplementalCategories: ['Korean Food'],
          },
          Relevance: 0.882,
        },
      ],
    },
    {
      Summary: {
        Text: 'Lotte Hotel Jeju',
        FilterCountries: ['KOR'],
        MaxResults: 3,
        ResultBBox: [126.4144, 33.2425, 126.5538312373, 33.442123712371],
        DataSource: 'Esri',
      },
      Results: [
        {
          Place: {
            Label: 'Lotte Hotel Jeju, Jeju-do, KOR',
            Geometry: {
              Point: [126.4144, 33.2425],
            },
            Region: 'Jeju-do',
            Country: 'KOR',
            Interpolated: false,
            Categories: ['PointOfInterestType', 'Hotel'],
          },
          Relevance: 1,
        },
        {
          Place: {
            Label: 'Jeju, KOR',
            Geometry: {
              Point: [126.55383, 33.38694],
            },
            Region: 'Jeju-do',
            Country: 'KOR',
            Interpolated: false,
            Categories: ['SubRegionType'],
          },
          Relevance: 0.73,
        },
        {
          Place: {
            Label: 'Jeju, Jeju-do, KOR',
            Geometry: {
              Point: [126.52945, 33.44212],
            },
            Municipality: 'Jeju-si',
            Region: 'Jeju-do',
            Country: 'KOR',
            Interpolated: false,
            Categories: ['MunicipalityType'],
          },
          Relevance: 0.73,
        },
      ],
    },
  ],
};

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
