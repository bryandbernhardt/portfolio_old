import './assets/main.css';

import { createApp } from 'vue';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
/* import specific icons */
import { faHouse, faGear } from '@fortawesome/free-solid-svg-icons';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

import i18n from './i18n';
import App from './App.vue';

/* add icons */
library.add(faHouse, faGear);

createApp(App)
  .use(i18n)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
