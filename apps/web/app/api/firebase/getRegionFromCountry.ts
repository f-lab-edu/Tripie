import { query, where } from 'firebase/firestore';

import { collection } from 'firebase/firestore';
import db from 'firebase/store';

const getRegionFromCountry = async (preference: string[]) => {
  const citiesRef = collection(db, 'cities');
  try {
    const q = query(citiesRef, where('regions', 'array-contains-any', preference));
    return q;
  } catch (e) {
    console.error('Error listing document: ', e);
  }
};

export default getRegionFromCountry;
