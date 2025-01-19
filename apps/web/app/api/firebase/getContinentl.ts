import { collection, getDocs } from 'firebase/firestore';
import { Continentl } from 'models/Continentl';
import db from '../../../firebase/store';

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
