/**
 * React-free URL constants — safe to import in Next.js Server Components.
 * Do NOT add any React imports to this file.
 */

const CLOUDINARY_BUCKET = 'dbzzletpw';
const CLOUDINARY_BASE = `https://res.cloudinary.com/${CLOUDINARY_BUCKET}/image/upload/`;

export const STATIC_BACKGROUND_PATH = 'f_auto,q_auto:good/v1753510934/static-background_pz1ojq';

/**
 * Returns the CardNoise background texture URL.
 * Pass your proxy base URL (e.g. API.MEDIA_URL + '/') to override the default Cloudinary URL.
 */
export const CARD_NOISE_URL = (baseUrl = CLOUDINARY_BASE) =>
  `${baseUrl}${CLOUDINARY_BUCKET}/image/upload/${STATIC_BACKGROUND_PATH}`;
