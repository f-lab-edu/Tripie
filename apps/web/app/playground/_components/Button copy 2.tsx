// 'use client';

// import addRegionArticles from 'app/api/firebase/addRegionArticles';
// import { TRIPIE_REGION_IDS } from 'constants/tripie-country';

// export default function PlaygroundButton() {
//   const getLocation = async () => {
//     const data = await Promise.all(
//       Object.keys(TRIPIE_REGION_IDS).map(async key => await fetch(`/api/triple?geotagId=${key}`).then(v => v.json()))
//     )
//       .then(v => {
//         const resReduced = v.reduce((acc, curr) => {
//           const regionId = curr.result[0].source.regionId;
//           acc.push({ regionId, data: curr.result });
//           return acc;
//         }, []);
//         return resReduced;
//       })
//       .then(async v => {
//         const res = await Promise.all(
//           v.map(async item => await addRegionArticles(item.data, 'region-articles', item.regionId))
//         );
//         return res;
//       });
//     console.log(data);
//   };
//   return (
//     <>
//       this is playground
//       <button onClick={() => getLocation()}>puppeteer</button>
//     </>
//   );
// }
