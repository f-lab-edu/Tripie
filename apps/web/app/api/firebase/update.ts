import { doc, setDoc } from 'firebase/firestore';
import db from 'firebase/store';

const addItem = async (items: any, dbName: string) => {
  try {
    // const docRef = await setDoc(doc(db, dbName, items?.place_id), {
    //   ...items,
    // });
    const docRef = await setDoc(doc(db, dbName, items?.id), {
      ...items,
    });

    // firebase.database().ref().child('/posts/' + newPostKey)
    //     .update({ title: "New title", body: "This is the new body" });

    console.log('Document written with ID: ', docRef);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

export default addItem;
