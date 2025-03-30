'use client';

import addImage from 'app/api/cloudinary/addImage';

export default function PlaygroundButton() {
  const getPage = async () => {
    // const res = await upload(
    //   'https://media.triple.guide/triple-cms/c_fill,f_auto,h_256,w_256/89c590e0-e026-444e-9307-684d22e7cc42.jpeg',
    //   {
    //     apiKey: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    //     cloudinaryName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    //     secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
    //   }
    // );

    // const res = await getTripPlan({
    //   duration: '3/27/2025 12:00:00 AM ~ 3/28/2025 11:59:59 PM',
    //   city: { selected: ['Tainan'], all: ['Kaohsiung', 'Tainan'] },
    //   country: 'Taiwan',
    //   companion: 'FRIENDS',
    //   preference: 'SNS_HOT',
    //   continent: 'ASIA',
    // });

    // console.log('PlaygroundButton', res);

    // https://res.cloudinary.com/dbzzletpw/image/upload/v1743150199/github.png
    // const res = await getImage('a3f30646-f436-418f-b41f-693ff4555706');
    const res = await addImage('https://tripie-mauve.vercel.app/noise.png');
    console.log('PlaygroundButton', res);
    // const blurDataURLs = await Promise.all(
    //   data.map(async contents => {
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
    // console.log('blurDataURLs', blurDataURLs);
    // const res = await Promise.all(
    //   blurDataURLs.map(async item => {
    //     const articles = await Promise.all(
    //       item.articles.map(async v => {
    //         const body = v.body;
    //         const withUrl = await Promise.all(
    //           body.map(async v1 => {
    //             if (v1.type === 'embedded') {
    //               return {
    //                 ...v1,
    //                 value: await Promise.all(
    //                   v1.value.entries.map(async entry => {
    //                     return await Promise.all(
    //                       entry.map(async item => {
    //                         if (item.type === 'images') {
    //                           return {
    //                             ...item,
    //                             value: await Promise.all(
    //                               item.value.images.map(async image => {
    //                                 const blurDataURL = await fetch(
    //                                   `http://localhost:3000${API.BASE}${API.BLUR_IMAGE}?url=${image.sizes?.full?.url}`
    //                                 ).then(res => res.json());

    //                                 return {
    //                                   ...image,
    //                                   blurDataURL,
    //                                 };
    //                               })
    //                             ),
    //                           };
    //                         }
    //                         return item;
    //                       })
    //                     );
    //                   })
    //                 ),
    //               };
    //             }

    //             if (v1.type === 'pois') {
    //               return {
    //                 ...v1,
    //                 value: {
    //                   pois: await Promise.all(
    //                     v1.value.pois.map(async poi => {
    //                       return {
    //                         ...poi,
    //                         source: {
    //                           ...poi.source,
    //                           image: {
    //                             ...poi.source.image,
    //                             blurDataURL: await fetch(
    //                               `http://localhost:3000${API.BASE}${API.BLUR_IMAGE}?url=${poi.source.image.sizes.full?.url}`
    //                             ).then(res => res.json()),
    //                           },
    //                         },
    //                       };
    //                     })
    //                   ),
    //                 },
    //               };
    //             }
    //             if (v1.type === 'images') {
    //               return {
    //                 ...v1,
    //                 value: {
    //                   images: await Promise.all(
    //                     v1.value.images.map(async image => {
    //                       return {
    //                         ...image,
    //                         blurDataURL: await fetch(
    //                           `http://localhost:3000${API.BASE}${API.BLUR_IMAGE}?url=${image.sizes.full?.url}`
    //                         ).then(res => res.json()),
    //                       };
    //                     })
    //                   ),
    //                 },
    //               };
    //             }
    //             return v1;
    //           })
    //         );
    //         // return { ...v, body: JSON.stringify(withUrl) };
    //         return { ...v, body: withUrl };
    //       })
    //     );
    //     return { ...item, articles };
    //   })
    // );

    // console.log('res', res);

    // await Promise.all(
    //   res.map(async item => {
    //     await firestoreService.addItem('article', { ...item, articles: [] });
    //   })
    // );

    // await Promise.all(
    //   res.map(async item => {
    //     await firestoreService.addItem('article', {
    //       ...item,
    //       articles: item.articles.map(article => ({ ...article, body:  })),
    //     });
    //   })
    // );

    console.log('done');
  };

  // console.log('data', data);
  return (
    <>
      <h1>this is playground</h1>
      <button onClick={() => getPage()}>get page</button>
    </>
  );
}
