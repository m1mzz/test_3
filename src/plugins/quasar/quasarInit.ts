import type { App } from 'vue';
import { Quasar } from 'quasar';
import quasarIconSet from 'quasar/icon-set/svg-material-icons';

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css';

// Import Quasar css
import 'quasar/src/css/index.sass';

export default (app: App) => {
  app.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
    iconSet: quasarIconSet,
  });
};
