type Item = {
  label: string;
  description: string;
  icon: string;
};
type PlanList = {
  [index: string]: { label: string; price: string; items: Item[] };
};

const PLANS = {
  BASIC: {
    label: 'Basic',
    price: 'Free',
    items: [
      {
        label: '여행 정보 열람 무제한',
        description: '여행 정보 열람 무제한',
        icon: 'CHECK',
      },
      { label: 'daily 10 requests', description: '매일 최대 10개의 AI 추천 일정', icon: 'CHECK' },
      { label: '여행일정 공유', description: '여행일정 공유', icon: 'CHECK' },
      {
        label: '여행 일정 추천 결과를 영구 링크로 제공',
        description: '여행 일정 추천 결과를 영구 링크로 제공',
        icon: 'CHECK',
      },
      { label: '취향을 더 반영한 맞춤 여행 일정', description: '취향을 더 반영한 맞춤 여행 일정', icon: 'X' },
      { label: '언제든지 구독 취소 & 중단', description: '언제든지 구독 취소 & 중단', icon: 'CHECK' },
    ],
  },
  UNLIMITED: {
    label: 'Unlimited',
    price: '₩3,600',
    items: [
      {
        label: '여행 정보 열람 무제한',
        description: '여행 정보 열람 무제한',
        icon: 'CHECK',
      },
      { label: 'daily 100 requests', description: '매일 최대 100개의 AI 추천 일정', icon: 'CHECK' },

      { label: '여행일정 공유', description: '여행일정 공유', icon: 'CHECK' },
      {
        label: '여행 일정 추천 결과를 영구 링크로 제공',
        description: '여행 일정 추천 결과를 영구 링크로 제공',
        icon: 'CHECK',
      },
      { label: '취향을 더 반영한 맞춤 여행 일정', description: '취향을 더 반영한 맞춤 여행 일정', icon: 'CHECK' },
      { label: '언제든지 구독 취소 & 중단', description: '언제든지 구독 취소 & 중단', icon: 'CHECK' },
    ],
  },
  CUSTOM: {
    label: 'Custom',
    price: 'Custom',
    items: [
      {
        label: '여행 정보 열람 무제한',
        description: '여행 정보 열람 무제한',
        icon: 'CHECK',
      },
      { label: 'daily unlimited requests', description: '매일 무제한 AI 추천 일정', icon: 'CHECK' },

      { label: '여행일정 공유', description: '여행일정 공유', icon: 'CHECK' },
      {
        label: '여행 일정 추천 결과를 영구 링크로 제공',
        description: '여행 일정 추천 결과를 영구 링크로 제공',
        icon: 'CHECK',
      },
      { label: '취향을 더 반영한 맞춤 여행 일정', description: '취향을 더 반영한 맞춤 여행 일정', icon: 'CHECK' },
      { label: '언제든지 구독 취소 & 중단', description: '언제든지 구독 취소 & 중단', icon: 'CHECK' },
    ],
  },
} as PlanList;

export default PLANS;
