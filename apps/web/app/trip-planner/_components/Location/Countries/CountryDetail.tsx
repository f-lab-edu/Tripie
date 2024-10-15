import { Continentl } from 'app/api/firebase/getContinentl';

const Detail = ({ data }: { data: Continentl }) => {
  return (
    <>
      수도: {data.capital}
      지역:
      {data.states != null ? (
        <ul>
          {data.states.map((state: string) => (
            <li key={state}>{state}</li>
          ))}
        </ul>
      ) : null}
      나라 코드 : {data.code}
      지역 : {data.region}
      공식 언어:
      {data.official_language != null ? (
        <ul>{data?.official_language.map((language: string) => <li key={language}>{language}</li>)}</ul>
      ) : null}
      국기:
      {data['flag-image']?.[0] != null ? <img src={data['flag-image'][0]} alt={data['flag-image'][0]} /> : null}
    </>
  );
};

const CountryDetail = ({ selectedCountry, data }: { selectedCountry: string; data: Continentl | Continentl[] }) => {
  if (data == null) {
    return <>data is null</>;
  }

  return (
    <>
      <div>{selectedCountry}</div>
      <Detail data={Array.isArray(data) ? data[0] : data} />
    </>
  );
};
export default CountryDetail;
