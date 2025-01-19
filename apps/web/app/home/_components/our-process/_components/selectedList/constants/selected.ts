import { AiTripPlanResponse } from 'app/api/chat/route';
import COMPANION_LIST from 'constants/companions';
import { CONTINENTS } from 'constants/continents';
import PREFERENCE_LIST from 'constants/preferences';
import { Continents } from 'models/Continent';
import { Coordinate } from 'models/Geo';

export const SELECTED_CONTINENT = 'ASIA' as keyof Continents;
export const SELECTED_CONTINENT_NAME = CONTINENTS[SELECTED_CONTINENT];
export const SELECTED_COUNTRY = 'South Korea';
export const SELECTED_CITY = 'Jeju';
export const SELECTED_COMPANION = Object.keys(COMPANION_LIST).slice(2, 3);
export const SELECTED_PREFERENCE = [
  ...Object.keys(PREFERENCE_LIST).slice(2, 3),
  ...Object.keys(PREFERENCE_LIST).slice(Object.keys(PREFERENCE_LIST).length - 3),
];

export const AI_PLAN = {
  plans: {
    name: 'Jeju Trip for PARTNER',
    trips: [
      {
        day: 1,
        date: '2025-01-23',
        activities: [
          {
            time: '08:00',
            activity: '한라산 국립공원 등산',
            comments: '한라산은 제주도의 상징적인 자연 명소입니다. 등산로를 따라 아름다운 경치를 감상하세요.',
            label: 'attraction',
            place: 'Hallasan National Park',
            coordinates: [33.3617, 126.5292],
          },
          {
            time: '10:30',
            activity: '성산일출봉 방문',
            comments: '유네스코 세계자연유산으로 지정된 성산일출봉에서 일출을 감상하세요.',
            label: 'attraction',
            place: 'Seongsan Ilchulbong',
            coordinates: [33.4598, 126.9405],
          },
          {
            time: '12:00',
            activity: '점심 식사 - 흑돼지 구이',
            comments: '제주도의 유명한 흑돼지 구이를 맛볼 수 있는 식당입니다.',
            label: 'restaurant',
            place: 'Donsadon',
            coordinates: [33.489, 126.4983],
          },
          {
            time: '13:30',
            activity: '제주 민속촌 방문',
            comments: '제주의 전통 문화를 체험할 수 있는 민속촌입니다.',
            label: 'attraction',
            place: 'Jeju Folk Village',
            coordinates: [33.429, 126.8425],
          },
          {
            time: '15:00',
            activity: '우도 여행',
            comments: '우도는 아름다운 해변과 자연 경관으로 유명합니다. 페리를 타고 이동하세요.',
            label: 'attraction',
            place: 'Udo Island',
            coordinates: [33.508, 126.9517],
          },
          {
            time: '17:00',
            activity: '저녁 식사 - 해산물 요리',
            comments: '신선한 해산물을 맛볼 수 있는 레스토랑입니다.',
            label: 'restaurant',
            place: "Haenyeo's House",
            coordinates: [33.512, 126.526],
          },
          {
            time: '19:00',
            activity: '숙소 체크인',
            comments: '편안한 휴식을 취할 수 있는 호텔입니다.',
            label: 'hotel',
            place: 'Jeju Shilla Hotel',
            coordinates: [33.489, 126.4983],
          },
        ],
      },
      {
        day: 2,
        date: '2025-01-24',
        activities: [
          {
            time: '08:00',
            activity: '용두암 방문',
            comments: '제주도의 유명한 자연 명소로, 용의 머리 모양을 닮은 바위입니다.',
            label: 'attraction',
            place: 'Yongduam Rock',
            coordinates: [33.5183, 126.5117],
          },
          {
            time: '09:30',
            activity: '제주 오름 트레킹',
            comments: '제주도의 독특한 화산 지형을 경험할 수 있는 오름 트레킹입니다.',
            label: 'attraction',
            place: 'Jeju Oreum',
            coordinates: [33.451, 126.561],
          },
          {
            time: '11:00',
            activity: '제주 돌문화공원 방문',
            comments: '제주의 독특한 돌 문화를 체험할 수 있는 공원입니다.',
            label: 'attraction',
            place: 'Jeju Stone Park',
            coordinates: [33.451, 126.561],
          },
          {
            time: '12:30',
            activity: '점심 식사 - 전복죽',
            comments: '제주도의 특산물인 전복을 사용한 전복죽을 맛볼 수 있는 식당입니다.',
            label: 'restaurant',
            place: 'Myeongjin Jeonbok',
            coordinates: [33.489, 126.4983],
          },
          {
            time: '14:00',
            activity: '제주 아트랜드 방문',
            comments: '다양한 예술 작품을 감상할 수 있는 아트랜드입니다.',
            label: 'attraction',
            place: 'Jeju Art Land',
            coordinates: [33.451, 126.561],
          },
          {
            time: '16:00',
            activity: '제주 올레길 걷기',
            comments: '제주도의 아름다운 해안선을 따라 걷는 올레길입니다.',
            label: 'attraction',
            place: 'Jeju Olle Trail',
            coordinates: [33.451, 126.561],
          },
          {
            time: '18:00',
            activity: '저녁 식사 - 한식 뷔페',
            comments: '다양한 한식을 맛볼 수 있는 뷔페 레스토랑입니다.',
            label: 'restaurant',
            place: 'Jeju Buffet',
            coordinates: [33.489, 126.4983],
          },
          {
            time: '19:00',
            activity: '숙소 체크아웃',
            comments: '여행을 마무리하며 숙소에서 체크아웃합니다.',
            label: 'hotel',
            place: 'Jeju Shilla Hotel',
            coordinates: [33.489, 126.4983],
          },
        ],
      },
    ],
  } as unknown as AiTripPlanResponse,
  places: [
    [
      'Hallasan National Park',
      'Seongsan Ilchulbong',
      'Donsadon',
      'Jeju Folk Village',
      'Udo Island',
      "Haenyeo's House",
      'Jeju Shilla Hotel',
    ],
    [
      'Yongduam Rock',
      'Jeju Oreum',
      'Jeju Stone Park',
      'Myeongjin Jeonbok',
      'Jeju Art Land',
      'Jeju Olle Trail',
      'Jeju Buffet',
      'Jeju Shilla Hotel',
    ],
  ],
  coordinates: [
    [
      [33.3617, 126.5292],
      [33.4598, 126.9405],
      [33.489, 126.4983],
      [33.429, 126.8425],
      [33.508, 126.9517],
      [33.512, 126.526],
      [33.489, 126.4983],
    ] as Coordinate[],
    [
      [33.5183, 126.5117],
      [33.451, 126.561],
      [33.451, 126.561],
      [33.489, 126.4983],
      [33.451, 126.561],
      [33.451, 126.561],
      [33.489, 126.4983],
      [33.489, 126.4983],
    ] as Coordinate[],
  ],
};

export const KOR_CITIES = [
  'North Chungcheong',
  'South Chungcheong',
  'Gangwon',
  'Gyeonggi',
  'North Gyeongsang',
  'South Gyeongsang',
  'Jeonbuk',
  'South Jeolla',
  'Jeju',
];
