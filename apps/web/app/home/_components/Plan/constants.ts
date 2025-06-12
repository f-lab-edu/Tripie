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
    price: '€1.997',
    items: [
      { label: '1 dedicated developer', description: '1 dedicated developer', icon: 'CHECK' },
      {
        label: 'Custom workflow automations',
        description: 'Custom workflow automations',
        icon: 'CHECK',
      },
      { label: 'Unlimited requests', description: 'Unlimited requests', icon: 'CHECK' },
      { label: 'Unlimited revisions', description: 'Unlimited revisions', icon: 'CHECK' },
      { label: 'Business consulting', description: 'Business consulting', icon: 'X' },
      { label: 'Custom chatbots', description: 'Custom chatbots', icon: 'X' },
      { label: 'Cancel & pause anytime', description: 'Cancel & pause anytime', icon: 'CHECK' },
    ],
  },
  PRO: {
    label: 'Pro',
    price: '€3.997',
    items: [
      { label: '2 dedicated developers', description: '2 dedicated developers', icon: 'CHECK' },
      {
        label: 'Custom workflow automations',
        description: 'Custom workflow automations',
        icon: 'CHECK',
      },
      { label: 'Unlimited requests', description: 'Unlimited requests', icon: 'CHECK' },
      { label: 'Unlimited revisions', description: 'Unlimited revisions', icon: 'CHECK' },
      { label: 'Business consulting', description: 'Business consulting', icon: 'CHECK' },
      { label: 'Custom chatbots', description: 'Custom chatbots', icon: 'CHECK' },
      { label: 'Cancel & pause anytime', description: 'Cancel & pause anytime', icon: 'CHECK' },
    ],
  },
  CUSTOM: {
    label: 'Enterprise',
    price: 'Custom',
    items: [
      { label: 'X dedicated developers', description: 'X dedicated developers', icon: 'CHECK' },
      {
        label: 'Custom workflow automations',
        description: 'Custom workflow automations',
        icon: 'CHECK',
      },
      { label: 'Unlimited requests', description: 'Unlimited requests', icon: 'CHECK' },
      { label: 'Unlimited revisions', description: 'Unlimited revisions', icon: 'CHECK' },
      { label: 'Business consulting', description: 'Business consulting', icon: 'CHECK' },
      { label: 'Custom chatbots', description: 'Custom chatbots', icon: 'CHECK' },
      { label: 'Cancel & pause anytime', description: 'Cancel & pause anytime', icon: 'CHECK' },
    ],
  },
} as PlanList;

export default PLANS;
