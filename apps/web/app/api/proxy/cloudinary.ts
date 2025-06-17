import { CLOUDINARY_URL } from '@tripie-pyotato/design-system/shared';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { path } = req.query;

  if (!path || typeof path !== 'string') {
    return res.status(400).json({ error: 'Missing Cloudinary path' });
  }

  const cloudinaryUrl = CLOUDINARY_URL() + path;

  try {
    const cloudinaryRes = await fetch(cloudinaryUrl);
    if (!cloudinaryRes.ok) {
      return res.status(cloudinaryRes.status).end('Cloudinary fetch failed');
    }

    res.setHeader('Content-Type', cloudinaryRes.headers.get('Content-Type') || 'image/jpeg');
    const buffer = await cloudinaryRes.arrayBuffer();
    res.send(Buffer.from(buffer));
  } catch (err) {
    res.status(500).json({ error: 'Proxy error' });
  }
}
