import { CONTINENTS } from 'constants/continents';
import { ContinentKeys } from 'hooks/useCountries';
import useFunnel from 'hooks/useFunnel';
import { ContinentStep } from './Continents/Continents';
import { Countries } from './Countries/Countries';

interface Props {
  country?: string;
  onNext: (b: string) => void;
}

export function LocationFunnel({ country, onNext }: Props) {
  const funnel = useFunnel<{
    CONTINENT: { continent?: ContinentKeys; country?: string; city?: string };
    COUNTRY: { continent: ContinentKeys; country?: string; city?: string };
    CITY: { continent: ContinentKeys; country: string; city?: string };
  }>({
    id: 'location',
    initial: {
      step: 'CONTINENT',
      context: {},
    },
  });
  return (
    <funnel.Render
      CONTINENT={({ context, history }) => (
        <ContinentStep
          context={funnel}
          continent={context.continent}
          onNext={(selected: keyof typeof CONTINENTS) => history.push('COUNTRY', { continent: selected })}
        />
      )}
      COUNTRY={({ context, history }) => (
        <Countries
          onNext={(selected: string) => history.push('CITY', { country: selected })}
          continent={context.continent}
        />
      )}
      CITY={({ context }) => (
        <div>
          <h1>City</h1>
          <button
            onClick={() => onNext(`${context.continent} > ${context.country} > ${context.city} from LocationFunnel`)}
          >
            Next
          </button>
        </div>
      )}
    />
  );
}
