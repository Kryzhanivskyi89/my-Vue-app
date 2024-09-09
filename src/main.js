import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Notifications from '@kyvg/vue3-notification';

import './assets/scss/index.scss';

// Створіть додаток за допомогою createApp
const app = createApp(App);

// Використовуйте плагіни і компоненти
app.use(router);
app.use(store);
app.use(Notifications);

// Монтуйте додаток
app.mount('#app');

// import { createApp } from 'vue'
// import App from './App.vue'
// import Vue from 'vue';
// import VueRouter from 'vue-router';
// import router from './router';
// import Notifications from '@kyvg/vue3-notification';
// import store from './store';

// import './assets/scss/index.scss';

// const app = Vue.createApp({App,
//       router, store,
// })

// app.mount('#app')

// createApp(App).mount('#app')
// Vue.configureCompat({ WATCH_ARRAY: false })
// Vue.config.productionTip = false;
// Vue.use(VueRouter);
// Vue.use(Notifications);

// new Vue({
//   render: (h) => h(App),
//   router,
//   store,
// }).$mount('#app');


// createApp({extends: App})
//   .use(router)
//   .use(store).mount('#app')
