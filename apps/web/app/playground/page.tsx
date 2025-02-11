import firestoreService from 'app/api/firebase';
import PlaygroundButton from './_components/Button';

// export default async function Playground() {
export default async function Playground() {
  // const updatedUser = await prisma.gpt.update({
  //   where: { id: id, userId: userId },
  //   data: {
  //     usedGptToken: { increment: 1 },
  //   },
  //   select: {
  //     id: true,
  //     usedGptToken: true,
  //   },
  // });

  // const updatedUser = await prisma.gpt.findUnique({
  //   where: { userId: userId, id: id },
  //   select: {
  //     id: true,
  //     usedGptToken: true,
  //   },
  // });

  const countries = await firestoreService.getListWithIds('continentl');

  // const blurDataURLs = await Promise.all(
  //   countries.map(async country => ({
  //     ...country,
  //     blurDataURL: await fetch(
  //       'http://localhost:3000' + API.BASE + API.BLUR_IMAGE + `?url=${country?.['flag-image'][0]}`
  //     ).then(v => v.json()),
  //   }))
  // );

  // const blurredThumbnail = await fetch(
  //   'http://localhost:3000' + API.BASE + API.BLUR_IMAGE + `?url=${data?.metadataContents?.image?.sizes?.full?.url}`
  // ).then(v => v.json());
  return (
    <div>
      {/* {JSON.stringify(updatedUser)} */}
      <PlaygroundButton data={countries} />
    </div>
  );
}
