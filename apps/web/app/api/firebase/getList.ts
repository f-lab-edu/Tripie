import { collection, getDocs } from 'firebase/firestore';
import db from 'firebase/store';

const listItem = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'placeId'));
    const countries = querySnapshot.docs.map(doc => ({ ...doc.data(), placeId: doc.data()?.id, id: doc.id }));
    console.log(countries);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

export default listItem;
