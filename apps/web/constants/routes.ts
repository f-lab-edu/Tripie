const ROUTE = {
  PLAYGROUND: { label: 'Playground', href: '/playground' },
  HOME: { label: 'Home', href: '/home' },
  SERVICES: { label: 'Services', href: '/home#Services' },
  CONTACT: { label: 'Contact', href: '/home#Contact' },
  TRIP_PLANNER: { label: 'Trip Planner', href: '/trip-planner' },
  REGIONS: { label: '도시별 여행 정보', href: '/regions' },
  SIGN_IN: { label: 'Sign in', href: '/api/auth/signin' },
};

export const LANDING_SECTION = [
  { label: 'Process', href: '/#Process' },
  ROUTE.SERVICES,
  { label: 'Work', href: '/#Work' },
  { label: 'Plans', href: '/#Plans' },
  ROUTE.CONTACT,
];

export default ROUTE;
