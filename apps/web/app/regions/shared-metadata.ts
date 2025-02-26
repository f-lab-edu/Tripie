import API from 'constants/api-routes';
import { Metadata } from 'next';

// http://nextjs.org/docs/app/api-reference/functions/generate-metadata#template
export const sharedMetaData: Metadata['openGraph'] = {
  title: {
    template: '%s | ✈️Tripie',
    default: '✈️Tripie',
  },
  type: 'website',
  siteName: 'Tripie',
  description: 'AI enhanced trip planner',
  images: [API.BASE_URL + '/tripie-image.png'],
};
