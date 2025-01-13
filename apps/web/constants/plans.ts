import RESOURCE from './resources';

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
      { label: '1 dedicated developer', description: '1 dedicated developer', icon: RESOURCE.CHECK },
      {
        label: 'Custom workflow automations',
        description: 'Custom workflow automations',
        icon: RESOURCE.CHECK,
      },
      { label: 'Unlimited requests', description: 'Unlimited requests', icon: RESOURCE.CHECK },
      { label: 'Unlimited revisions', description: 'Unlimited revisions', icon: RESOURCE.CHECK },
      { label: 'Business consulting', description: 'Business consulting', icon: RESOURCE.X },
      { label: 'Custom chatbots', description: 'Custom chatbots', icon: RESOURCE.X },
      { label: 'Cancel & pause anytime', description: 'Cancel & pause anytime', icon: RESOURCE.CHECK },
    ],
  },
  PRO: {
    label: 'Pro',
    price: '€3.997',
    items: [
      { label: '2 dedicated developers', description: '2 dedicated developers', icon: RESOURCE.CHECK },
      {
        label: 'Custom workflow automations',
        description: 'Custom workflow automations',
        icon: RESOURCE.CHECK,
      },
      { label: 'Unlimited requests', description: 'Unlimited requests', icon: RESOURCE.CHECK },
      { label: 'Unlimited revisions', description: 'Unlimited revisions', icon: RESOURCE.CHECK },
      { label: 'Business consulting', description: 'Business consulting', icon: RESOURCE.CHECK },
      { label: 'Custom chatbots', description: 'Custom chatbots', icon: RESOURCE.CHECK },
      { label: 'Cancel & pause anytime', description: 'Cancel & pause anytime', icon: RESOURCE.CHECK },
    ],
  },
  CUSTOM: {
    label: 'Enterprise',
    price: 'Custom',
    items: [
      { label: 'X dedicated developers', description: 'X dedicated developers', icon: RESOURCE.CHECK },
      {
        label: 'Custom workflow automations',
        description: 'Custom workflow automations',
        icon: RESOURCE.CHECK,
      },
      { label: 'Unlimited requests', description: 'Unlimited requests', icon: RESOURCE.CHECK },
      { label: 'Unlimited revisions', description: 'Unlimited revisions', icon: RESOURCE.CHECK },
      { label: 'Business consulting', description: 'Business consulting', icon: RESOURCE.CHECK },
      { label: 'Custom chatbots', description: 'Custom chatbots', icon: RESOURCE.CHECK },
      { label: 'Cancel & pause anytime', description: 'Cancel & pause anytime', icon: RESOURCE.CHECK },
    ],
  },
} as PlanList;

export default PLANS;
