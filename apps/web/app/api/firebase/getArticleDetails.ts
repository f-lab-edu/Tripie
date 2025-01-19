import { collection, getDocs } from 'firebase/firestore';
import { TripieArticle } from 'models/Triple';
import db from '../../../firebase/store';

const getArticleDetails = async (docName: string, id: string, articleId: string) => {
  try {
    const querySnapshot = await getDocs(collection(db, docName));
    const countryArticles = querySnapshot.docs.map(doc => doc.data());

    const { articles } = countryArticles.filter(article => article.id === id)[0];

    const filtered = articles.filter((article: TripieArticle) => article.placeId === articleId)?.[0];
    if (filtered != null) {
      const { body, ...others } = filtered;
      return { body: JSON.parse(body), ...others };
    } else {
      const filtered = articles.filter((item: TripieArticle) => item.articleId === articleId)?.[0];
      const { body, ...others } = filtered;
      return { body: JSON.parse(body), ...others };
    }
  } catch (e) {
    console.error('Error listing document: ', e);
  }
};

export default getArticleDetails;
