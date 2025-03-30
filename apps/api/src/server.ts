import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import express, { type Express } from 'express';
import morgan from 'morgan';
import { getAssetInfo, upload } from './cloudinary';
import getTripPlan from './openai';

export const createServer = (): Express => {
  const app = express();
  app
    .disable('x-powered-by')
    .use(morgan('dev'))
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(cors({ origin: [process.env.ALLOWED_ORIGIN as string, 'http://localhost:3000'] }))
    .get('/message/:name', (req, res) => {
      return res.json({ message: `hello ${req.params.name}` });
    })
    .get('/status', (_, res) => {
      return res.json({ ok: true });
    })
    .post('/openai', async (req, res) => getTripPlan({ res, req }))
    .get('/cloudinary/asset', async (req, res) => getAssetInfo({ res, req }))
    .post('/cloudinary', async (req, res) => upload({ res, req }));

  return app;
};
