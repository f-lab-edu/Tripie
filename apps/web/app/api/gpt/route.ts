'use server';
import { prisma } from '@tripie-pyotato/db';
import { Session } from 'next-auth';

export type CustomUser = Session['user'] & { id: string };

async function incrementUsedGptToken({ data }: { data: { user: CustomUser } }) {
  try {
    if (prisma != null) {
      // Build 'select' object
      const gptUser = await prisma.gpt.findUnique({ where: { userId: data.user.id } });
      if (gptUser != null) {
        const updatedUser = await prisma.gpt.update({
          where: { userId: data.user.id },
          data: {
            usedGptToken: { increment: 1 },
          },
          select: {
            userId: true,
            usedGptToken: true,
          },
        });
        return { data: updatedUser };
      } else {
        const newGptUser = await prisma.gpt.create({
          data: {
            userId: data.user.id,
            usedGptToken: 1,
          },
          select: {
            userId: true,
            usedGptToken: true,
          },
        });

        return { data: newGptUser };
      }
    }
  } catch (error) {
    console.error('Error updating user:', error);
    return { data: `'Error updating user:', ${error}` };
  }
}

export default incrementUsedGptToken;
