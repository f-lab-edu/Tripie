import { SearchPlaceIndexForTextCommand } from '@aws-sdk/client-location';
import { NextApiRequest } from 'next';
import { awsClient } from '../shared';

export async function POST(req: NextApiRequest) {
  try {
    return await awsClient(new SearchPlaceIndexForTextCommand(req.body));
  } catch (e) {
    console.log(e);
    return e;
  }
}
