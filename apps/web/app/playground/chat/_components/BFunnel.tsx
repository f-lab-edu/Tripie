import useFunnel from 'hooks/useFunnel';

interface Props {
  a: string;
  onNext: (b: string) => void;
}

export function BFunnel({ a, onNext }: Props) {
  const funnel = useFunnel<{
    B1: { hello?: string; world?: string };
    B2: { hello: string; world?: string };
    B3: { hello: string; world: string };
  }>({
    id: 'b-funnel',
    initial: {
      step: 'B1',
      context: {},
    },
  });
  return (
    <>
      {JSON.stringify(funnel.historySteps)}
      <funnel.Render
        B1={({ history }) => (
          <div>
            <h2>B1 Step</h2>
            <p>previous a value: {a}</p>
            <button onClick={() => history.push('B2', { hello: 'Hello' })}>Next</button>
          </div>
        )}
        B2={({ context, history }) => (
          <div>
            <h2>B2 Step</h2>
            <p>previous a value: {a}</p>
            <p>previous hello value: {context.hello}</p>
            <button onClick={() => history.push('B3', { world: 'World' })}>Next</button>
          </div>
        )}
        B3={({ context }) => (
          <div>
            <h2>B3 Step</h2>
            <p>previous a value: {a}</p>
            <p>previous hello value: {context.hello}</p>
            <p>previous world value: {context.world}</p>
            <button onClick={() => onNext(`${context.hello} ${context.world} from BFunnel`)}>Next</button>
          </div>
        )}
      />
    </>
  );
}
