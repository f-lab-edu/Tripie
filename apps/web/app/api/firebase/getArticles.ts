import { collection, getDocs } from 'firebase/firestore';
import db from 'firebase/store';

const listCountryArticles = async (docName: string) => {
  try {
    const querySnapshot = await getDocs(collection(db, docName));
    const countryArticles = querySnapshot.docs.map(doc => doc.data());
    return countryArticles;
  } catch (e) {
    console.error('Error listing document: ', e);
  }
};

export default listCountryArticles;
