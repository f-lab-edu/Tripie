import { collection, getDocs } from '@firebase/firestore';
import { AttractionData } from 'models/Attraction';
import db from '../../../firebase/store';

const getAttractionDetails = async (docName: string, id: string, attractionId: string) => {
  try {
    const querySnapshot = await getDocs(collection(db, docName, id, 'attractions'));

    const filtered: AttractionData[] = [];
    querySnapshot.forEach(doc => {
      if (doc.data().regionId === id && doc.data().attractionId === attractionId) {
        filtered.push(doc.data() as AttractionData);
      }
    });

    if (filtered.length > 0) {
      const { data, ...others } = filtered[0];
      return { data: JSON.parse(data), ...others };
    }
  } catch (e) {
    console.error('Error listing document: ', e);
  }
};

export default getAttractionDetails;
