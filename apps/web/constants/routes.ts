type Routes = { label: string; href: string };

const ROUTES = {
  API: {},
  PAGE: {
    LANDING: [
      { label: 'Process', href: '#Process' },
      { label: 'Services', href: '#Services' },
      ,
      { label: 'Work', href: '#Work' },
      { label: 'Plans', href: '#Plans' },
      { label: 'Contact', href: '#Contact' },
    ] as Routes[],
    PLAYGROUND: { label: 'Playground', href: '/playground' },
  },
};

export default ROUTES;
