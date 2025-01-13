import {
  GetPlaceCommand,
  LocationClient,
  SearchPlaceIndexForSuggestionsCommand,
  SearchPlaceIndexForTextCommand,
} from '@aws-sdk/client-location';

import { withAPIKey } from '@aws/amazon-location-utilities-auth-helper';
import { API_KEY, REGION } from 'constants/maps';

type Command = GetPlaceCommand | SearchPlaceIndexForSuggestionsCommand | SearchPlaceIndexForTextCommand;

export async function awsClient(command: Command) {
  // Create an authentication helper instance using an API key
  const authHelper = await withAPIKey(API_KEY);

  const client = new LocationClient({
    region: REGION, // region containing Cognito pool
    ...authHelper.getLocationClientConfig(), // Provides configuration required to make requests to Amazon Location
  });

  // 🤔 공식문서 https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/location/command/GetPlaceCommand/ 에서
  // client.send로 나와있지만 타입이 안맞음..d.ts 파일에도 없으면 client은 무슨 타입일까..?
  // @ts-ignore
  return await client.send(command);
}
