import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { router } from '/src/router';
import { i18n } from '/src/plugins/i18n';

import piniaPlugins from '/src/plugins/pinia-plugins.js';
import useVuePlugins from '/src/plugins/vue-plugins.js';

import App from '/src/App.vue';
import AppButton from '/src/common/components/AppButton.vue';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia).use(router).use(i18n);

useVuePlugins(app);

pinia.use(piniaPlugins);

app.mount('#app');

app.component('AppButton', AppButton);
