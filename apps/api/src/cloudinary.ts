import { v2 as cloudinary } from 'cloudinary';
import { Request, Response } from 'express';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export async function upload({ res, req }: { req: Request; res: Response }) {
  // Use the uploaded file's name as the asset's public ID and
  // allow overwriting the asset with new versions
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  };

  try {
    const { imageUrl } = req.body;
    const result = await cloudinary.uploader.upload(imageUrl, options);
    return res.json({ message: result.public_id, status: 200 });
  } catch (err) {
    return res.status(500).json({ error: `Internal Server Error: ${err}` });
  }
}

/////////////////////////////////////
// Gets details of an uploaded image
/////////////////////////////////////
export async function getAssetInfo({ req, res }: { req: Request; res: Response }) {
  const { id } = req.params;
  const options = {
    transformation: [
      { dpr: 'auto', responsive: true, width: 'auto', crop: 'scale' },
      { quality: 'auto', fetch_format: 'auto' },
    ],
  };

  try {
    const data = await cloudinary.url(id, options);
    console.log('data', data);
    return res.json({ data, status: 200 });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: `Internal Server Error: ${error}` });
  }
}
