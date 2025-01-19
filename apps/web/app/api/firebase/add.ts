import { doc, setDoc } from 'firebase/firestore';
import db from '../../../firebase/store';

const addItem = async (items: any, dbName: string) => {
  try {
    const docRef = await setDoc(doc(db, dbName, items?.id), {
      ...items,
    });

    console.log('Document written with ID: ', docRef);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

export default addItem;
