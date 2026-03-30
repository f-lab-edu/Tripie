import { TripPlanner } from 'models/Aws';
import api from 'utils/ky';

export type TripPlannerSuccessResponse = {
  message: string;
  data: { id: string };
};

export async function submitTripPlan(chatItems: TripPlanner, id: string, ip?: string): Promise<string | null> {
  const res: TripPlannerSuccessResponse = await api.post('openai', { json: { ...chatItems, id, ip } }).json();
  return res?.data?.id ?? null;
}
