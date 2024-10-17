import { LocationClient, SearchPlaceIndexForSuggestionsCommand } from '@aws-sdk/client-location';
import { withAPIKey } from '@aws/amazon-location-utilities-auth-helper';
import { API_KEY, REGION } from 'constants/maps';
import { NextApiRequest } from 'next';

// https://docs.aws.amazon.com/location/latest/APIReference/API_SearchPlaceIndexForSuggestions.html
export async function POST(req: NextApiRequest) {
  try {
    // Create an authentication helper instance using an API key
    const authHelper = await withAPIKey(API_KEY);

    const client = new LocationClient({
      region: REGION, // region containing Cognito pool
      ...authHelper.getLocationClientConfig(), // Provides configuration required to make requests to Amazon Location
    });

    const command = new SearchPlaceIndexForSuggestionsCommand(req.body);

    //@ts-ignore
    const response = await client.send(command);

    return response;
  } catch (e) {
    console.log(e);
    return e;
  }
}
