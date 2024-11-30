import { SearchPlaceIndexForSuggestionsCommand } from '@aws-sdk/client-location';
import { NextApiRequest } from 'next';
import { awsClient } from '../shared';

// https://docs.aws.amazon.com/location/latest/APIReference/API_SearchPlaceIndexForSuggestions.html
export async function POST(req: NextApiRequest) {
  try {
    return await awsClient(new SearchPlaceIndexForSuggestionsCommand(req.body));
  } catch (e) {
    console.log(e);
    return e;
  }
}
