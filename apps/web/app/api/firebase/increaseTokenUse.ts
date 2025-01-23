import { doc, increment, updateDoc } from 'firebase/firestore';
import db from '../../../firebase/store';

const dbName = 'user-token';

const increaseTokenUse = async (id: string) => {
  try {
    const docRef = doc(db, dbName, id);

    // Increment the `usedTokens` field by 1
    await updateDoc(docRef, {
      usedTokens: increment(1),
    });
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

export default increaseTokenUse;
