import { LOCAL } from 'constants/local';

/**
 * 국가 이름을 현지어로 표기, 디폴트는 한국어
 */
export const regionNameToLocal = ({ local = LOCAL.KR, regionCode }: { local?: string; regionCode: string }) => {
  const regionNames = new Intl.DisplayNames([local], { type: 'region' });
  return regionNames.of(regionCode);
};
