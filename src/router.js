import { createRouter, createWebHistory } from 'vue-router';
import store from './store';

// Ледачі завантаження компонентів
const Homepage = () => import('./pages/Homepage.vue');
const Apartment = () => import('./pages/Apartment.vue');
const LoginPage = () => import('./pages/Login.vue');
const RegistrationPage = () => import('./pages/Registration.vue');
const MyOrdersPage = () => import('./pages/MyOrders.vue');
const ErrorPage = () => import('./pages/ErrorPage.vue');

// Налаштування маршрутів
const routes = [
  {
    path: '/',
    component: Homepage,
    name: 'homepage',
  },
  {
    path: '/apartments/:id',
    component: Apartment,
    name: 'apartment',
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/my-orders',
    component: MyOrdersPage,
    name: 'my-orders',
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/login',
    component: LoginPage,
    name: 'login-page',
    meta: {
      hideForAuth: true,
    },
  },
  {
    path: '/registration',
    component: RegistrationPage,
    name: 'registration-page',
    meta: {
      hideForAuth: true,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    component: ErrorPage,
    name: 'error-page',
  },
];

// Створення екземпляра роутера
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Мідлвера для перевірки авторизації
router.beforeEach((to, from, next) => {
  const isLoggedIn = store.getters['auth/isLoggedIn'];

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isLoggedIn) {
      next({ name: 'login-page' });
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.hideForAuth)) {
    if (isLoggedIn) {
      next({ name: 'homepage' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;


// import VueRouter from 'vue-router';
// import ErrorPage from './pages/ErrorPage';
// import store from './store';

// const Homepage = () => import('./pages/Homepage');
// const Apartment = () => import('./pages/Apartment');
// const LoginPage = () => import('./pages/Login');
// const RegistrationPage = () => import('./pages/Registration');
// const MyOrdersPage = () => import('./pages/MyOrders');

// const routes = [
//   {
//     path: '/',
//     component: Homepage,
//     name: 'homepage',
//   },
//   {
//     path: '/apartments/:id',
//     component: Apartment,
//     name: 'apartment',
//     meta: {
//       requiresAuth: true,
//     },
//   },
//   {
//     path: '/my-orders',
//     component: MyOrdersPage,
//     name: 'my-orders',
//     meta: {
//       requiresAuth: true,
//     },
//   },
//   {
//     path: '/login',
//     component: LoginPage,
//     name: 'login-page',
//     meta: {
//       hideForAuth: true,
//     },
//   },
//   {
//     path: '/registration',
//     component: RegistrationPage,
//     name: 'registration-page',
//     meta: {
//       hideForAuth: true,
//     },
//   },
//   {
//     path: '*',
//     component: ErrorPage,
//     name: 'error-page',
//   },
// ];

// const router = new VueRouter({
//   routes,
//   mode: 'history',
// });

// router.beforeEach((to, from, next) => {
//   const isLoggedIn = store.getters['auth/isLoggedIn'];

//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (!isLoggedIn) {
//       next({ name: 'login-page' });
//     }
//   }

//   if (to.matched.some((record) => record.meta.hideForAuth)) {
//     if (isLoggedIn) {
//       next({ name: 'homepage' });
//     }
//   }

//   next();
// });

// export default router;
