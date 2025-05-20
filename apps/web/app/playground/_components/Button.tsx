'use client';

import firestoreService from 'app/api/firebase';

// import api from 'utils/ky';

// import addImage from 'app/api/cloudinary/addImage';

export default function PlaygroundButton() {
  const getPage = async () => {
    // await addImage(
    //   'https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/6f50e645-a145-4b59-8b10-8fa0795c353c.jpeg'
    // );
    // await api
    //   .post(`cloudinary`, {
    //     json: {
    //       imageUrl:
    //         'https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/6f50e645-a145-4b59-8b10-8fa0795c353c.jpeg',
    //     },
    //   })
    //   .json();
    // const data = await firestoreService.getList('region-articles2');
    const data = await firestoreService.getList('region-articles');

    // https://res.cloudinary.com/dbzzletpw/image/upload/v1745813635/arrow_x0nsyq.png
    const newData = data.map(item => ({
      ...item,
      data: item.data.map((data: string) =>
        JSON.parse(
          JSON.stringify(data).replaceAll(
            'media.triple.guide/triple-cms/',
            'res.cloudinary.com/dbzzletpw/image/upload/e_blur:2000,q_1,'
          )
        )
      ),
    }));
    console.log(newData);
    // await Promise.all(
    //   newData.map(async item => {
    //     await firestoreService.addItem('region-articles-test', { ...item, id: item.regionId });
    //   })
    // );
    // const parsed = res.map(item => ({
    //   ...item,
    //   articles: item.articles.map(article => {
    //     if (article.body === str) {
    //       return { ...article, body: JSON.parse(replacedStr) };
    //     }
    //     try {
    //       return { ...article, body: JSON.parse(article.body) };
    //     } catch (e) {
    //       return `ERROR: ${e}`;
    //     }
    //   }),
    // }));
    // const arrToObjBody = parsed.map(item => {
    //   const { articles } = item;
    //   const updateArticles = articles.map(article => {
    //     const arrToObj = {};
    //     article?.body?.forEach((val, index) => {
    //       arrToObj[index] = {
    //         type: val.type,
    //         value:
    //           val?.value == null
    //             ? null
    //             : JSON.stringify(val?.value).replaceAll(
    //                 'media.triple.guide/triple-cms',
    //                 'res.cloudinary.com/dbzzletpw/image/upload'
    //               ),
    //       };
    //     });
    //     return { ...article, body: arrToObj };
    //   });
    //   return { ...item, articles: updateArticles };
    // });
    // console.log('arrToObjBody', arrToObjBody);
    // await Promise.all(
    //   arrToObjBody.map(async item => {
    //     await firestoreService.addItem('article-detail4', item);
    //   })
    // );
  };

  return (
    <>
      <h1>this is playground</h1>
      <button onClick={() => getPage()}>get page</button>
    </>
  );
}
