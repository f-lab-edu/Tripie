import { DefaultUser } from 'next-auth';

export interface TripieUser extends DefaultUser {
  image?: string;
  isAdmin: boolean;
  usedGptToken: number;
}
