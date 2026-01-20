import { IP_TOKEN_DB_NAME } from 'constants/auth';
import { NextRequest, NextResponse } from 'next/server';
import firestoreService from '../../firebase';

// This endpoint is called by Vercel Cron to reset IP-based tokens daily
export async function GET(req: NextRequest) {
  // Verify the request is from Vercel Cron
  const authHeader = req.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const resetCount = await firestoreService.resetAllIpTokens(IP_TOKEN_DB_NAME);
    return NextResponse.json({
      message: 'IP tokens reset successfully',
      resetCount,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Error resetting IP tokens:', error);
    return NextResponse.json({ error: `Error resetting IP tokens: ${error}` }, { status: 500 });
  }
}
