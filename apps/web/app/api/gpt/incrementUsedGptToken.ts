'use server';
import { prisma } from '../auth/prisma';

async function incrementUsedGptToken(email: string) {
  try {
    const updatedUser = await prisma.user.update({
      where: {
        email: email, // email로 유저 선택
      },
      data: {
        usedGptToken: {
          increment: 1, // gpt 사용량 1 증가
        },
      },
    });

    console.log('User updated:', updatedUser);
    return updatedUser;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
}

export default incrementUsedGptToken;
