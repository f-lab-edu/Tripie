'use client';

export default function PlaygroundButton() {
  const getPage = async () => {
    // if (data?.user) {
    //   const res = await incrementUsedGptToken({ data }).then(v => v);
    //   console.log('incrementUsedGptToken', res);
    // }
  };

  return (
    <>
      <h1>this is playground</h1>
      <button onClick={() => getPage()}>get page</button>
    </>
  );
}
