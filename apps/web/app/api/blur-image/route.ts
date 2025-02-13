import API from 'constants/api-routes';
import { NextResponse } from 'next/server';

// https://medium.com/@kavindumadushanka972/learn-how-to-create-dynamic-blur-data-urls-for-images-in-next-js-bc4eb5d04ec6 참고
export async function GET(request: NextResponse) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url') as string;

  const base64str = await fetch(`${API.BASE_URL}/_next/image?url=${url}&w=16&q=75`).then(async res =>
    Buffer.from(await res.arrayBuffer()).toString('base64')
  );

  const blurSvg = `
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 5'>
    <filter id='b' color-interpolation-filters='sRGB'>
      <feGaussianBlur stdDeviation='1' />
    </filter>
    <image preserveAspectRatio='none' filter='url(#b)' x='0' y='0' height='100%' width='100%' 
    href='data:image/avif;base64,${base64str}' />
  </svg>
`;

  const toBase64 = (str: string) =>
    typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);

  return NextResponse.json({ data: `data:image/svg+xml;base64,${toBase64(blurSvg)}` }, { status: 200 });
}
