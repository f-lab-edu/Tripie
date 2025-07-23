// // 'use client';
'use client';

// import { Globe } from '@tripie-pyotato/design-system/@components';

// import db from 'firebase/config';

// import { initAdmin } from 'firebase/firebaseAdmin';

// import db from 'firebase/store';

// import { AnimatedText } from '@tripie-pyotato/design-system/@components';
// import { Stack } from '@tripie-pyotato/design-system/@core';

// import db from 'firebase/store';

// import { Metadata } from 'next';

// export const generateMetadata = async (): Promise<Metadata> => {
//   return {
//     title: 'Metadata Test Page',
//     description: 'This should appear in the <head>!',
//   };
// };

// 'use server';

// export const dynamic = 'force-static';

// const Playground = async () => {
//   // const snapshot = await db.collection('region-articles2').get();

//   // const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//   // console.log('doc', docs);
//   await new Promise(r => setTimeout(r, 10_000));

//   return (
//     <>
//       <div>Hello world</div>
//       playground
//       {/* <pre>{JSON.stringify(docs[0])}</pre> */}
//     </>
//     // <Stack alignItems="center" display="inline-flex">
//     //   <div>Hello from test page!</div>
//     //   <AnimatedText.Jump>????</AnimatedText.Jump>
//     // </Stack>
//     // <Stack direction="column">
//     //   <AnimatedText.Jump>jump 1</AnimatedText.Jump>
//     //   <AnimatedText.Jump>jump 2</AnimatedText.Jump>
//     //   <AnimatedText.Jump>jump 3</AnimatedText.Jump>
//     //   <AnimatedText.Jump>jump 4</AnimatedText.Jump>
//     // </Stack>
//   );
// };

// export default Playground;

// 'use server';

// const Playground = () => {
//   // const res = await fetch(`${API.BASE_URL}/api/hello`, { cache: 'no-store' }); // or ISR if needed
//   // const data = await res.json();

//   return (
//     <>
//       playground
//       <Globe />
//       {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
//     </>
//   );
// };

// import { headers } from 'next/headers';

const selected = {
  continent: 'North America',
  country: 'Canada',
  city: {
    all: [
      'Alberta',
      'British Columbia',
      'Manitoba',
      'New Brunswick',
      'Newfoundland and Labrador',
      'Northwest Territories',
      'Nova Scotia',
      'Nunavut',
      'Ontario',
      'Prince Edward Island',
      'Quebec',
      'Saskatchewan',
      'Yukon Territory',
    ],
    selected: [
      'Alberta',
      'British Columbia',
      'Manitoba',
      'New Brunswick',
      'Newfoundland and Labrador',
      'Northwest Territories',
      'Nova Scotia',
      'Nunavut',
      'Ontario',
      'Prince Edward Island',
      'Quebec',
      'Saskatchewan',
      'Yukon Territory',
    ],
  },
  duration: '8/20/2025 12:00:00 AM ~ 8/22/2025 11:59:59 PM',
  companion: 'PARTNER',
  preference: 'MUST_TOURIST_ATTRACTION,VACATION_VIBES,NATURE_FRIENDLY',
};

// const handleSubmit = async (id: string) => {
// const res: TripPlannerSuccessReponse = await api.post('openai', { json: { ...selected, id } }).json();

// console.log(res);
// const user = await firestoreService.getItem(DB_NAME, id);
// if (user == null) {
//   return null;
// }

// return await firestoreService.getListWithIds('continentl').then(async () => {
// const res: TripPlannerSuccessReponse = await api.post('openai', { json: { ...chatItems, id } }).json();

// if (res?.data == null) {
//   return null;
// }

// return '053qXJ2nIE8163bZpykY';
// return res?.data?.id;
// });
// };

const Playground = () => {
  // const user = useSession();
  // return <LoadingContents context={selected} />;
  return (
    <pre>
      {JSON.stringify(selected)}
      {/* playground */}
      {/* <button onClick={() => handleSubmit(user.data.user.id)}>send</button> */}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </pre>
  );
};

export default Playground;
