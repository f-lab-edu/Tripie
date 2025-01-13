// 'use client';

// // import { RegionArticleData } from 'app/regions/_components/List';
// // import useCountryArticle from 'hooks/query/useCountryArticles';
// import addItem from 'app/api/firebase/add';
// import listCountryArticles from 'app/api/firebase/getArticles';
// import { useState } from 'react';
// import restaurants from '../restaurants';
// import './walking.scss';

// // http://localhost:3001/api/article-detail?regionId=23c5965b-01ad-486b-a694-a2ced15f245c&placeId=d32bee01-43ee-49ab-894e-90228e16c502
// export default function PlaygroundButton() {
//   const [value, setValue] = useState('');
//   // const regex = /\/regions\/([^\/]+)\/(restaurants)\/([^\/]+)/g;

//   // const restaraunt = restaurants[1];
//   // const match = regex.exec(restaraunt);

//   const getPage = async () => {
//     // if (match != null) {
//       // const [, regionId, , restaurantId] = match;

//       // await fetch(`/api/tripie?regionId=${regionId}&restaurantId=${restaurantId}`).then(async v => {
//       //   const data = await v.text();

//       //   const parser = new DOMParser();

//       //   const doc = parser.parseFromString(data, 'text/html');
//       //   const regex = /"__APOLLO_CACHE__\\":(.*)}<\/script>/g;

//       //   const match2 = regex.exec(doc.body.innerHTML);

//       //   if (match2 != null) {
//       //     let str = match2[1] + '}';
//       //     str = str.replaceAll(/\\"/g, '"').replaceAll('\\', '');
//       //     str = str.slice(0, str.indexOf(',"ROOT_QUERY"')) + '}';
//       //     console.log(regionId, restaurantId, JSON.parse(str));
//       //   }
//       // });

//       await Promise.all(
//         restaurants.slice(0, 10).map(async restaurant => {
//           const regex = /\/regions\/([^\/]+)\/(restaurants)\/([^\/]+)/g;
//           const match = regex.exec(restaurant);
//           if (match != null) {
//             const [, regionId, , restaurantId] = match;
//             await fetch(`/api/tripie?regionId=${regionId}&restaurantId=${restaurantId}`).then(async v => {
//               const data = await v.text();

//               const parser = new DOMParser();

//               const doc = parser.parseFromString(data, 'text/html');
//               const regex = /"__APOLLO_CACHE__\\":(.*)}<\/script>/g;

//               const match2 = regex.exec(doc.body.innerHTML);

//               if (match2 != null) {
//                 let str = match2[1] + '}';
//                 str = str.replaceAll(/\\"/g, '"').replaceAll('\\', '');
//                 str = str.slice(0, str.indexOf(',"ROOT_QUERY"')) + '}';
//                 console.log(regionId, restaurantId, JSON.parse(str));
//                 return {regionId, restaurantId, ...JSON.parse(str)};
//               }
//             });
//           }
//         })
//       );
//     }
//   };
//   // const { data } = useCountryArticle();
//   // const getLocation = async () => {
//   //   const data = await fetch(`/api/aws/lambda?place=${value}`);
//   //   console.log(data);
//   // };

//   // if (data != null) {
//   //   // console.log(
//   //   // 'data',
//   //   const urls = data
//   //     .map((places: RegionArticleData) => {
//   //       return places?.data.map(
//   //         place => `http://localhost:3001/api/article-detail?regionId=${places.regionId}&placeId=${place.id}`
//   //       );
//   //     })
//   //     .flat();
//   //   // );
//   //   console.log(urls);
//   // }

//   // const scrapArticles = async () => {
//   //   if (data != null) {
//   //     // console.log(
//   //     // 'data',
//   //     const urls = data
//   //       .map((places: RegionArticleData) => {
//   //         return places?.data.map(
//   //           place => `http://localhost:3001/api/article-detail?regionId=${places.regionId}&placeId=${place.id}`
//   //         );
//   //       })
//   //       .flat();
//   //     // );
//   //     Promise.all(urls.slice(0, 3).map((url: string) => fetch(url))).then(data => console.log(data));
//   //   }
//   //   // const data = await fetch(`/api/aws/lambda?place=${value}`);
//   //   // console.log(data);
//   // };

//   // const articles = Object.keys(data).map((key: string) => {
//   //   const regexArticle = /articles\/(.+)/;
//   //   const regexAttraction = /attractions\/(.+)/;

