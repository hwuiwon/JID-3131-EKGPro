import {
  UserIcon,
  ChartPieIcon,
  HomeIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

export interface NavigationElementProperties {
  name: string;
  href: string;
  icon: any;
  current: boolean;
}

export enum Page {
  DASHBOARD,
  PATIENT,
  ANALYSIS,
  APPOINTMENT,
  ACCOUNT,
}

export const getNavigationItems = (
  selected: Page
): NavigationElementProperties[] => [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: HomeIcon,
    current: selected === Page.DASHBOARD,
  },
  {
    name: 'Patients',
    href: '/patient',
    icon: UserIcon,
    current: selected === Page.PATIENT,
  },
  {
    name: 'Analysis',
    href: '/analysis',
    icon: ChartPieIcon,
    current: selected === Page.ANALYSIS,
  },
  {
    name: 'Appointments',
    href: '/appointment',
    icon: ClockIcon,
    current: selected === Page.APPOINTMENT,
  },
];
