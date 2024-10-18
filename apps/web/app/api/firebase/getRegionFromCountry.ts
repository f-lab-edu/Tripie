import { query, where } from 'firebase/firestore';

import { collection } from 'firebase/firestore';
import db from 'firebase/store';

const getRegionFromCountry = async (regions: string[]) => {
  const citiesRef = collection(db, 'cities');
  try {
    const q = query(citiesRef, where('regions', 'array-contains-any', regions));
    return q;
  } catch (e) {
    console.error('Error listing document: ', e);
  }
};

export default getRegionFromCountry;
