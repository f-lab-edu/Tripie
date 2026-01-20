import { FieldValue } from 'firebase-admin/firestore';
import db from 'firebase/config';

import { AttractionData } from 'models/Attraction';
import { RestaurantData } from 'models/Restaurant';
import { TripieArticle } from 'models/Triple';

type UserWithDocId = { ip: string; createdAt: Date; pwd: string; id: string; docId: string };
type IpToken = { ip: string; usedTokens: number };

class FirestoreService {
  private readonly db;

  constructor() {
    this.db = db;
  }

  async addItem(collectionName: string, item: any): Promise<void> {
    try {
      const docRef = this.db.collection(collectionName).doc(item.id);
      await docRef.set(item);
    } catch (error) {
      console.error('Error adding document:', error);
    }
  }

  async getItem(collectionName: string, itemId: string): Promise<any> {
    try {
      const docSnap = await this.db.collection(collectionName).doc(itemId).get();
      return docSnap.exists ? docSnap.data() : null;
    } catch (error) {
      console.error('Error fetching document:', error);
    }
  }

  async getList(collectionName: string): Promise<any[]> {
    try {
      const snapshot = await this.db.collection(collectionName).get();
      return snapshot.docs.map((doc: FirestoreService['db']) => doc.data());
    } catch (error) {
      console.error('Error fetching documents list:', error);
      return [];
    }
  }

  async getListWithIds(collectionName: string): Promise<any[]> {
    try {
      const snapshot = await this.db.collection(collectionName).get();
      return snapshot.docs.map((doc: FirestoreService['db']) => ({ ...doc.data(), id: doc.id }));
    } catch (error) {
      console.error('Error fetching documents list with IDs:', error);
      return [];
    }
  }

  async getTestUser(collectionName: string, id: string, pwd: string, ip: string): Promise<any> {
    try {
      const snapshot = await this.db.collection(collectionName).get();
      const users = snapshot.docs.map((doc: FirestoreService['db']) => ({ ...doc.data(), docId: doc.id }));
      const user = users.find((user: UserWithDocId) => user.id === id && user.pwd === pwd && user.ip === ip);
      if (!user) {
        return null;
      }

      return user;
    } catch (error) {
      console.error('Error fetching test user:', error);
    }
  }

  async addTestUser(collectionName: string, item: any): Promise<void> {
    try {
      const docRef = await this.db.collection(collectionName).add({
        ...item,
        name: 'tester',
        createdAt: new Date(),
      });
      return docRef.id;
    } catch (error) {
      console.error('Error adding document:', error);
    }
  }

  async getArticleDetails(collectionName: string, id: string, articleId: string): Promise<any> {
    try {
      const articles = await this.getList(collectionName);
      const country = articles.find(article => article.id === id);
      if (!country) return null;

      const filtered = country.articles.filter((a: TripieArticle) => a.placeId === articleId || a.id === articleId);
      if (filtered.length > 0) {
        const { body, ...rest } = filtered[0];
        return { body: JSON.parse(body), ...rest };
      }
      return null;
    } catch (error) {
      console.error('Error fetching article details:', error);
    }
  }

  async updateArticleBody(collectionName: string, regionId: string, articleId: string, newBody: any): Promise<void> {
    try {
      const docRef = this.db.collection(collectionName).doc(regionId);
      const docSnap = await docRef.get();

      if (!docSnap.exists) return;

      const data = docSnap.data();
      const articles = data?.articles || [];

      const updatedArticles = articles.map((a: TripieArticle) => {
        if (a.placeId === articleId || a.id === articleId) {
          return { ...a, body: JSON.stringify(newBody) };
        }
        return a;
      });

      await docRef.update({ articles: updatedArticles });
    } catch (error) {
      console.error('Error updating article body:', error);
    }
  }

  async getAttractionDetails(collectionName: string, regionId: string, attractionId: string): Promise<any> {
    try {
      const snapshot = await this.db.collection(collectionName).doc(regionId).collection('attractions').get();

      const filtered = snapshot.docs
        .map((doc: FirestoreService['db']) => doc.data() as AttractionData)
        .filter((data: AttractionData) => data.regionId === regionId && data.attractionId === attractionId);

      if (filtered.length > 0) {
        const { data, ...others } = filtered[0];
        return { data: JSON.parse(data), ...others };
      }
      return null;
    } catch (error) {
      console.error('Error fetching attraction details:', error);
    }
  }

  async getRestaurantDetails(collectionName: string, regionId: string, restaurantId: string): Promise<any> {
    try {
      const snapshot = await this.db.collection(collectionName).doc(regionId).collection('restaurants').get();

      const filtered = snapshot.docs
        .map((doc: FirestoreService['db']) => doc.data())
        .filter((data: RestaurantData) => data.regionId === regionId && data.restaurantId === restaurantId);

      if (filtered.length > 0) {
        const { source } = filtered[0]?.[`Poi:${restaurantId}`] as RestaurantData['data'];
        return { data: { source } };
      }
      return null;
    } catch (error) {
      console.error('Error fetching restaurant details:', error);
    }
  }

  async increment(collectionName: string, itemId: string, key: string, counter = 1): Promise<void> {
    try {
      const docRef = this.db.collection(collectionName).doc(itemId);
      const update = { [key]: FieldValue.increment(counter) };
      await docRef.update(update);
    } catch (error) {
      console.error('Error incrementing field:', error);
    }
  }

  async getAddedItemId(collectionName: string, item: any): Promise<string | void> {
    try {
      const docRef = await this.db.collection(collectionName).add(item);
      await docRef.update({ id: docRef.id });
      return docRef.id;
    } catch (error) {
      console.error('Error adding document:', error);
    }
  }

  async deleteItem(collectionName: string, itemId: string): Promise<void> {
    try {
      await this.db.collection(collectionName).doc(itemId).delete();
    } catch (error) {
      console.error('Error deleting document:', error);
    }
  }

  // IP-based token methods for test users
  async getIpToken(collectionName: string, ip: string): Promise<IpToken | null> {
    try {
      const docSnap = await this.db.collection(collectionName).doc(ip).get();
      return docSnap.exists ? (docSnap.data() as IpToken) : null;
    } catch (error) {
      console.error('Error fetching IP token:', error);
      return null;
    }
  }

  async addOrUpdateIpToken(collectionName: string, ip: string, usedTokens: number): Promise<void> {
    try {
      const docRef = this.db.collection(collectionName).doc(ip);
      await docRef.set({ ip, usedTokens }, { merge: true });
    } catch (error) {
      console.error('Error adding/updating IP token:', error);
    }
  }

  async incrementIpToken(collectionName: string, ip: string, counter = 1): Promise<void> {
    try {
      const docRef = this.db.collection(collectionName).doc(ip);
      const docSnap = await docRef.get();

      if (docSnap.exists) {
        await docRef.update({ usedTokens: FieldValue.increment(counter) });
      } else {
        await docRef.set({ ip, usedTokens: counter });
      }
    } catch (error) {
      console.error('Error incrementing IP token:', error);
    }
  }

  async resetAllIpTokens(collectionName: string): Promise<number> {
    try {
      const snapshot = await this.db.collection(collectionName).get();
      const batch = this.db.batch();
      let count = 0;

      snapshot.docs.forEach((doc: FirestoreService['db']) => {
        batch.update(doc.ref, { usedTokens: 0 });
        count++;
      });

      await batch.commit();
      return count;
    } catch (error) {
      console.error('Error resetting IP tokens:', error);
      return 0;
    }
  }
}

export default FirestoreService;