//   //   const regionRegex = /regions\/([0-9a-fA-F-]+)\//;
//   //   const regionId = key.match(regionRegex)[1];
//   //   // Extract the match

//   //   if (key.match(regexArticle) != null) {
//   //     const placeId = key.match(regexArticle)[1];
//   //     const body = data[key].props.pageProps.__APOLLO_CACHE__[`Article:${placeId}`].source.body;
//   //     const header = data[key].props.pageProps.__APOLLO_CACHE__[`Article:${placeId}`].source.header;
//   //     const metadata = data[key].props.pageProps.__APOLLO_CACHE__[`Article:${placeId}`].metadata;
//   //     const metadataContents = data[key].props.pageProps.__APOLLO_CACHE__[`Article:${placeId}`].source.metadata;
//   //     const seoMetadata = data[key].props.pageProps.__APOLLO_CACHE__[`Article:${placeId}`].seoMetadata;
//   //     return {
//   //       body: JSON.stringify(body),
//   //       header,
//   //       id: regionId,
//   //       metadata,
//   //       metadataContents,
//   //       placeId: placeId,
//   //       seoMetadata,
//   //     };
//   //   }

//   //   if (key.match(regexAttraction) != null) {
//   //     const placeId = key.match(regexAttraction)[1];
//   //     const source = data[key].props.pageProps.__APOLLO_CACHE__[`Poi:${placeId}`].source;
//   //     return { source: JSON.stringify(source), placeId: placeId, id: regionId };
//   //   }
//   // });

//   // console.log({ id: articles[0].id, articles });

//   const addArticle = async () => {
//     const data = await addItem({ id: articles[0].id, articles }, 'article-details');
//     console.log(data);
//   };

//   const addAttraction = async () => {
//     const data = await addItem({ id: articles[0].id, articles }, 'attraction-details');
//     console.log(data);
//   };

//   const getArticles = async () => {
//     let articleData = await listCountryArticles('article-details');
//     const regex = /"label":"(.*?)","href":"\/regions\/(.*?)"/;
//     const regexInLink = /inlink\?path=(.+)/g;
//     const regexArticles = /articles\/(.+)/;
//     const regexRestaurants = /restaurants\/(.+)/;
//     const regexAttractions = /attractions\/(.+)/;

//     // const data = articleData.map(({ articles }) => articles).flat();

//     // const sorted = data.reduce(
//     //   (acc, curr) => {
//     //     const match = curr.body.match(regex);
//     //     const matchInLInk = curr.body.match(regexInLink);
//     //     if (match == null || matchInLInk != null) {
//     //       return acc;
//     //     } else {
//     //       const matchRestaurant = curr.body.match(regexRestaurants);
//     //       const matchArticle = curr.body.match(regexArticles);
//     //       const matchAttraction = curr.body.match(regexAttractions);
//     //       if (matchRestaurant != null) {
//     //         acc.restaurants.push({ label: match[1], href: 'regions/' + match[2] });
//     //       } else if (matchArticle != null) {
//     //         acc.articles.push({ label: match[1], href: 'regions/' + match[2] });
//     //       } else if (matchAttraction != null) {
//     //         acc.attraction.push({ label: match[1], href: 'regions/' + match[2] });
//     //       }
//     //     }
//     //     return acc;
//     //   },
//     //   { restaurants: [], articles: [], attraction: [] }
//     // );

//     // const attractions = sorted.attraction.map(v => v.href);

//     // console.log(attractions);

//     // const sortedAttractions = attractions.reduce((acc, curr) => {
//     //   const regexRegionId = /regions\/(.*?)\/attractions\/(.*?)/;
//     //   const regionId = curr.match(regexRegionId)[1];

//     //   if (regionId != null) {
//     //     if (acc[regionId] == null) {
//     //       acc[regionId] = [curr];
//     //     } else {
//     //       acc[regionId].push(curr);
//     //     }
//     //     return acc;
//     //   }
//     //   // const attractionId = curr.match(regexAttractions)[1];
//     // }, {});

//     // console.log(sortedAttractions);
//   };

//   return (
//     <>
//       <h1>this is playground</h1>
//       <input value={value} onChange={e => setValue(e.target.value)} placeholder="구글 장소 검색" />
//       <button onClick={() => addArticle()}>puppeteer</button>
//       <button onClick={() => addAttraction()}>add attraction</button>
//       <button onClick={() => getArticles()}>get articles</button>
//       <button onClick={() => getPage()}>get page</button>
//     </>
//   );
// }
