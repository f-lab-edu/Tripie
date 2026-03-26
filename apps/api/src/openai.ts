import { createOpenAI } from '@ai-sdk/openai';
import { generateObject, GenerateObjectResult } from 'ai';
import { Request, Response } from 'express';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendErrorEmail(message: string, body: unknown) {
  if (!process.env.RESEND_API_KEY || !process.env.ERROR_ALERT_EMAIL) return;
  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: process.env.ERROR_ALERT_EMAIL,
    subject: '[tripie] /openai 500 error',
    html: `<p><b>Error: open ai add credit balance</b> ${message}</p><pre>${JSON.stringify(body, null, 2)}</pre>`,
  });
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
    plans: GenerateObjectResult<AiTripPlanResponse>;
    placeSet: { name: string; selectedCities: string }[];
    places: string[][];
  }>;
}

export type ChatGptResponse = Response | SuccessResponse;

async function getTripPlan({ res, req }: { req: Request; res: Response }): Promise<ChatGptResponse> {
  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({ error: 'Internal Server Error', data: null, message: 'no OPENAI_API_KEY in env' });
  }

  const openai = createOpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  try {
    const { duration, selectedCities, country, companion, preference } = req.body;

    if (!duration || !selectedCities || !country || !companion || !preference) {
      return res.status(400).json({
        error: `${!duration ? 'duration' : ''}, ${!selectedCities ? 'selectedCities' : ''}, ${!country ? 'country' : ''}, ${!companion ? 'companion' : ''}, ${!preference ? 'preference' : ''} missing`,
      });
    }

    // structuredOutputs를 지원하는 모델 순서대로 fallback
    const MODELS = ['gpt-4o-2024-08-06', 'gpt-4o', 'gpt-4o-mini'] as const;

    let result;
    let lastError: Error | undefined;
    for (const modelId of MODELS) {
      try {
        result = await generateObject({
          model: openai(modelId, { structuredOutputs: true }),
          schemaName: 'trip-plan',
      schemaDescription: `plan a trip to ${selectedCities} in ${country} between ${duration} for ${companion}. Plan must be the specified days long and finish and complete all your answers in Korean, with location name in that country's official language (or english). include a mix of historic sites, walking, eating, local events during the specified days, and fun activities. Perform a google search for local events and suggest restaurants in that area. make sure it suits for people with the following interests: ${preference}`,
      schema: z.object({
        name: z.string(),
        trips: z.array(
          z.object({
            day: z.number(),
            date: z.string(),
            activities: z.array(
              z.object({
                time: z.string(),
                activity: z.string(),
                comments: z.string(),
                label: z.string(),
                place: z.string(),
                coordinates: z.array(z.number()), // 위치의 위도와 경도
              })
            ),
          })
        ),
      }),
      prompt: `plan a trip to ${selectedCities} in ${country} between ${duration} for ${companion}. Plan must be the specified days long and finish and COMPLETE ALL YOUR ANSWERS IN KOREAN, with location name in that country's official language (or english) and the coordinates [lat,lng]. Coordinates should all be unique and must be in ${country}. include a mix of historic sites, walking, eating, local events during the specified days, and fun activities. Perform a google search for local events and suggest restaurants in that area. make sure it suits for people with the following interests: ${preference}. Include 7-8 activities per day, each activity should be labelled either as 'attraction','restaurant'or 'hotel', and location names (in english) should be specified as 'place'. Display as a separate json object for each day, add comments with short explanation or important notes about the activity in 2-3 sentences. Include start time, meals, and suggest specific recommended restaurants.Default days start at 8:00 and ends in 19:00.\nFollow the exact number of days asked in the request. Don't say continue in the same format for the remaining days.`,
        }).then(async generateRes => {
          const { object } = generateRes as GenerateObjectResult<AiTripPlanResponse>;
          const places = object.trips.map(place => place.activities.map(activity => activity.place));
          const placeSet = [
            ...new Set(
              object.trips
                .map(place =>
                  place.activities.map(
                    activity => ({ name: activity.place, selectedCities: `${selectedCities} in ${country}` })
                  )
                )
                .flat()
            ),
          ];
          return { plans: object, placeSet, places };
        });
        break; // 성공 시 loop 탈출
      } catch (modelError) {
        lastError = modelError instanceof Error ? modelError : new Error(String(modelError));
        console.warn(`Model ${modelId} failed: ${lastError.message}, trying next...`);
      }
    }

    if (!result) {
      const message = lastError?.message ?? 'All models failed';
      sendErrorEmail(message, req.body).catch(console.error);
      return res.status(500).json({ error: 'Internal Server Error', data: null, message });
    }

    return res.json({ message: 'successfully obtained chat response', status: 200, data: result });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    sendErrorEmail(message, req.body).catch(console.error);
    return res.status(500).json({ error: 'Internal Server Error', data: null, message });
  }
}

export default getTripPlan;
