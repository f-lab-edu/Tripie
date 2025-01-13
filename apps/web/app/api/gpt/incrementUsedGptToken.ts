'use server';
import { prisma } from '../auth/prisma';

async function incrementUsedGptToken(email: string) {
  try {
    // await prisma.user.get;
    // console.log('incrementUsedGptToken email', email);
    const updatedUser = await prisma.user.update({
      where: {
        email: email, // Locate the user by their email
      },
      data: {
        usedGptToken: {
          increment: 1, // Increment the value by 1
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
