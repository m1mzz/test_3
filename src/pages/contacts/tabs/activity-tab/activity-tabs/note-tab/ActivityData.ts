import { reactive } from 'vue';
import type { Activity } from './ActivityTypes';

export default reactive<Activity[]>([
  {
    title: 'Open activities',
    isExpanded: true,
    counter: 4,
    timelines: [
      {
        type: 'task',
        title: 'Product demo call with Ruth',
        description: 'Please call and explain the customer about our product and answer.',
        status: 'need attention',
        priority: 'urgent',
        date: '5 Mar, 2023 09:35 am',
      },
      {
        type: 'task',
        title: 'Product demo call with Ruth',
        description: 'Please call and explain the customer about our product and answer.',
        status: 'need attention',
        priority: 'urgent',
        date: '4 Mar, 2023 09:35 am',
      },
      {
        type: 'deal',
        title: 'Product demo call with Ruth',
        description: 'Please call and explain the customer about our product and answer.',
        status: 'need attention',
        priority: 'low',
        date: '19 Jun, 2021 09:35 am',
      },
    ],
  },
  {
    title: 'Past activities',
    isExpanded: true,
    counter: 46,
    timelines: [
      {
        type: 'task',
        title: 'Product demo call with Ruth',
        description: 'Please call and explain the customer about our product and answer.',
        status: 'need attention',
        priority: 'high',
        date: '19 Jun, 2021 09:35 am',
      },
      {
        type: 'deal',
        title: 'Product demo call with Ruth',
        description: 'Please call and explain the customer about our product and answer.',
        status: 'need attention',
        priority: 'urgent',
        date: '19 Jun, 2021 09:35 am',
      },
    ],
  },
]);
