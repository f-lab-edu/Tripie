import { sha1 } from 'js-sha1';

type SignatureParams = { timestamp: string };

function generateSignature(params: SignatureParams, apiSecret: string) {
  // 알파벳 순으로 key 정렬하기
  const sortedParams = Object.keys(params)
    .sort()
    .map(key => `${key}=${params[key as keyof SignatureParams]}`)
    .join('&');

  const stringToSign = `${sortedParams}${apiSecret}`;

  return sha1(stringToSign);
}

export default generateSignature;
