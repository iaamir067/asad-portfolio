export type Statistic = {
  id: string;
  value: string;
  label: string;
  description: string;
};

export const STATISTICS: readonly Statistic[] = [
  {
    id: 'years',
    value: '2+',
    label: 'Years',
    description: 'Production experience',
  },
  {
    id: 'projects',
    value: '5+',
    label: 'Apps',
    description: 'Shipped to App Store and Play Store',
  },
  {
    id: 'industries',
    value: '4',
    label: 'Industries',
    description: 'Fintech, healthcare, edtech, e-commerce',
  },
  {
    id: 'countries',
    value: '4',
    label: 'Countries',
    description: 'Clients across UK, USA, Spain, Germany',
  },
] as const;
