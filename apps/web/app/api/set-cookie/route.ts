import { cookies } from 'next/headers';

export async function GET() {
  const cookie = await cookies();
  cookie.set('name', 'tripie-cloudinary');
  cookie.set('value', 'some-session-or-auth-value');
  cookie.set('httpOnly', 'true');
  cookie.set('secure', 'true');
  cookie.set('sameSite', 'None');
  cookie.set('path', '/');

  return new Response('Cookie set', { status: 200 });
}
