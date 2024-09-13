import { doc, setDoc } from 'firebase/firestore';
import db from 'firebase/store';

const addItem = async (items: any) => {
  try {
    const docRef = await setDoc(doc(db, 'places', items?.place_id), {
      ...items,
    });

    console.log('Document written with ID: ', docRef);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

export default addItem;
