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
  return (
    <div>
      {/* {JSON.stringify(updatedUser)} */}
      <PlaygroundButton />
    </div>
  );
}
