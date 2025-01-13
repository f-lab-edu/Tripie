import { doc, writeBatch } from 'firebase/firestore';
import db from 'firebase/store';

type Content = { day: number; order: number; contentId: string; text: string };

const batchWrite = async ({ collection, document, items }: { collection: string; document: string; items: Object }) => {
  const batch = writeBatch(db);
  //   const docRef = doc(db, collection, document);
  const docRef = doc(db, collection);

  batch.set(docRef, items);
  await batch.commit();
};

export default batchWrite;
