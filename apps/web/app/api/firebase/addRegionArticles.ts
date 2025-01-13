import { doc, setDoc } from 'firebase/firestore';
import db from 'firebase/store';

const addRegionArticles = async (items: any, dbName: string, id: string) => {
  try {
    const docRef = await setDoc(doc(db, dbName, id), { data: items, regionId: id });

    console.log('Document written with ID: ', docRef);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

export default addRegionArticles;
