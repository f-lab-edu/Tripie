import { TRIPIE_REGION_BY_LOCATION, TRIPIE_REGION_IDS } from 'constants/tripie-country';

export type Params = { regionId: string; locationId?: string };

/**
 * regions/[regionId]/locations/[locationId]의 파람들을 parse한 값들을 {regionId,locationId,city,selectedRegion} 객체로 리턴
 * locationId가 null 일 경우 (regions/[regionId] 페이지일 경우), null 리턴
 */
export const parseParams = async (params: Promise<Params>) => {
  const { regionId, locationId } = await params;
  const decodedRegionId = decodeURIComponent(regionId);

  // 지역 아이디의 도시들 예를 들면 decodedRegionId가 일본일 경우, 일본의 도시 배열
  const selectedRegionCities = TRIPIE_REGION_BY_LOCATION[decodedRegionId as keyof typeof TRIPIE_REGION_BY_LOCATION];

  // 선택 지역의 도시 locationId가 주어지지 않았다면 지역의 첫번째 선택
  const selectedRegionCity = Object.keys(TRIPIE_REGION_IDS).filter(
    item => TRIPIE_REGION_IDS[item as keyof typeof TRIPIE_REGION_IDS] === selectedRegionCities?.[0]
  )?.[0];

  return {
    regionId: decodedRegionId,
    locationId: locationId != null ? decodeURIComponent(locationId) : null,
    city: locationId != null ? TRIPIE_REGION_IDS[locationId as keyof typeof TRIPIE_REGION_IDS] : null,
    selectedRegionCity,
  };
};
