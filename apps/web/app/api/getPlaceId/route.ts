import {
  AFRICA,
  ANTARCTICA,
  ASIA,
  EUROPE,
  NORTH_AMERICA,
  OCEANIA_AUSTRALIA,
  SOUTH_AMERICA,
} from 'app/playground/countries/continents';
import addItem from '../firebase/add';

export async function getPlaceId({ searchQuery }: { searchQuery: string }) {
  try {
    const { Place } = (await google.maps.importLibrary('places')) as google.maps.PlacesLibrary;

    const request = {
      textQuery: searchQuery,
      fields: ['displayName', 'location'],

      maxResultCount: 1,

      useStrictTypeFiltering: false,
    };
    //@ts-ignore
    const { places } = await Place.searchByText(request);

    if (places.length > 0) {
      const placeInfo = places.map(place => {
        const continent = () => {
          const locatedContinent: string[] = [];
          const continents = {
            0: 'Africa',
            1: 'Asia',
            2: 'Europe',
            3: 'North America',
            4: 'South America',
            5: 'Oceania Australia',
            6: 'Antarctica',
          };
          [AFRICA, ASIA, EUROPE, NORTH_AMERICA, SOUTH_AMERICA, OCEANIA_AUSTRALIA, ANTARCTICA].forEach(
            (continent, index) =>
              new Set(continent.split('\n')).has(place.displayName as string) &&
              locatedContinent.push(continents[index as keyof typeof continents])
          );
          return locatedContinent;
        };
        return {
          id: place.id,
          name: place.displayName,
          location: place.location?.toJSON(),
          continent: continent(),
        };
      })[0];

      addItem({ ...placeInfo }, 'countries');
      return placeInfo;
    }
  } catch (error) {
    console.log(error);
  }
}
