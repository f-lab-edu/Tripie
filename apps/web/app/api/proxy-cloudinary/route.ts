import { CLOUDINARY_URL } from '@tripie-pyotato/design-system/shared';

export async function GET(req: Request) {
  const url = new URL(req.url);

  const cloudinaryPath = url.pathname.replace(/^\/api\/proxy-cloudinary/, '');

  const targetUrl = CLOUDINARY_URL() + cloudinaryPath;

  const cloudRes = await fetch(targetUrl);

  if (!cloudRes.ok) {
    return new Response(`Cloudinary fetch failed: ${cloudRes.statusText}`, {
      status: cloudRes.status,
    });
  }

  const contentType = cloudRes.headers.get('Content-Type') ?? 'image/jpeg';
  const blob = await cloudRes.blob();

  return new Response(blob, {
    status: cloudRes.status,
    headers: {
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
