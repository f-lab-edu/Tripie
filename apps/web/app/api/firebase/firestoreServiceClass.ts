import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  increment as firebaseIncrement,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from 'firebase/firestore/lite';

import { AttractionData } from 'models/Attraction';
import { RestaurantData } from 'models/Restaurant';
import { TripieArticle } from 'models/Triple';

class FirestoreService {
  private readonly db;

  constructor(dbInstance: any) {
    this.db = dbInstance;
  }

  // document 추가 및 업데이트
  async addItem(collectionName: string, item: any): Promise<void> {
    try {
      const docRef = doc(this.db, collectionName, item.id);
      await setDoc(docRef, item);
    } catch (error) {
      console.error('Error adding document:', error);
    }
  }

  // 특정 document 가져오기
  async getItem(collectionName: string, itemId: string): Promise<any> {
    try {
      const docRef = doc(this.db, collectionName, itemId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error fetching document:', error);
    }
  }

  // document 리스트 가져오기
  async getList(collectionName: string): Promise<any[]> {
    try {
      const querySnapshot = await getDocs(collection(this.db, collectionName));
      return querySnapshot.docs.map(doc => doc.data());
    } catch (error) {
      console.error('Error fetching documents list:', error);
      return [];
    }
  }

  // id 포함하여 document list 가져오기
  async getListWithIds(collectionName: string): Promise<any[]> {
    try {
      const querySnapshot = await getDocs(collection(this.db, collectionName));
      return querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    } catch (error) {
      console.error('Error fetching documents list with IDs:', error);
      return [];
    }
  }

  // article detail 가져오기
  async getArticleDetails(collectionName: string, id: string, articleId: string): Promise<any> {
    try {
      const countryArticles = await this.getList(collectionName);
      const targetCountry = countryArticles.find(article => article.id === id);

      if (!targetCountry) return null;

      const { articles } = targetCountry;

      const filtered = articles.filter(
        (article: TripieArticle) => article.placeId === articleId || article.id === articleId
      );

      if (filtered.length > 0) {
        const { body, ...others } = filtered[0];
        return { body: JSON.parse(body), ...others };
      }
      return null;
    } catch (error) {
      console.error('Error fetching article details:', error);
    }
  }

  // attraction detail 가져오기
  async getAttractionDetails(collectionName: string, regionId: string, attractionId: string): Promise<any> {
    try {
      const querySnapshot = await getDocs(collection(this.db, collectionName, regionId, 'attractions'));

      const filtered = querySnapshot.docs
        .map(doc => doc.data() as AttractionData)
        .filter(data => data.regionId === regionId && data.attractionId === attractionId);

      if (filtered.length > 0) {
        const { data, ...others } = filtered[0];
        return { data: JSON.parse(data), ...others };
      }
      return null;
    } catch (error) {
      console.error('Error fetching attraction details:', error);
    }
  }

  // restaurant detail 가져오기
  async getRestaurantDetails(collectionName: string, regionId: string, restaurantId: string): Promise<any> {
    try {
      const querySnapshot = await getDocs(collection(this.db, collectionName, regionId, 'restaurants'));
      const filtered = querySnapshot.docs
        .map(doc => doc.data())
        .filter(data => data.regionId === regionId && data.restaurantId === restaurantId);

      if (filtered.length > 0) {
        const { source } = filtered[0]?.[`Poi:${restaurantId}`] as RestaurantData['data'];
        return { data: { source } };
      }
      return null;
    } catch (error) {
      console.error('Error fetching restaurant details:', error);
    }
  }

  // collectionName 의 itemId에 해당되는 key의 숫자를 counter만큼 업데이트
  async increment(collectionName: string, itemId: string, key: string, counter = 1): Promise<void> {
    try {
      const docRef = doc(this.db, collectionName, itemId);
      const updated: Record<string, any> = {};
      updated[key] = firebaseIncrement(counter);
      await updateDoc(docRef, updated);
    } catch (error) {
      console.error('Error updating document:', error);
    }
  }

  // document 추가 및 업데이트
  async getAddedItemId(collectionName: string, item: any): Promise<string | void> {
    try {
      const docRef = await addDoc(collection(this.db, collectionName), item);
      await updateDoc(docRef, { id: docRef.id });
      return docRef.id;
    } catch (error) {
      console.error('Error adding document:', error);
    }
  }

  // document 삭제
  async deleteItem(collectionName: string, itemId: string): Promise<void> {
    try {
      const docRef = doc(this.db, collectionName, itemId);
      await deleteDoc(docRef);
    } catch (error) {
      console.error('Error deleting document:', error);
    }
  }
}

export default FirestoreService;
