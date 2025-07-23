// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//   measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
// };

// export default firebaseConfig;

import { cert, getApps, initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const serviceAccount = {
  type: process.env.FIREBASE_ADMIN_TYPE as string,
  projectId: process.env.FIREBASE_ADMIN_PROJECT_ID as string,
  privateKeyId: process.env.FIREBASE_ADMIN_PRIVATE_KEY_ID as string,
  privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY as string,
  clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL as string,
  clientId: process.env.FIREBASE_ADMIN_CLIENT_ID as string,
  authUri: process.env.FIREBASE_ADMIN_AUTH_URI as string,
  tokenUri: process.env.FIREBASE_ADMIN_TOKEN_URI as string,
  authProviderX509CertUrl: process.env.FIREBASE_ADMIN_AUTH_PROVIDER_X509_CERT_URL as string,
  clientX509CertUrl: process.env.FIREBASE_ADMIN_CLIENT_X509_CERT_URL as string,
  universeDomain: process.env.FIREBASE_ADMIN_UNIVERSE_DOMAIN as string,
};

if (!getApps().length) {
  initializeApp({
    credential: cert(serviceAccount),
  });
}

const db = getFirestore();
export default db;
