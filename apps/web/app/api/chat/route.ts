import { GenerateObjectResult, generateObject } from 'ai';

import { createOpenAI } from '@ai-sdk/openai';
import { TripContent, TripPlanner } from 'models/Aws';
import { Continentl } from 'models/Continentl';
import { z } from 'zod';

// openai api 키 등록
const openai = createOpenAI({
  apiKey: process.env.NEXT_PUBLIC_GPT_API_KEY,
});

export type AiTripPlanResponse = {
  name: string;
  trips: TripContent[];
};

export type TripPlannerContext = TripPlanner & { code: Continentl['code'] };

export async function getTripPlan(context: TripPlannerContext) {
  const selectedCities =
    context.city.selected.join('.') === context.city.all.join('.') ? 'anywhere' : context.city.selected.join(', ');

  const result = await generateObject({
    model: openai('gpt-4o-2024-08-06', {
      structuredOutputs: true,
    }),
    schemaName: 'trip-plan',
    schemaDescription: `plan a trip to ${selectedCities} in ${context?.country} between ${context?.duration} for ${context.companion}. Plan must be the specified days long and finish and complete all your answers in Korean, with location name in that country's official language (or english). include a mix of historic sites, walking, eating, local events during the specified days, and fun activities. Perform a google search for local events and suggest restaurants in that area. make sure it suits for people with the following interests: ${context?.preference}`,
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
    prompt: `plan a trip to ${selectedCities} in ${context?.country} between ${context?.duration} for ${context.companion}. Plan must be the specified days long and finish and COMPLETE ALL YOUR ANSWERS IN KOREAN, with location name in that country's official language (or english) and the coordinates [lat,lng]. Coordinates should all be unique. include a mix of historic sites, walking, eating, local events during the specified days, and fun activities. Perform a google search for local events and suggest restaurants in that area. make sure it suits for people with the following interests: ${context?.preference}. Include 7-8 activities per day, each activity should be labelled either as 'attraction','restaurant'or 'hotel', and location names (in english) should be specified as 'place'. Display as a separate json object for each day, add comments with short explanation or important notes about the activity. Include start time, meals, and suggest specific recommended restaurants.Default days start at 8:00 and ends in 19:00.\nFollow the exact number of days asked in the request. Don't say continue in the same format for the remaining days.`,
  }).then(async res => {
    // 챗지피 지역 검색 결과를 aws 검색하기에 용이하도록 `{추천 여행 장소} {식당여부에 따라 "restaurant"와 "지역 이름" 추가}`
    const { object } = res as GenerateObjectResult<AiTripPlanResponse>;

    const places = object.trips.map(place => place.activities.map(activity => activity.place));

    const placeSet = [
      ...new Set(
        object.trips
          .map(place =>
            place.activities.map(
              // https://docs.aws.amazon.com/location/latest/developerguide/category-filtering.html
              activity =>
                // activity.label === 'restaurant'
                // ? { name: `${activity.label} ${activity.place}, ${selectedCities}`, pointOfInterest: activity.label }
                // :
                ({ name: activity.place, selectedCities })
            )
          )
          .flat()
      ),
    ];
    // const country = iso31661.find(item => item.alpha2 === context.code)?.alpha3 as string;

    // const locations = await Promise.all(placeSet.map(place => postAwsPlace(place, country)));

    // return { plans: object, placeSet, places, locations };
    return { plans: object, placeSet, places };
  });

  return result;
}
