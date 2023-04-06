import ViewHome from '/src/views/ViewHome.vue';

export default [
  {
    path: '/:catchAll(.*)*',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'ViewHome',
    component: ViewHome,
  },
];
