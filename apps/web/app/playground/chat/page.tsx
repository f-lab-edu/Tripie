'use client';

import useFunnel from 'hooks/useFunnel';
import { BFunnel } from './_components/BFunnel';

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
  return (
    <funnel.Render
      A={({ context, history }) => (
        <div>
          <h1>A Step</h1>
          <h3>{JSON.stringify(context)}</h3>
          <button onClick={() => history.push('B', { a: 'a' })}>Next</button>
        </div>
      )}
      B={({ context, history }) => (
        <div>
          <h1>B Step</h1>
          <p>a: {context.a}</p>
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
    />
  );
};

export default Chat;
