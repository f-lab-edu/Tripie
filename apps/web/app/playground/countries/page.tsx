'use client';

import addItem from 'app/api/firebase/add';
import listItem from 'app/api/firebase/getList';
import { getPlaceId } from 'app/api/getPlaceId/route';
import { useCallback, useState } from 'react';
import filtered from '../chat/_components/Region/countries';

const Countries = () => {
  const [countries, setCountries] = useState<{ name: string; location: { lat: string; lang: string }; id: string }[]>(
    []
  );
  const addCountriesDB = useCallback(() => {
    Object.keys(filtered).forEach(key => addItem({ id: key, ...filtered[key] }, 'countries'));
  }, [filtered]);

  const getAllCountries = useCallback(() => {
    listItem('countries').then(res => {
      console.log(res);
      setCountries(res);
    });
  }, []);

  const addAllCountries = () => {
    const keys = Object.keys(filtered);
    keys.forEach(key => getPlaceId({ searchQuery: filtered[key].capitalized }));
  };

  return (
    <>
      <button onClick={addCountriesDB}>add country names to database</button>
      <button onClick={addAllCountries}>add country names to database</button>
      <button onClick={getAllCountries}>get country names from database</button>

      <ul>
        {countries.map(country => (
          <li key={country.id}>{country.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Countries;
