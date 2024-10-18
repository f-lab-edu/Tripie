import { LocationClient, SearchPlaceIndexForTextCommand } from '@aws-sdk/client-location';
import { withAPIKey } from '@aws/amazon-location-utilities-auth-helper';
import { API_KEY, REGION } from 'constants/maps';
import { NextApiRequest } from 'next';

export async function POST(req: NextApiRequest) {
  try {
    // Create an authentication helper instance using an API key
    const authHelper = await withAPIKey(API_KEY);

    const client = new LocationClient({
      region: REGION, // region containing Cognito pool
      ...authHelper.getLocationClientConfig(), // Provides configuration required to make requests to Amazon Location
    });

    const command = new SearchPlaceIndexForTextCommand(req.body);

    //@ts-ignore
    const response = await client.send(command);

    return response;
  } catch (e) {
    console.log(e);
    return e;
  }
}
