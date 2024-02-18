import './assets/main.css'
// var Vue = require('vue')
// var VueRouter = require('vue-router')
// import Vue from 'vue';
// import VueRouter from 'vue-router';
// import App from './App.vue';
// import router from './router';
// import Notifications from 'vue-notification';
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

Vue.config.productionTip = false;
Vue.use(VueRouter);
// Vue.use(Notifications);

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');