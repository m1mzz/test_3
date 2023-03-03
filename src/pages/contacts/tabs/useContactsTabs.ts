import { ref } from 'vue';
import ContactsActivityTab from './activity-tab/ContactsActivityTab.vue';
import ContactsFilesTab from './ContactsFilesTab.vue';
import ContactsLogsTab from './ContactsLogsTab.vue';
import ContactsVisitsTab from './ContactsVisitsTab.vue';

export const tabs = [
  {
    name: 'activities',
    label: 'Activities',
    component: ContactsActivityTab,
  },
  {
    name: 'logs',
    label: 'Logs',
    component: ContactsLogsTab,
  },
  {
    name: 'visits',
    label: 'Visits',
    component: ContactsVisitsTab,
  },
  {
    name: 'files',
    label: 'Files',
    counter: 8,
    component: ContactsFilesTab,
  },
];

export const activeTab = ref(tabs[0].name);
