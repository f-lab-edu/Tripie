const ROUTE = {
  PLAYGROUND: { label: 'Playground', href: '/playground' },
  HOME: { label: 'Home', href: '/home' },
  SERVICES: { label: 'Services', href: '/home#Services' },
  CONTACT: { label: 'Contact', href: '/home#Contact' },
  TRIP_PLANNER: { label: 'Trip Planner', href: '/trip-planner' },
  REGIONS: { label: '도시별 여행 정보', href: '/regions' },
  POSTS: { label: '도시별 여행 상세 정보', href: '/post' },
  SIGN_IN: { label: 'Sign in', href: '/sign-in' },
};

export const LANDING_SECTION = [
  { label: 'Process', href: '/home#Process' },
  ROUTE.SERVICES,
  { label: 'Work', href: '/home#Work' },
  { label: 'Plans', href: '/home#Plans' },
  ROUTE.CONTACT,
];

export default ROUTE;
