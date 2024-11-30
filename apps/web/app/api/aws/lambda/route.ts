import { InvokeCommand, LambdaClient } from '@aws-sdk/client-lambda'; // ES Modules import
import API from 'constants/api-routes';
import { FUNCTION_NAME, REGION } from 'constants/lambda';
import { NextRequest, NextResponse } from 'next/server';

// https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/InvokeCommand/
export async function GET(req: NextRequest) {
  try {
    const place = req.nextUrl.searchParams.get('place') as string;

    const input = {
      FunctionName: FUNCTION_NAME,
      Payload: JSON.stringify({ url: API.GOOGLE_SEARCH_URL + place }),
    };

    const client = new LambdaClient({
      region: REGION,
    });

    const command = new InvokeCommand(input);
    //@ts-ignore
    const { Payload, ...others } = await client.send(command);
    const { contents } = JSON.parse(Buffer.from(Payload).toString());
    return NextResponse.json({ data: contents }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ data: e || 'no error message' }, { status: 500 });
  }
}
