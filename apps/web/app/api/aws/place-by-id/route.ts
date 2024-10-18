import { GetPlaceCommand, LocationClient } from '@aws-sdk/client-location';
import { withAPIKey } from '@aws/amazon-location-utilities-auth-helper';
import { API_KEY, REGION } from 'constants/maps';
import { NextRequest } from 'next/server';

// https://nextjs.org/docs/app/api-reference/functions/next-request#nexturl
export async function GET(req: NextRequest) {
  try {
    // Create an authentication helper instance using an API key
    const authHelper = await withAPIKey(API_KEY);

    const client = new LocationClient({
      region: REGION, // region containing Cognito pool
      ...authHelper.getLocationClientConfig(), // Provides configuration required to make requests to Amazon Location
    });
    const IndexName = req.nextUrl.searchParams.get('IndexName') as string;
    const PlaceId = req.nextUrl.searchParams.get('PlaceId') as string;

    const input = {
      IndexName,
      PlaceId,
    };
    const command = new GetPlaceCommand(input);

    //@ts-ignore
    const response = await client.send(command);

    return response;
  } catch (e) {
    console.log(e);
    return e;
  }
}
