'use client';

import incrementUsedGptToken from 'app/api/gpt/route';
import { useSession } from 'next-auth/react';

export default function PlaygroundButton() {
  const { data } = useSession();

  const getPage = async () => {
    if (data?.user) {
      const res = await incrementUsedGptToken({ data }).then(v => v);
      console.log('incrementUsedGptToken', res);
    }
  };

  return (
    <>
      <h1>this is playground</h1>
      <button onClick={() => getPage()}>get page</button>
    </>
  );
}
