import API from 'constants/api-routes';
import { API_KEY } from 'constants/maps';
import { AwsPlaceResult, AwsSuggestedPlaceResult } from 'models/Aws';
// import { API_KEY } from 'constants/maps';
// import { AwsPlaceResult,  } from 'models/Aws';
import { awsApi } from 'utils/ky';

export async function postAwsPlace(query: { name: string; selectedCities?: string }, country: string) {
  try {
    const json = {
      Text: query.name,
      MaxResults: 3,
      FilterCountries: [country],
    };

    // 텍스트 query로 지역을 검색 결과는 최대 3, 국가이름으로 검색 결과 제한하여  aws location 서비스로 검색합니다.
    const res = await awsApi.post(API.AWS_LOCATION_TEXT, {
      searchParams: { key: process.env.NEXT_PUBLIC_AWS_MAP_ACTIONS as string },
      json,
    });

    const result = (await res.json()) as AwsPlaceResult;

    // 지피티의 추천 여행지가 없는 장소인 경우와 같이,
    // aws 검색 결가가 없는 경우, 유사한 장소를 검색합니다.
    if (result.Results.length == 0 || result.Results[0].Relevance <= 0.75) {
      // console.log('postAwsPlace result', result);
      const placeSearch = await fetch(
        // `${API.BASE}${API.AWS_LAMBDA}?place=${query.name} in ${country} near ${query}`
        `${API.BASE}${API.AWS_LAMBDA}?place=${query.name} near ${query.selectedCities}`
      ).then(v => v.json());
      // console.log('placeSearch', placeSearch);

      if (placeSearch.data.length > 0) {
        // const json = {
        const newJson = {
          // Text:
          //   (placeSearch.data.address == null ? '' : placeSearch.data.address + ' ') +
          //   (placeSearch.data.info == null ? '' : placeSearch.data.info + ' ') +
          //   placeSearch.data.placeName,

          Text:
            (placeSearch.data[0]?.address == null || placeSearch.data[0]?.address == ''
              ? ''
              : placeSearch.data[0].address + ' ') +
            (placeSearch.data[0]?.info == null ? '' : placeSearch.data[0].info + ' ') +
            placeSearch.data[0].placeName,
          MaxResults: 3,
          FilterCountries: [country],
        };

        const res = await awsApi.post(API.AWS_LOCATION_TEXT, {
          searchParams: { key: process.env.NEXT_PUBLIC_AWS_MAP_ACTIONS as string },
          json: newJson,
        });
        // return res;
        const result = (await res.json()) as AwsPlaceResult;
        console.log('placeSearch result', result);

        if (result.Results.length > 0) {
          const completeMatch = result.Results.filter(item => item.Relevance >= 0.9);
          if (completeMatch.length > 0) {
            return {
              ...result,
              Results: [completeMatch[0]],
            };
          } else {
            return {
              ...result,
              Results: result.Results.filter(item => item.Relevance >= 0.8),
            };
          }
        }
      }

      // const res = await awsApi.post(API.AWS_LOCATION_TEXT, {
      //   searchParams: { key: process.env.NEXT_PUBLIC_AWS_MAP_ACTIONS as string },
      //   json,
      // });

      // const result = (await res.json()) as AwsPlaceResult;
      // return result;
      const res = await awsApi
        .post(API.AWS_LOCATION_SUGGESTED_PLACES, {
          searchParams: { key: process.env.NEXT_PUBLIC_AWS_MAP_ACTIONS as string },
          json,
        })
        .then(async result => {
          return result.json().then(async suggestedPlaces => {
            const results = await Promise.all(
              (suggestedPlaces as AwsSuggestedPlaceResult).Results.map(({ PlaceId }) =>
                awsApi.get(`${API.AWS_LOCATION_BY_PLACE_ID}/${PlaceId}?key=${API_KEY}`)
              )
            ).then(res => (res as unknown as Response).json());
            return { Results: results, Summary: json };
            // return { Summary: json, Results: results.filter(item => item.Relevance >= 0.8) };
          });
        });
      console.log('suggested result', result);
      return res;
    }
    console.log('placeSearch initial result', result);
    // return { result, Results: result.Results.filter(item => item.Relevance >= 0.8) };
    // return result;
    if (result.Results.length > 0) {
      const completeMatch = result.Results.filter(item => item.Relevance >= 0.9);
      if (completeMatch.length > 0) {
        return {
          ...result,
          Results: [completeMatch[0]],
        };
      } else {
        return {
          ...result,
          Results: result.Results.filter(item => item.Relevance >= 0.8),
        };
      }
    }
  } catch (error) {
    console.log(error);
  }
}
