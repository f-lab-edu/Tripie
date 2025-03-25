import generateSignature from './helpers/generateSignature';

type ResourceType = 'image' | 'raw' | 'video' | 'auto';
const DEFAULT_RESOURCE_TYPE = 'image'; // image, raw, video and auto
const URL_BASE = `https://api.cloudinary.com/v1_1/`;

async function upload(
  url: string,
  keys: { apiKey?: string; cloudinaryName?: string; secret?: string },
  resourceType?: ResourceType
) {
  const formData = new URLSearchParams();

  if (keys.apiKey == null) {
    return {
      status: 401,
      message: {
        data: null,
        message: 'Missing api key. Please set up CLOUDINARY_API_KEY in .env.',
      },
    };
  }

  if (keys.secret == null) {
    return {
      status: 401,
      message: {
        data: null,
        message: 'Missing api secret. Please set up CLOUDINARY_API_SECRET in .env',
      },
    };
  }

  if (keys.cloudinaryName == null) {
    return {
      status: 401,
      message: {
        data: null,
        message: 'Missing cloudinary name. Please set up CLOUDINARY_CLOUD_NAME in .env',
      },
    };
  }

  // regex로 url 형식인지 체크
  // if (url == null) {
  //   return {
  //     status: 401,
  //     message: {
  //       data: null,
  //       message: 'Missing api key. Please set up CLOUDINARY_API_KEY in .env',
  //     },
  //   };
  // }

  // curl https://api.cloudinary.com/v1_1/cld-docs/image/upload -X POST --data 'file=https://www.example.com/sample.jpg&timestamp=173719931&api_key=436464676&signature=a781d61f86a6f818af'

  const URL = `${URL_BASE}${keys.cloudinaryName}/${resourceType ?? DEFAULT_RESOURCE_TYPE}/upload`;
  const timestamp = `${Date.now()}`;
  formData.append('file', url);
  formData.append('timestamp', timestamp);
  formData.append('api_key', keys.apiKey);
  // https://support.cloudinary.com/hc/en-us/community/posts/360030104392-Direct-API-Invalid-Signature-String-to-sign-timestamp-1541651684
  formData.append('signature', generateSignature({ timestamp }, keys.secret)); //  A signature of all request parameters including the 'timestamp' parameter but excluding the 'api_key', 'resource_type', 'cloud_name' and 'file' parameters, based on your product environment's API secret. The signature is valid for 1 hour.

  try {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    return {
      status: 200,
      message: {
        data: result,
        message: 'successful upload',
      },
    };
  } catch (error) {
    return {
      status: 500,
      message: {
        data: null,
        message: `error: ${error}`,
      },
    };
  }
}

export default upload;
