import db from '../../../firebase/store';
import FirestoreService from './firestoreServiceClass';

const firestoreService = new FirestoreService(db);

export default firestoreService;
