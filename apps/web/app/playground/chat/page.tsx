'use client';

function Row({ isHighlighted }) {
  return <div>{isHighlighted ? 'high-lighted' : null} step</div>;
}

const start = {
  step: 'A',
  context: { initial: 'hehe' },
  history: {},
  index: 0,
  historySteps: [{ step: 'A', context: { initial: 'hehe' } }],
};

const next = {
  step: 'B',
  context: { initial: 'hehe', a: 'a' },
  history: {},
  index: 1,
  historySteps: [
    { step: 'A', context: { initial: 'hehe' } },
    { step: 'B', context: { initial: 'hehe', a: 'a' } },
  ],
};

const res = {
  step: 'C',
  context: { initial: 'hehe', a: 'a', b: 'Hello World from BFunnel' },
  history: {},
  index: 2,
  historySteps: [
    { step: 'A', context: { initial: 'hehe' } },
    { step: 'B', context: { initial: 'hehe', a: 'a' } },
    { step: 'C', context: { initial: 'hehe', a: 'a', b: 'Hello World from BFunnel' } },
  ],
};

const Chat = () => {
  // {"step":"A","context":{},"history":{},"index":0,"historySteps":[{"step":"A","context":{}}]}

  return (
    <>
      {/* <List
        items={steps}
        renderItem={(product, isHighlighted) => (
          <Row key={product.id} title={product?.step} isHighlighted={isHighlighted} />
        )}
      /> */}
    </>
  );
};

export default Chat;
