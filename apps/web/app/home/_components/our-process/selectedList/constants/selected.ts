import { AiTripPlanResponse } from 'app/api/chat/route';
import COMPANION_LIST from 'constants/companions';
import { CONTINENTS } from 'constants/continents';
import PREFERENCE_LIST from 'constants/preferences';
import { AwsPlaceResult } from 'models/Aws';
import { Continents } from 'models/Continent';

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
        date: '2024-12-25',
        activities: [
          {
            time: '08:00',
            activity: '한라산 국립공원 등산',
            comments: '한라산은 한국에서 가장 높은 산으로, 자연을 사랑하는 사람들에게 완벽한 장소입니다.',
            label: 'attraction',
            place: 'Hallasan National Park',
          },
          {
            time: '11:00',
            activity: '성산일출봉 방문',
            comments: '유네스코 세계문화유산으로 지정된 성산일출봉은 아름다운 일출로 유명합니다.',
            label: 'attraction',
            place: 'Seongsan Ilchulbong',
          },
          {
            time: '13:00',
            activity: '점심 식사 - 흑돼지 구이',
            comments: "제주에서 유명한 흑돼지 구이를 맛볼 수 있는 '돈사돈'을 추천합니다.",
            label: 'restaurant',
            place: 'Donsadon',
          },
          {
            time: '14:30',
            activity: '제주 민속촌 방문',
            comments: '제주의 전통 문화를 체험할 수 있는 민속촌입니다.',
            label: 'attraction',
            place: 'Jeju Folk Village',
          },
          {
            time: '16:00',
            activity: '제주 오설록 티 뮤지엄',
            comments: '녹차를 테마로 한 박물관으로, 다양한 차를 시음할 수 있습니다.',
            label: 'attraction',
            place: "O'sulloc Tea Museum",
          },
          {
            time: '17:30',
            activity: '저녁 식사 - 해산물 뷔페',
            comments: "신선한 해산물을 즐길 수 있는 '해녀의 집'을 추천합니다.",
            label: 'restaurant',
            place: "Haenyeo's House",
          },
          {
            time: '19:00',
            activity: '호텔 체크인 및 휴식',
            comments: "제주 시내에 위치한 '롯데 호텔 제주'에서 편안한 휴식을 취하세요.",
            label: 'hotel',
            place: 'Lotte Hotel Jeju',
          },
        ],
      },
      {
        day: 2,
        date: '2024-12-26',
        activities: [
          {
            time: '08:00',
            activity: '용두암 방문',
            comments: '바다 위에 솟아오른 용의 머리 모양의 바위로 유명한 관광지입니다.',
            label: 'attraction',
            place: 'Yongduam Rock',
          },
          {
            time: '09:30',
            activity: '제주 러브랜드',
            comments: '성인 테마의 조각 공원으로, 독특한 예술 작품을 감상할 수 있습니다.',
            label: 'attraction',
            place: 'Jeju Loveland',
          },
          {
            time: '11:00',
            activity: '제주 신라면세점 쇼핑',
            comments: '다양한 브랜드의 제품을 면세 가격으로 구매할 수 있는 쇼핑 명소입니다.',
            label: 'attraction',
            place: 'Jeju Shilla Duty Free',
          },
          {
            time: '13:00',
            activity: '점심 식사 - 전복죽',
            comments: "제주에서 유명한 전복죽을 맛볼 수 있는 '삼대국수회관'을 추천합니다.",
            label: 'restaurant',
            place: 'Samdae Guksu Hoegwan',
          },
          {
            time: '14:30',
            activity: '제주 아쿠아플라넷',
            comments: '다양한 해양 생물을 관찰할 수 있는 대형 수족관입니다.',
            label: 'attraction',
            place: 'Jeju Aqua Planet',
          },
          {
            time: '16:00',
            activity: '제주 돌문화공원',
            comments: '제주의 독특한 돌 문화를 체험할 수 있는 공원입니다.',
            label: 'attraction',
            place: 'Jeju Stone Park',
          },
          {
            time: '17:30',
            activity: '저녁 식사 - 한식 뷔페',
            comments: "다양한 한식을 즐길 수 있는 '한라산 뷔페'를 추천합니다.",
            label: 'restaurant',
            place: 'Hallasan Buffet',
          },
          {
            time: '19:00',
            activity: '호텔 체크아웃 및 출발',
            comments: '여행을 마무리하고 제주를 떠날 준비를 하세요.',
            label: 'hotel',
            place: 'Lotte Hotel Jeju',
          },
        ],
      },
    ],
  } as unknown as AiTripPlanResponse,
  placeSet: [
    {
      name: 'Hallasan National Park',
      selectedCities: 'Jeju',
    },
    {
      name: 'Seongsan Ilchulbong',
      selectedCities: 'Jeju',
    },
    {
      name: 'Donsadon',
      selectedCities: 'Jeju',
    },
    {
      name: 'Jeju Folk Village',
      selectedCities: 'Jeju',
    },
    {
      name: "O'sulloc Tea Museum",
      selectedCities: 'Jeju',
    },
    {
      name: "Haenyeo's House",
      selectedCities: 'Jeju',
    },
    {
      name: 'Lotte Hotel Jeju',
      selectedCities: 'Jeju',
    },
    {
      name: 'Yongduam Rock',
      selectedCities: 'Jeju',
    },
    {
      name: 'Jeju Loveland',
      selectedCities: 'Jeju',
    },
    {
      name: 'Jeju Shilla Duty Free',
      selectedCities: 'Jeju',
    },
    {
      name: 'Samdae Guksu Hoegwan',
      selectedCities: 'Jeju',
    },
    {
      name: 'Jeju Aqua Planet',
      selectedCities: 'Jeju',
    },
    {
      name: 'Jeju Stone Park',
      selectedCities: 'Jeju',
    },
    {
      name: 'Hallasan Buffet',
      selectedCities: 'Jeju',
    },
    {
      name: 'Lotte Hotel Jeju',
      selectedCities: 'Jeju',
    },
  ],
  places: [
    [
      'Hallasan National Park',
      'Seongsan Ilchulbong',
      'Donsadon',
      'Jeju Folk Village',
      "O'sulloc Tea Museum",
      "Haenyeo's House",
      'Lotte Hotel Jeju',
    ],
    [
      'Yongduam Rock',
      'Jeju Loveland',
      'Jeju Shilla Duty Free',
      'Samdae Guksu Hoegwan',
      'Jeju Aqua Planet',
      'Jeju Stone Park',
      'Hallasan Buffet',
      'Lotte Hotel Jeju',
    ],
  ],
  locations: [
    {
      Summary: {
        Text: 'Hallasan National Park',
        FilterCountries: ['KOR'],
        MaxResults: 3,
        ResultBBox: [126.55769, 33.37183, 126.55769, 33.37183],
        DataSource: 'Esri',
      },
      Results: [
        {
          Place: {
            Label: 'Hallasan National Park, Sŏgwip’o-si, Jeju-do, KOR',
            Geometry: {
              Point: [126.55769, 33.37183],
            },
            Region: 'Jeju-do',
            Country: 'KOR',
            Interpolated: false,
            Categories: ['PointOfInterestType', 'Park'],
          },
          Relevance: 1,
        },
      ],
    },
    {
      Summary: {
        Text: 'Seongsan Ilchulbong',
        FilterCountries: ['KOR'],
        MaxResults: 3,
        ResultBBox: [126.925264359267, 33.454372890366, 126.93917, 33.462372625457],
        DataSource: 'Esri',
      },
      Results: [
        {
          Place: {
            Label: 'Seongsan Ilchulbong, Jeju-do, KOR',
            Geometry: {
              Point: [126.93917, 33.45917],
            },
            Region: 'Jeju-do',
            Country: 'KOR',
            Interpolated: false,
            Categories: ['PointOfInterestType'],
            SupplementalCategories: ['Hill'],
          },
          Relevance: 1,
        },
      ],
    },
    null,
    {
      Summary: {
        Text: '제주특별자치도 서귀포시 표선면 민속해안로 631-34 토속 박물관 제주민속촌',
        FilterCountries: ['KOR'],
        MaxResults: 3,
        ResultBBox: [126.838259799045, 33.324091, 126.842332, 33.325312650622],
        DataSource: 'Esri',
      },
      Results: [
        {
          Place: {
            Label: '제주특별자치도 서귀포시 표선면 표선리 민속해안로 631-34 제주민속촌',
            Geometry: {
              Point: [126.842332, 33.324091],
            },
            AddressNumber: '631-34',
            Street: '민속해안로',
            Neighborhood: '표선면',
            Municipality: '서귀포시',
            Region: '제주특별자치도',
            Country: 'KOR',
            Interpolated: false,
            Categories: ['PointOfInterestType'],
            SupplementalCategories: ['Historical Monument'],
          },
          Relevance: 0.9853000000000001,
        },
      ],
    },
    {
      Summary: {
        Text: '제주특별자치도 서귀포시 특별자치도, 안덕면 신화역사로 15 박물관 오설록 티 뮤지엄',
        FilterCountries: ['KOR'],
        MaxResults: 3,
        ResultBBox: [126.289473812231, 33.28885, 126.49748, 33.305923809906],
        DataSource: 'Esri',
      },
      Results: [
        {
          Place: {
            Label: '제주특별자치도 서귀포시 안덕면 서광리 신화역사로 15',
            Geometry: {
              Point: [126.289473812231, 33.305923809906],
            },
            AddressNumber: '15',
            Street: '신화역사로',
            Neighborhood: '안덕면',
            Municipality: '서귀포시',
            Region: '제주특별자치도',
            Country: 'KOR',
            PostalCode: '63521',
            Interpolated: false,
            Categories: ['AddressType'],
          },
          Relevance: 0.9578,
        },
      ],
    },
    null,
    {
      Summary: {
        Text: 'Lotte Hotel Jeju',
        FilterCountries: ['KOR'],
        MaxResults: 3,
        ResultBBox: [126.4144, 33.2425, 126.5538312373, 33.442123712371],
        DataSource: 'Esri',
      },
      Results: [
        {
          Place: {
            Label: 'Lotte Hotel Jeju, Jeju-do, KOR',
            Geometry: {
              Point: [126.4144, 33.2425],
            },
            Region: 'Jeju-do',
            Country: 'KOR',
            Interpolated: false,
            Categories: ['PointOfInterestType', 'Hotel'],
          },
          Relevance: 1,
        },
      ],
    },
    {
      Summary: {
        Text: 'Yongduam Rock',
        FilterCountries: ['KOR'],
        MaxResults: 3,
        ResultBBox: [126.51167, 33.51639, 127.553525169644, 38.059931541006],
        DataSource: 'Esri',
      },
      Results: [
        {
          Place: {
            Label: 'Yongdu-am, Jeju-do, KOR',
            Geometry: {
              Point: [126.51167, 33.51639],
            },
            Region: 'Jeju-do',
            Country: 'KOR',
            Interpolated: false,
            Categories: ['PointOfInterestType'],
            SupplementalCategories: ['Rock'],
          },
          Relevance: 0.9998,
        },
      ],
    },
    null,
    {
      Summary: {
        Text: '제주특별자치도 제주시 노연로 69 면세점 신라면세점 제주점',
        FilterCountries: ['KOR'],
        MaxResults: 3,
        ResultBBox: [126.487577076297, 33.45578, 126.53928, 33.50972],
        DataSource: 'Esri',
      },
      Results: [
        {
          Place: {
            Label: '제주특별자치도 제주시 연동 노연로 69',
            Geometry: {
              Point: [126.487577076297, 33.486285728163],
            },
            AddressNumber: '69',
            Street: '노연로',
            Neighborhood: '연동',
            Municipality: '제주시',
            Region: '제주특별자치도',
            Country: 'KOR',
            PostalCode: '63131',
            Interpolated: false,
            Categories: ['AddressType'],
          },
          Relevance: 0.9577,
        },
      ],
    },
    {
      Summary: {
        Text: '신대로20길 32 국수 전문점 삼대국수회관 신제주점',
        FilterCountries: ['KOR'],
        MaxResults: 3,
        ResultBBox: [126.493210469602, 33.483842612935, 126.496769406564, 33.495739983541],
        DataSource: 'Esri',
      },
      Results: [],
    },
    {
      Summary: {
        Text: '제주특별자치도 서귀포시 성산읍 섭지코지로 95 수족관 아쿠아플라넷 제주',
        FilterCountries: ['KOR'],
        MaxResults: 3,
        ResultBBox: [126.49748, 33.29307, 126.927795469262, 33.432976865877],
        DataSource: 'Esri',
      },
      Results: [
        {
          Place: {
            Label: '제주특별자치도 서귀포시 성산읍 고성리 섭지코지로 95',
            Geometry: {
              Point: [126.927795469262, 33.432976865877],
            },
            AddressNumber: '95',
            Street: '섭지코지로',
            Neighborhood: '성산읍',
            Municipality: '서귀포시',
            Region: '제주특별자치도',
            Country: 'KOR',
            PostalCode: '63642',
            Interpolated: false,
            Categories: ['AddressType'],
          },
          Relevance: 0.9656,
        },
      ],
    },
    null,
    null,
    {
      Summary: {
        Text: 'Lotte Hotel Jeju',
        FilterCountries: ['KOR'],
        MaxResults: 3,
        ResultBBox: [126.4144, 33.2425, 126.5538312373, 33.442123712371],
        DataSource: 'Esri',
      },
      Results: [
        {
          Place: {
            Label: 'Lotte Hotel Jeju, Jeju-do, KOR',
            Geometry: {
              Point: [126.4144, 33.2425],
            },
            Region: 'Jeju-do',
            Country: 'KOR',
            Interpolated: false,
            Categories: ['PointOfInterestType', 'Hotel'],
          },
          Relevance: 1,
        },
      ],
    },
  ] as unknown as AwsPlaceResult[],
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
