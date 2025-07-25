// // export async function GET() {
// //   const snapshot = await db.collection('posts').get(); // ✅ no getDocs

// //   const posts = snapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => ({ id: doc.id, ...doc.data() }));
// //   return Response.json(posts);
// // }

// import { collection, getDocs } from 'firebase/firestore/lite';

// // export default async function PostsPage() {
// export async function GET() {
//   const snapshot = await getDocs(collection(db, 'posts'));
//   // console.log('db', db);
//   const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//   // console.log('snapshot', snapshot);
//   // return Response.json(data);
//   return NextResponse.json(data, { status: 200 });
//   // return NextResponse.json({ message: 'geotagId is required' }, { status: 400 });
// }

import { NextResponse } from 'next/server';
import firestoreService from '../firebase';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const regionId = searchParams.get('regionId');

  const res = await firestoreService.getItem('region-articles2', regionId as string);
  console.log(res);
  if (!regionId) {
    return NextResponse.json({ message: 'regionId is required' }, { status: 400 });
  }

  // const filtered = res?.filter(country => country?.continent.includes(continent));
  return NextResponse.json(res);
}
