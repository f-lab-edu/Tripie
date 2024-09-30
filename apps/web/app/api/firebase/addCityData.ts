import { doc, setDoc } from 'firebase/firestore';
import db from 'firebase/store';

const addCityData = async (items: any, dbName: string) => {
  try {
    const docRef = await setDoc(doc(db, dbName, items?.name), {
      ...items,
    });

    console.log('Document written with ID: ', docRef);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

export default addCityData;
