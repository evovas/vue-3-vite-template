import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { router } from '/src/router';
import { i18n } from '/src/plugins/i18n';
import dayjs from '/src/plugins/dayjs.js';
import { VueQueryPlugin } from '@tanstack/vue-query';

import App from '/src/App.vue';
import AppButton from '/src/common/components/AppButton.vue';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia).use(router).use(i18n);

app.config.globalProperties.$dayjs = dayjs;

app.use(VueQueryPlugin, {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
      },
    },
  },
});

app.component('AppButton', AppButton);

app.mount('#app');
