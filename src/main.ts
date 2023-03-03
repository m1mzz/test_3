import { createApp } from 'vue';
import { createPinia } from 'pinia';
import quasarInit from './plugins/quasar/quasarInit';
import initBaseComponents from './plugins/base-components';
import './assets/styles/base.scss';
import App from './App.vue';

createApp(App)
  .use(createPinia())
  .use(quasarInit)
  .use(initBaseComponents)
  .mount('#app');
