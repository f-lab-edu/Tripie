import { doc, getDoc } from 'firebase/firestore';
import db from '../../../firebase/store';

const dbName = 'user-token';

const getTokenUse = async (id: string) => {
  try {
    // Create a document reference
    const docRef = doc(db, dbName, id);

    // Fetch the document data
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // Document data
      return docSnap.data();
    } else {
      // Document does not exist
      console.error(`Document with ID ${id} does not exist`);
      return undefined;
    }
  } catch (e) {
    console.error('Error fetching document: ', e);
  }
};

export default getTokenUse;
