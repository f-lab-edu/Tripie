import { TripPlanner } from 'models/Aws';
import { backendApi } from 'utils/ky';

export interface Response {
  message: string;
  status: number;
}

export interface ErrorResponse extends Response {
  data: null;
  error: string;
}

export type Activity = {
  time: string;
  activity: string;
  comments: string;
  place: string;
  label: 'attraction' | 'hotel' | 'restaurant';
  coordinates?: number[];
};

export type TripContent = {
  day: number;
  date: string;
  activities: Array<Activity>;
};

export type AiTripPlanResponse = {
  name: string;
  trips: TripContent[];
};

export interface SuccessResponse extends Response {
  data: Array<{
    plans: AiTripPlanResponse;
    placeSet: { name: string; selectedCities: string }[];
    places: string[][];
  }>;
}

export type ChatGptResponse = ErrorResponse | SuccessResponse;

export async function getTripPlan(context: TripPlanner): Promise<ChatGptResponse> {
  const {
    duration,
    city: { selected, all },
    country,
    companion,
    preference,
  } = context;
  const selectedCities = selected.join('.') === all.join('.') ? 'anywhere' : selected.join(', ');
  return await backendApi.post('openai', { json: { duration, country, companion, preference, selectedCities } }).json();
}

export default getTripPlan;
