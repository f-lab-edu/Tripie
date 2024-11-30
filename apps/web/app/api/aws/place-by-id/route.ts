import { GetPlaceCommand } from '@aws-sdk/client-location';
import { NextRequest } from 'next/server';
import { awsClient } from '../shared';

export async function GET(req: NextRequest) {
  try {
    const IndexName = req.nextUrl.searchParams.get('IndexName') as string;
    const PlaceId = req.nextUrl.searchParams.get('PlaceId') as string;

    const input = {
      IndexName,
      PlaceId,
    };

    return await awsClient(new GetPlaceCommand(input));
  } catch (e) {
    console.log(e);
    return e;
  }
}
