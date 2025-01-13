import { collection, getDocs } from 'firebase/firestore';
import db from 'firebase/store';

const getRestaurantDetailAll = async (docName: string) => {
  try {
    const allRestaurants = [];

    // Step 1: Get all subcollection IDs from the 'restaurant-details' collection
    const restaurantDetailsRef = collection(db, docName);

    // Get all documents from the collection
    const querySnapshot = await getDocs(restaurantDetailsRef);

    console.log('querySnapshot', querySnapshot);

    // Map through documents to extract data
    const restaurants = querySnapshot.docs.map(doc => ({
      id: doc.id, // Include document ID
      ...doc.data(), // Include document data
    }));

    return restaurants; // Return the array of restaurant documents

    // Step 2: Loop through each document in 'restaurant-details' (these are subcollection IDs)
    // for (const docSnapshot of restaurantDetailsSnapshot.docs) {
    //   const subcollectionId = docSnapshot.id; // e.g., restaurantId1, restaurantId2

    //   console.log('docSnapshot', docSnapshot);

    //   // Step 3: Access the 'restaurant' document in each subcollection
    //   const restaurantDocRef = doc(db, `retaurant-details/${subcollectionId}/restaurant`);
    //   const restaurantDocSnapshot = await getDoc(restaurantDocRef);

    //   if (restaurantDocSnapshot.exists()) {
    //     // Step 4: Add the document data to the results
    //     allRestaurants.push({
    //       subcollectionId, // Add the subcollection ID for reference
    //       ...restaurantDocSnapshot.data(), // Include the document data
    //     });
    //   }
    // }

    return allRestaurants; // Return all collected data
  } catch (e) {
    console.error('Error listing document: ', e);
  }
  return 'empty';
};

export default getRestaurantDetailAll;
