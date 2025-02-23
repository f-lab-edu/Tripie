import { getFirestore } from 'firebase/firestore/lite';

import app from './config';

const db = getFirestore(app);
export default db;
