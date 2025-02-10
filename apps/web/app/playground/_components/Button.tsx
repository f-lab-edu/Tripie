'use client';

export default function PlaygroundButton({ data }: { data: any }) {
  const getPage = async () => {
    // if (data?.user) {
    //   const res = await incrementUsedGptToken({ data }).then(v => v);
    //   console.log('incrementUsedGptToken', res);
    // }
    // await Promise.all(
    //   data.map(async item => {
    //     await firestoreService.addItem('continentl-with-blur-data', item);
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
