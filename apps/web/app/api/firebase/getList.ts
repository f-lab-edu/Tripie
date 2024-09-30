import { collection, getDocs } from 'firebase/firestore';
import db from 'firebase/store';
import { Country } from 'hooks/useCountries';

const listItem = async (docName: string) => {
  try {
    const querySnapshot = await getDocs(collection(db, docName));
    const countries = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })) as Country[];
    return countries;
  } catch (e) {
    console.error('Error listing document: ', e);
  }
};

export default listItem;
