'use client';
import useFunnel from 'hooks/useFunnel';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

const Chat = () => {
  const funnel = useFunnel<{
    A: { a?: string; b?: string };
    B: { a: string; b?: string };
    C: { a: string; b: string };
  }>({
    id: 'main-funnel',
    initial: {
      step: 'A',
      context: {},
    },
  });

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  // router.push(pathname + '?' + createQueryString(options.id, 'desc'));
  return (
    <>
      <div>
        <h1>A Step</h1>
        {JSON.stringify(funnel)}
        <button onClick={() => router.push(pathname + '?' + createQueryString(funnel?.id, funnel?.initial?.step))}>
          Next
        </button>
        {/* <button onClick={() => funnel.history.push('B', { a: 'a' })}>Next</button> */}
      </div>
      {/* <funnel.Render
        A={({ history }) => (
          <div>
            <h1>A Step</h1>
            <button onClick={() => history.push('B', { a: 'a' })}>Next</button>
          </div>
        )}
        B={({ context, history }) => (
          <div>
            <h1>B Step</h1>a : {context.a}
            <BFunnel a={context.a} onNext={b => history.push('C', { b })} />
          </div>
        )}
        C={({ context }) => (
          <div>
            <h1>C Step</h1>
            <p>a: {context.a}</p>
            <p>b: {context.b}</p>
          </div>
        )}
      /> */}
    </>
  );
};

export default Chat;
