import { collection, getDocs } from 'firebase/firestore';
import db from 'firebase/store';
import { AttractionArticle } from 'models/Attraction';

type RestaurantData = {
  restaurantId: string;
  data: AttractionArticle;
  id: string;
  regionId: string;
};

const getRestaurantDetails = async (docName: string, id: string, articleId: string) => {
  try {
    const querySnapshot = await getDocs(collection(db, docName, id, 'restaurants'));
    const filtered: RestaurantData[] = [];

    querySnapshot.forEach(doc => {
      if (doc.data().regionId === id && doc.data().restaurantId === articleId) {
        const data = doc.data()[`Poi:${articleId}`];
        filtered.push({
          restaurantId: doc.data().restaurantId,
          id: doc.data().id,
          regionId: doc.data().regionId,
          data,
        } as RestaurantData);
      }
    });

    if (filtered.length > 0) {
      const { data, ...others } = filtered[0];
      // console.log('getRestaurantDetails',data);
      return { data, ...others };
    }
  } catch (e) {
    console.error('Error listing document: ', e);
  }
  return { restaurantId: null, data: null, id: null, regionId: null };
};

export default getRestaurantDetails;
