import { ref } from 'vue';
import ActivityDealTab from './ActivityDealTab.vue';
import ActivityNoteTab from './ActivityNoteTab.vue';
import ActivityReminderTab from './ActivityReminderTab.vue';
import ActivityTaskTab from './ActivityTaskTab.vue';
import ActivityTicketTab from './ActivityTicketTab.vue';

export const tabs = [
  {
    name: 'note',
    label: 'Internal note',
    component: ActivityNoteTab,
  },
  {
    name: 'task',
    label: 'Task',
    component: ActivityTaskTab,
  },
  {
    name: 'deal',
    label: 'Deal',
    component: ActivityDealTab,
  },
  {
    name: 'ticket',
    label: 'Ticket',
    component: ActivityTicketTab,
  },
  {
    name: 'reminder',
    label: 'Reminder',
    component: ActivityReminderTab,
  },
];
export const activeTab = ref(tabs[0].name);
