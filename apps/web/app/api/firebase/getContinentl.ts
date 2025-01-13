import { collection, getDocs } from 'firebase/firestore';
// import db from 'firebase/store';
import db from '../../../firebase/store';

export type Continentl = {
  code: string;
  'country-code': number;
  official_language: string[];
  'flag-image-svg': string;
  region: string;
  coordinates: string[];
  'flag-image': string[];
  current_time: string;
  capital: string;
  current_time_24hr: string;
  name: string;
  states: string[];
  id: string;
};

const getContinentlList = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'continentl'));
    const countries = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })) as Continentl[];
    return countries;
  } catch (e) {
    console.error('Error listing document: ', e);
  }
};

export default getContinentlList;
