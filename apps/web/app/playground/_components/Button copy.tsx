// 'use client';

// import addRegionArticles from 'app/api/firebase/addRegionArticles';
// import { TRIPIE_REGION_IDS } from 'constants/tripie-country';

// export default function PlaygroundButton() {
//   const getLocation = async () => {
//     // const key = 'b676e8f0-a9f0-41a2-9bf4-262010976158';
//     // const kagoshima = await fetch(`/api/triple?geotagId=${key}`)
//     //   .then(v => v.json())
//     //   .then(async v => {
//     //     await addRegionArticles(v.result, 'region-articles', key);
//     //   });

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
//     // .then(v => {
//     //     return v.reduce((acc, curr) => {
//     //       acc = [...acc, {...curr.result}];
//     //       return acc;
//     //     }, []);
//     //   })
//     //   .then(async v => {
//     //     // console.log(v);
//     //     // return v;
//     //     const res = await Promise.all(v.map(async item => await addItem(item, 'region-articles')));
//     //     return res;
//     //   });

//     // console.log(kagoshima);

//     // await Promise.all(items.map(async item => await addRegionArticles(item, 'region-articles', item?.id)));
//   };
//   return (
//     <>
//       this is playground
//       <button onClick={() => getLocation()}>puppeteer</button>
//     </>
//   );
// }
